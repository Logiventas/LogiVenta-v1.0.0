//src\renderer\src\client\pages\userManagmen\users\tableUsers\hooks\useUsers.ts
import { useState, useEffect } from 'react';
import { user } from '../models/user.model';
import { getUsers } from '../adapters/allUser.adapter';

export const useUserFilter = () => {
    const [users, setUsers] = useState<user[]>([]);
    const [filters, setFilters] = useState<Record<string, string>>({
        identification: "",
        firstName: "",
        secondName: "",
        surname: "",
        secondSurname: "",
        profile: "",
        phone1: "",
        email: "",
        job: ""
    });

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
        };
        fetchUsers();
    }, []);

    const handleFilterChange = (newFilters: Record<string, string>) => {
        setFilters(newFilters);
    };

    const filteredUsers = users.filter(user => {
        return Object.keys(filters).every(key => {
            if (!filters[key]) return true;
            const value = user[key as keyof user]?.toString().toLowerCase();
            return value?.startsWith(filters[key].toLowerCase());
        });
    });

    const profileOptions = Array.from(new Set(users.map(user => user.profile)));
    const jobOptions = Array.from(new Set(users.map(user => user.job)));

    return { filteredUsers, handleFilterChange, profileOptions, jobOptions };
};
