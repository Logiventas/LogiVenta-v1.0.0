// services/configService.ts
export const fetchConfigDetails = async (configType: string): Promise<any> => {
    // Suponiendo que hay una API desde la que se fetch los detalles
    const response = await fetch(`https://api.example.com/config/${configType}`);
    const data = await response.json();
    return data;
  };
  