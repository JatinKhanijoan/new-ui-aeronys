import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';

interface SearchableListProps<T> {
    data: T[];
    searchFields?: (keyof T | string)[];
    placeholder?: string;
    renderItem: (item: T, index: number) => React.ReactNode;
    emptyMessage?: string;
    className?: string;
    showClearButton?: boolean;
    caseSensitive?: boolean;
}

const getNestedValue = (obj: any, path: string): any => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
};

const searchInObject = (obj: any, searchTerm: string, caseSensitive: boolean = false): boolean => {
    if (typeof obj === 'string') {
        return caseSensitive
            ? obj.includes(searchTerm)
            : obj.toLowerCase().includes(searchTerm.toLowerCase());
    }

    if (typeof obj === 'number') {
        return obj.toString().includes(searchTerm);
    }

    if (Array.isArray(obj)) {
        return obj.some(item => searchInObject(item, searchTerm, caseSensitive));
    }

    if (obj && typeof obj === 'object') {
        return Object.values(obj).some(value => searchInObject(value, searchTerm, caseSensitive));
    }

    return false;
};

function SearchableList<T>({
    data = [],
    searchFields = [],
    placeholder = "Search...",
    renderItem,
    emptyMessage = "No results found",
    className = "",
    showClearButton = true,
    caseSensitive = false
}: SearchableListProps<T>) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = useMemo(() => {
        if (!searchTerm.trim()) {
            return data;
        }

        const searchValue = caseSensitive ? searchTerm : searchTerm.toLowerCase();

        return data.filter(item => {
            if (searchFields.length > 0) {
                return searchFields.some(field => {
                    const value = getNestedValue(item, field as string);
                    if (value === null || value === undefined) return false;

                    const stringValue = value.toString();
                    return caseSensitive
                        ? stringValue.includes(searchValue)
                        : stringValue.toLowerCase().includes(searchValue);
                });
            }

            return searchInObject(item, searchTerm, caseSensitive);
        });
    }, [data, searchTerm, searchFields, caseSensitive]);

    const handleClear = () => {
        setSearchTerm('');
    };

    return (
        <div className={`w-full space-y-4 ${className}`}>
            {/* Search Input */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-10"
                />
                {showClearButton && searchTerm && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleClear}
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                )}
            </div>

            {/* Results Count */}
            {searchTerm && (
                <p className="text-sm text-gray-500">
                    {filteredData.length} result{filteredData.length !== 1 ? 's' : ''} found
                </p>
            )}

            {/* Search Results */}
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <div key={index}>
                        {renderItem(item, index)}
                    </div>
                ))
            ) : (
                <Card>
                    <CardContent className="flex items-center justify-center py-8">
                        <p className="text-gray-500 text-center">{emptyMessage}</p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

export function useSearchableData<T>(
    data: T[],
    searchFields?: (keyof T | string)[],
    caseSensitive: boolean = false
) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = useMemo(() => {
        if (!searchTerm.trim()) {
            return data;
        }

        const searchValue = caseSensitive ? searchTerm : searchTerm.toLowerCase();

        return data.filter(item => {
            if (searchFields && searchFields.length > 0) {
                return searchFields.some(field => {
                    const value = getNestedValue(item, field as string);
                    if (value === null || value === undefined) return false;

                    const stringValue = value.toString();
                    return caseSensitive
                        ? stringValue.includes(searchValue)
                        : stringValue.toLowerCase().includes(searchValue);
                });
            }

            return searchInObject(item, searchTerm, caseSensitive);
        });
    }, [data, searchTerm, searchFields, caseSensitive]);

    return { searchTerm, setSearchTerm, filteredData };
}

export function SearchInput({
    searchTerm,
    onSearchChange,
    placeholder = "Search...",
    showClearButton = true,
    className = ""
}: {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    placeholder?: string;
    showClearButton?: boolean;
    className?: string;
}) {
    const handleClear = () => {
        onSearchChange('');
    };

    return (
        <div className={`relative ${className}`}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-10"
            />
            {showClearButton && searchTerm && (
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClear}
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
                >
                    <X className="h-4 w-4" />
                </Button>
            )}
        </div>
    );
}

export default SearchableList;
