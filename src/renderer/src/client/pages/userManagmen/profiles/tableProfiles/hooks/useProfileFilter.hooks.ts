import { useState, useEffect } from 'react';
import { Profile } from '../models/Profile.model';
import { geProfiles } from '../adapters/allProfiles.adapter';

export const useProfileFilter = () => {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [filters, setFilters] = useState<Record<string, string>>({
        profile: ""
    });
    const [error, setError] = useState<string | null>(null);

    const fetchProfiles = async () => {
        try {
            const profiles = await geProfiles();
            setProfiles(profiles);
        } catch (error) {
            setError('Error al obtener los perfiles');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProfiles();
    }, []);

    const handleFilterChange = (newFilters: Record<string, string>) => {
        setFilters(newFilters);
    };

    const filteredUsers = profiles.filter(profile => {
        return Object.keys(filters).every(key => {
            if (!filters[key]) return true;
            const value = profile[key as keyof Profile]?.toString().toLowerCase();
            return value?.startsWith(filters[key].toLowerCase());
        });
    });

    const jobOptions = Array.from(new Set(profiles.map(profile => profile.profile)));

    const reloadProfiles = async () => {
        await fetchProfiles();
    };

    return { filteredUsers, handleFilterChange, jobOptions, error, reloadProfiles };
};
