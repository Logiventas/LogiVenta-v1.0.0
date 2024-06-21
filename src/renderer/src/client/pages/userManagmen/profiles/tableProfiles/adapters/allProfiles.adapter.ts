// src/renderer/src/client/pages/userManagmen/profiles/tableProfiles/adapters/allProfiles.adapter.ts
import { Profile } from '../models/Profile.model';
import allUser from '../services/allProfiles.service';

export const geProfiles = async (): Promise<Profile[]> => {
    try {
        const profiles = await allUser();
        return profiles;
    } catch (error) {
        console.error('Error fetching profiles:', error);
        return [];
    }
};
