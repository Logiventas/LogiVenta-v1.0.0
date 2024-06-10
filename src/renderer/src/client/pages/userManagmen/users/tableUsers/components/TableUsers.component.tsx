import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { user } from "../models/user.model";
import { ColDef } from "ag-grid-community";

interface TableUsersProps {
    data: user[];
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
        { headerName: "ID Usuario", field: "identification", sortable: true, filter: true, resizable: true },
        { headerName: "Primer Nombre", field: "firstName", sortable: true, filter: true, resizable: true },
        { headerName: "Segundo Nombre", field: "secondName", sortable: true, filter: true, resizable: true },
        { headerName: "Primer Apellido", field: "surname", sortable: true, filter: true, resizable: true },
        { headerName: "Segundo Apellido", field: "secondSurname", sortable: true, filter: true, resizable: true },
        { headerName: "Perfil", field: "profile", sortable: true, filter: true, resizable: true },
        { headerName: "Cargo", field: "job", sortable: true, filter: true, resizable: true },
        { headerName: "Teléfono ", field: "phone1", sortable: true, filter: true, resizable: true },
        { headerName: "Email", field: "email", sortable: true, filter: true, resizable: true },
        { 
            headerName: "Acciones",
            cellRenderer: (params) => (
              <Link to={`/userManagement/editUser/${params.data.idUser}`} className="btn btn-primary">Editar</Link>
            ),
        }
    ];

    const rowData = data.map(user => ({
        ...user,
        actions: "" // Asegúrate de que este campo esté definido para todas las filas
    }));

    const localeText = {
        noRowsToShow: 'No hay filas para mostrar', // Cambia este texto al mensaje que desees
    };

    return (
        <div className="ag-theme-quartz" style={{ height: '250px', width: '100%' }}>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                defaultColDef={{
                    flex: 1,
                    minWidth: 90,
                }}
                pagination={false}
                paginationPageSize={10}
                onRowClicked={(event) => handleRowClick(event.data.idUser)}
                rowClassRules={{
                    'selected-row': params => selectedRows.includes(params.data.idUser)
                }}
                localeText={localeText}
            />
        </div>
    );
};

export default TableUsers;
