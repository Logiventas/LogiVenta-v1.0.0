//src\renderer\src\client\pages\userManagmen\profiles\tableProfiles\components\TableProfile.component.tsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Profile } from "../models/Profile.model";
import { ColDef } from "ag-grid-community";
import { DeleteProfile } from "./DeletProfile";
import SelecteUserContext from '@client/contexts/userContext';

interface TableUsersProps {
  data: Profile[];
  reloadProfiles: () => void; // Nueva prop para recargar perfiles
}

const TableProfile: React.FC<TableUsersProps> = ({ data, reloadProfiles }) => {
  const { user } = useContext(SelecteUserContext);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<{ id: string, profile: string } | null>(null);

  const handleRowClick = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleDeleteClick = (id: string, profile: string) => {
    setSelectedProfile({ id, profile });
    setShowDeleteModal(true);
  };

  const columnDefs: ColDef[] = [
    { headerName: "Nombre de Perfil", field: "profile", sortable: true, filter: false, resizable: true, width: 150 },
    { headerName: "Descripción", field: "description", sortable: true, filter: false, resizable: true, minWidth: 150, flex: 1 },
    {
      headerName: "Editar",
      cellRenderer: (params) => (
        user.access['GU02-02'] && // Asegúrate de que este es el permiso correcto para editar perfiles
        <Link to={`/userManagement/editProfile/${params.data.id}`} className="btn py-0 m-auto btn-primary">Editar</Link>
      ),
      width: 110,
    },
    {
      headerName: "Eliminar",
      cellRenderer: (params) => (
        user.access['GU02-03'] && // Asegúrate de que este es el permiso correcto para eliminar perfiles
        <button 
          onClick={() => handleDeleteClick(params.data.id, params.data.profile)} 
          className="btn py-0 btn-secondary"
        >
          Eliminar
        </button>
      ),
      width: 115,
    }
  ];

  // Filtrar los datos para excluir el perfil con id 1
  const filteredData = data.filter(profile => profile.id !== 1);

  const rowData = filteredData.map(profile => ({
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
      {selectedProfile && (
        <DeleteProfile 
          show={showDeleteModal} 
          handleClose={() => setShowDeleteModal(false)} 
          idProfile={parseInt(selectedProfile.id)}
          profile={selectedProfile.profile}
          onProfileDeleted={reloadProfiles} // Pasa la función para recargar perfiles
        />
      )}
    </div>
  );
};

export default TableProfile;
