import { PlaneIcon } from 'lucide-react';

export const aircraft_placeholder = <div className='flex items-center justify-center bg-gray-400 w-full h-40 rounded-md'>
    <PlaneIcon className='w-16 h-16 text-white' />
</div>

export const default_avatar = (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;

// usage: default_avatar(encodeURIComponent(getUserDisplayName(user)))
