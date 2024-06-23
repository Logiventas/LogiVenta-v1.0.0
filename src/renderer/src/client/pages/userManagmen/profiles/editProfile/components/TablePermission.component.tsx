import { useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-community';
import { Permission } from '../models/permission.model'; // Asegúrate de que esta ruta sea correcta

interface TablePermissionProps {
  onPermissionsChange: (permissions: Permission[]) => void;
  permissions: Permission[];
}

const TablePermission: React.FC<TablePermissionProps> = ({ onPermissionsChange, permissions }) => {
  console.log('PERMISOS EN LA TABLA ', permissions);

  const [rowData, setRowData] = useState<Permission[]>([]);
  const initialRender = useRef(true);

  useEffect(() => {
    setRowData(permissions);
    initialRender.current = true;
  }, [permissions]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    onPermissionsChange(rowData);
  }, [rowData]);

  const handleCheckboxChange = (id: string, value: boolean) => {
    setRowData(prevRowData => {
      let newRowData = [...prevRowData];

      const updatePermissions = (permisoId: string, state: boolean) => {
        newRowData = newRowData.map(permiso =>
          permiso.id === permisoId ? { ...permiso, state: state } : permiso
        );
      };

      // Encuentra el módulo, submódulo y funcionalidad del permiso actual
      const module = id.substring(0, 2);
      const subModule = id.substring(0, 5); // Incluye el submódulo completo

      // Si es un módulo, actualiza todos los submódulos y funcionalidades
      if (id.endsWith('00-00')) {
        newRowData.forEach(permiso => {
          if (permiso.id.startsWith(module)) {
            updatePermissions(permiso.id, value);
          }
        });
      }

      // Si es un submódulo, actualiza todas las funcionalidades dentro de este submódulo
      if (id.endsWith('-00') && !id.endsWith('00-00')) {
        let moduloState = value;

        newRowData.forEach(permiso => {
          if (permiso.id.startsWith(subModule)) {
            updatePermissions(permiso.id, moduloState);
          }
          if (permiso.id === `${module}00-00` && !permiso.state) {
            updatePermissions(`${module}00-00`, true);
          }
        });
      }

      // Si es una funcionalidad específica, solo actualiza esa funcionalidad
      if (!id.endsWith('00-00') && !id.endsWith('-00')) {
        updatePermissions(id, value);

        // Asegurar que el submódulo está activado si se activa una funcionalidad
        const subModuleId = id.substring(0, 5) + '00';
        prevRowData.forEach((permiso) => {
          if (permiso.id === subModuleId && !permiso.state) {
            updatePermissions(subModuleId, true);
          }
          if (permiso.id === `${module}00-00` && !permiso.state) {
            updatePermissions(`${module}00-00`, true);
          }
        });
      }
      return newRowData;
    });
  };

  const columnDefs: ColDef<Permission>[] = [
    { headerName: "Nombre", field: "name", sortable: true, filter: true, resizable: true },
    { headerName: "Descripcion", field: "description", sortable: true, filter: true, resizable: true, flex: 1 },
    {
      headerName: "Activar",
      field: "state",
      resizable: true,
      width: 110,
      cellRenderer: (params) => (
        <input
          type="checkbox"
          checked={params.value}
          onChange={(e) => handleCheckboxChange(params.data.id, e.target.checked)}
        />
      )
    },
    {
      headerName: "Desactivar",
      field: "state",
      resizable: true,
      width: 130,
      cellRenderer: (params) => (
        <input
          type="checkbox"
          checked={!params.value}
          onChange={(e) => handleCheckboxChange(params.data.id, !e.target.checked)}
        />
      )
    }
  ];

  const rowClassRules = {
    'highlight-row': (params) => params.data.id.endsWith('00-00'),
    'highlight-row2': (params) => params.data.id.endsWith('-00') && !params.data.id.endsWith('00-00')
  };

  return (
    <div className="ag-theme-alpine m-auto" style={{ height: '40vh', width: '90%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={{ sortable: true, filter: true }}
        rowClassRules={rowClassRules}
        suppressScrollOnNewData={true}
      />
    </div>
  );
}

export default TablePermission;
