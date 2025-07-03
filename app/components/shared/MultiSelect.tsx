"use client";
import { X } from "lucide-react";
import * as React from "react";
import { Badge } from "~/components/ui/badge";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "~/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { useCallback, useMemo, useEffect } from "react";

export type Option = {
    value: string; // UUID
    label: string; // User name
};

export interface MultiSelectProps {
    options: Option[];
    defaultValues?: string[]; // Array of UUIDs
    placeholder?: string;
    onChange?: (selectedUuids: string[]) => void;
    className?: string;
    disabled?: boolean;
    maxSelections?: number;
    name?: string; // For form integration
}

export default function MultiSelect({
    options,
    defaultValues = [],
    placeholder = "Select options...",
    onChange,
    className = "",
    disabled = false,
    maxSelections,
    name,
}: MultiSelectProps) {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<Option[]>([]);
    const [inputValue, setInputValue] = React.useState("");
    const [isInitializing, setIsInitializing] = React.useState(true);

    useEffect(() => {
        if (defaultValues.length > 0 && options.length > 0) {
            const defaultOptions = options.filter(option =>
                defaultValues.includes(option.value)
            );
            setSelected(defaultOptions);
        }
        const timer = setTimeout(() => {
            setIsInitializing(false);
        }, 200);

        return () => clearTimeout(timer);
    }, [defaultValues, options]);


    useEffect(() => {
        if (defaultValues.length > 0 && options.length > 0) {
            const defaultOptions = options.filter(option =>
                defaultValues.includes(option.value)
            );
            setSelected(defaultOptions);
        }
    }, [defaultValues, options]);

    useEffect(() => {
        const selectedUuids = selected.map(item => item.value);
        onChange?.(selectedUuids);
    }, [selected, onChange]);

    const handleUnselect = useCallback((option: Option) => {
        setSelected((prev) => prev.filter((s) => s.value !== option.value));
    }, []);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (disabled) return;

            if (e.key === "Backspace" && inputValue === "" && selected.length > 0) {
                setSelected((prev) => prev.slice(0, -1));
            }

            if (e.key === "Escape") {
                setOpen(false);
            }
        },
        [selected, inputValue, disabled]
    );

    const handleSelect = useCallback((option: Option) => {
        if (disabled) return;

        // Check if already selected
        if (selected.some(s => s.value === option.value)) return;

        // Check max selections limit
        if (maxSelections && selected.length >= maxSelections) return;

        setSelected((prev) => [...prev, option]);
        setInputValue("");
    }, [selected, disabled, maxSelections]);

    const filteredOptions = useMemo(() => {
        return options.filter((option) => {
            const isNotSelected = !selected.some(s => s.value === option.value);
            const matchesSearch = option.label.toLowerCase().includes(inputValue.toLowerCase());
            return isNotSelected && matchesSearch;
        });
    }, [options, selected, inputValue]);

    // Get selected UUIDs for form submission
    const getSelectedValues = useCallback(() => {
        return selected.map(item => item.value);
    }, [selected]);

    return (
        <div className={`w-full ${className}`}>
            {name && (
                <input
                    type="hidden"
                    name={name}
                    value={JSON.stringify(getSelectedValues())}
                />
            )}

            <Command className="overflow-visible bg-transparent">
                <div className={`group relative rounded-md border border-input bg-background text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${disabled ? 'opacity-50 cursor-not-allowed bg-muted' : ''}`}>
                    <div className="flex min-h-10 flex-wrap items-center gap-1 px-3 py-2">
                        {selected.map((option) => (
                            <Badge
                                key={option.value}
                                variant="secondary"
                                className="select-none cursor-pointer"
                                onClick={() => handleUnselect(option)}
                            >
                                {option.label}
                                <X
                                    className="size-4 hover:scale-110 text-muted-foreground hover:text-foreground ml-2 cursor-pointer"
                                />
                            </Badge>
                        ))}

                        <CommandPrimitive.Input
                            disabled={disabled}
                            onKeyDown={handleKeyDown}
                            onValueChange={setInputValue}
                            value={inputValue}
                            onBlur={() => setOpen(false)}
                            onFocus={() => {
                                if (!disabled && !isInitializing) {
                                    setOpen(true);
                                }
                            }}
                            placeholder={
                                selected.length === 0
                                    ? placeholder
                                    : maxSelections && selected.length >= maxSelections
                                        ? ``
                                        : "Add more..."
                            }
                            className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed p-0 h-auto border-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>
                </div>
                <div className="relative mt-2">
                    <CommandList>
                        {open && !disabled && filteredOptions.length > 0 && (
                            <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95">
                                <CommandGroup className="max-h-64 overflow-auto p-1">
                                    {filteredOptions.map((option) => (
                                        <CommandItem
                                            key={option.value}
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                            }}
                                            onSelect={() => handleSelect(option)}
                                            className="cursor-pointer"
                                        >
                                            {option.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </div>
                        )}

                        {open && !disabled && inputValue && filteredOptions.length === 0 && (
                            <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none">
                                <div className="p-2 text-sm text-muted-foreground">
                                    No users found matching "{inputValue}"
                                </div>
                            </div>
                        )}
                    </CommandList>
                </div>
            </Command>
        </div>
    );
}