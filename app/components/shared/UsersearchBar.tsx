import { useState } from "react";
import { AsyncSelect } from "~/components/ui/async-select";
import { X } from "lucide-react";
import { default_avatar } from "~/constants";

type User = {
    user_id: string;
    first_name: string;
    last_name: string;
    role: string;
    email_id: string;
    profile_image_url: string | null;
};

interface SearchUserProps {
    users: User[];
    onSelectionChange?: (selectedUsers: User[]) => void;
    isMulti: boolean;
}

function UserSearchBar({ users, onSelectionChange, isMulti }: SearchUserProps) {

    const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
    const [currentValue, setCurrentValue] = useState("");

    const userFetcher = async (query?: string): Promise<User[]> => {
        if (!query || query.trim() === "") {
            return users;
        }

        const searchLower = query.toLowerCase();
        return users.filter(user =>
            `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchLower) ||
            user.email_id.toLowerCase().includes(searchLower) ||
            user.role.toLowerCase().includes(searchLower)
        );
    };

    const filterFn = (user: User, query: string): boolean => {
        const isNotSelected = !selectedUsers.some(selected => selected.user_id === user.user_id);
        if (!query) return isNotSelected;

        const searchLower = query.toLowerCase();
        const matchesSearch =
            `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchLower) ||
            user.email_id.toLowerCase().includes(searchLower) ||
            user.role.toLowerCase().includes(searchLower);

        return isNotSelected && matchesSearch;
    };

    const handleUserSelect = (userId: string) => {
        const user = users.find(u => u.user_id === userId);
        if (user && !selectedUsers.some(selected => selected.user_id === userId)) {
            const newSelectedUsers = [...selectedUsers, user];
            setSelectedUsers(newSelectedUsers);
            setCurrentValue("");
            onSelectionChange?.(newSelectedUsers);
        }
    };

    const removeUser = (userId: string) => {
        const newSelectedUsers = selectedUsers.filter(user => user.user_id !== userId);
        setSelectedUsers(newSelectedUsers);
        onSelectionChange?.(newSelectedUsers);
    };

    const getUserDisplayName = (user: User): string => {
        return `${user.first_name} ${user.last_name}`.trim();
    };

    const getAvatarUrl = (user: User): string => {
        return user.profile_image_url || default_avatar(encodeURIComponent(getUserDisplayName(user)))
    };

    return (
        <div className="w-full space-y-1">
            {/* Selected Users Display */}
            <AsyncSelect<User>
                fetcher={userFetcher}
                preload={true}
                filterFn={filterFn}
                renderOption={(user) => (
                    <div className="flex items-center gap-3 py-1">
                        <img
                            src={getAvatarUrl(user)}
                            alt={getUserDisplayName(user)}
                            width={32}
                            height={32}
                            className="rounded-full flex-shrink-0"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = default_avatar(encodeURIComponent(getUserDisplayName(user)));
                            }}
                        />
                        <div className="flex flex-col min-w-0 flex-1">
                            <div className="font-medium text-sm truncate">
                                {getUserDisplayName(user)}
                            </div>
                            <div className="text-xs text-muted-foreground truncate">
                                {user.email_id}
                            </div>
                            <div className="text-xs text-muted-foreground/80 truncate">
                                {user.role}
                            </div>
                        </div>
                    </div>
                )}
                getOptionValue={(user) => user.user_id}
                getDisplayValue={() => (
                    <span className="text-muted-foreground">
                        {selectedUsers.length > 0
                            ? `${selectedUsers.length} user${selectedUsers.length === 1 ? '' : 's'} selected`
                            : "Search and select users..."
                        }
                    </span>
                )}
                notFound={
                    <div className="py-6 text-center text-sm text-muted-foreground">
                        No users found matching your search
                    </div>
                }
                label="Users"
                placeholder={selectedUsers.length > 0 ? `${selectedUsers.length} selected` : "Search users..."}
                value={currentValue}
                onChange={handleUserSelect}
                width="100%"
                clearable={false}
                noResultsMessage="No users found"
                disabled={selectedUsers.length === 1 && !isMulti}
            />
            {selectedUsers.length > 0 && (
                <div className="flex flex-wrap gap-1 p-1 rounded-md">
                    {/* Search Input */}
                    {selectedUsers.map((user) => (
                        <div
                            key={user.user_id}
                            className="flex items-center gap-2 bg-background px-3 py-1 rounded-full border"
                        >
                            <img
                                src={getAvatarUrl(user)}
                                alt={getUserDisplayName(user)}
                                width={20}
                                height={20}
                                className="rounded-full"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = default_avatar(encodeURIComponent(getUserDisplayName(user)));
                                }}
                            />
                            <span className="text-sm font-medium">
                                {getUserDisplayName(user)}
                            </span>
                            <button
                                onClick={() => removeUser(user.user_id)}
                                className="ml-1 hover:bg-muted rounded-full p-0.5 transition-colors"
                                aria-label={`Remove ${getUserDisplayName(user)}`}
                            >
                                <X className="hover:cursor-pointer" size={12} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UserSearchBar;