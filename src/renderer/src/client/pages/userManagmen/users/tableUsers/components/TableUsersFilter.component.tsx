//src\renderer\src\client\pages\userManagmen\users\tableUsers\components\TableUsersFilter.component.tsx
import React, { useState } from "react";

interface TableFilterProps {
    onFilterChange: (filters: Record<string, string>) => void;
    profileOptions: string[];
    jobOptions: string[];
}

const TableFilter: React.FC<TableFilterProps> = ({ onFilterChange, profileOptions, jobOptions }) => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <div className="table-filter row">
            <div className="col-4">
                <div className="form-group text-lg d-flex">
                    <label className="col-4" htmlFor="identification">ID</label>
                    <input
                        type="text"
                        id="identification"
                        name="identification"
                        placeholder="Identificación"
                        value={filters.identification}
                        onChange={handleChange}
                        className="form-control mb-1"
                    />
                </div>
                <div className="form-group text-lg d-flex">
                    <label className="col-4" htmlFor="firstName">P. Nombre</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Nombre"
                        value={filters.firstName}
                        onChange={handleChange}
                        className="form-control mb-1"
                    />
                </div>
                <div className="form-group text-lg d-flex">
                    <label className="col-4" htmlFor="secondName">S. Nombre</label>
                    <input
                        type="text"
                        id="secondName"
                        name="secondName"
                        placeholder="Nombre"
                        value={filters.secondName}
                        onChange={handleChange}
                        className="form-control mb-1"
                    />
                </div>
            </div>
            <div className="col-4">
                <div className="form-group text-lg d-flex">
                    <label className="col-4" htmlFor="surname">P. Apellido</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Apellido"
                        value={filters.surname}
                        onChange={handleChange}
                        className="form-control mb-1"
                    />
                </div>
                <div className="form-group text-lg d-flex">
                    <label className="col-4" htmlFor="secondSurname">S. Apellido</label>
                    <input
                        type="text"
                        id="secondSurname"
                        name="secondSurname"
                        placeholder="Apellido"
                        value={filters.secondSurname}
                        onChange={handleChange}
                        className="form-control mb-1"
                    />
                </div>
                <div className="form-group text-lg d-flex">
                    <label className="col-4" htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Ejemplo@mail.com"
                        value={filters.email}
                        onChange={handleChange}
                        className="form-control mb-1"
                    />
                </div>
            </div>
            <div className="col-4">
                <div className="form-group text-lg d-flex">
                    <label className="col-4" htmlFor="phone1">Teléfono</label>
                    <input
                        type="text"
                        id="phone1"
                        name="phone1"
                        placeholder="Teléfono"
                        value={filters.phone1}
                        onChange={handleChange}
                        className="form-control mb-1"
                    />
                </div>
                <div className="form-group text-lg d-flex">
                    <label className="col-4" htmlFor="profile">Perfil</label>
                    <select
                        id="profile"
                        name="profile"
                        value={filters.profile}
                        onChange={handleChange}
                        className="form-select mb-1"
                    >
                        <option value="">Seleccione Perfil</option>
                        {profileOptions.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group text-lg d-flex">
                    <label className="col-4" htmlFor="job">Cargo</label>
                    <select
                        id="job"
                        name="job"
                        value={filters.job}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Seleccione Cargo</option>
                        {jobOptions.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TableFilter;
