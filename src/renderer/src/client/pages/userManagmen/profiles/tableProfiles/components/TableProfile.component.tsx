// src/renderer/src/client/pages/userManagmen/profiles/tableProfiles/components/TableProfile.component.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Profile } from "../models/Profile.model";
import { ColDef } from "ag-grid-community";

interface TableUsersProps {
    data: Profile[];
}

const TableUsers: React.FC<TableUsersProps> = ({ data }) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const handleRowClick = (id: number) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const columnDefs: ColDef[] = [
        { headerName: "Nombre de Perfil", field: "profile", sortable: true, filter: false, resizable: true, width: 150 },
        { headerName: "Descripción", field: "description", sortable: true, filter: false, resizable: true, minWidth: 150, flex: 1 },
        {
            headerName: "Editar",
            cellRenderer: (params) => (
                <Link to={`/userManagement/editProfile/${params.data.id}`} className="btn py-0 m-auto btn-primary">Editar</Link>
            ),
            width: 110,
        },
        {
            headerName: "Eliminar",
            cellRenderer: (params) => (
                <Link to={`/userManagement/deleteProfile/${params.data.id}/${params.data.profile}`} className="btn py-0 btn-secondary">Eliminar</Link>
            ),
            width: 115,
        }
    ];

    const rowData = data.map(profile => ({
        ...profile,
        actions: ""
    }));

    const localeText = {
        noRowsToShow: 'No hay filas para mostrar',
    };

    return (
        <div className="ag-theme-quartz m-auto" style={{ height: '300px', width: '96%' }}>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                pagination={false}
                paginationPageSize={10}
                onRowClicked={(event) => handleRowClick(event.data.id)}
                rowClassRules={{
                    'selected-row': params => selectedRows.includes(params.data.id)
                }}
                localeText={localeText}
            />
        </div>
    );
};

export default TableUsers;
