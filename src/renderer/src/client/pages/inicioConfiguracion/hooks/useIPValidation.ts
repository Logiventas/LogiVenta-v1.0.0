// hooks/useIPValidation.ts
import { useState } from 'react';

export const useIPValidation = () => {
  const [ip, setIp] = useState("");
  const [error, setError] = useState("");

  // Función para validar cada segmento de la dirección IP
  const isValidSegment = (segment: string): boolean => {
    const num = Number(segment);
    return num >= 0 && num <= 255 && segment === String(num);
  };

  // Función para validar toda la dirección IP
  const isValidIP = (ip: string): boolean => {
    const segments = ip.split('.');
    return segments.length === 4 && segments.every(isValidSegment);
  };

  const handleIpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIp = e.target.value;
    setIp(newIp);
    if (isValidIP(newIp)) {
      setError(""); // Clear error if the new IP is valid
    } else {
      setError("La dirección IP no es válida.");
    }
  };

  return { ip, handleIpChange, error, setError };
};
