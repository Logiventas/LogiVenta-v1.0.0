// src/renderer/src/client/pages/userManagmen/profiles/tableProfiles/components/TableProfileFilter.component.tsx
import React, { useState } from "react";

interface TableFilterProps {
    onFilterChange: (filters: Record<string, string>) => void;
}

const TableFilter: React.FC<TableFilterProps> = ({ onFilterChange }) => {
    const [filters, setFilters] = useState<Record<string, string>>({
        profile: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <div className="d-flex">
            <label className="col-5 m-auto" htmlFor="profile">Nombre de Perfil</label>
            <input
                type="text"
                id="profile"
                name="profile"
                placeholder="Nombre Perfil"
                value={filters.profile}
                onChange={handleChange}
                className="form-control mb-1"
            />
        </div>
    );
};

export default TableFilter;
