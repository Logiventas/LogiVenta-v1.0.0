// hooks/useIPValidation.ts
import { useState } from 'react';

export const useIPValidation = () => {
  const [ip, setIp] = useState("");
  const [error, setError] = useState("");

  const ipRegex: RegExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const handleIpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIp = e.target.value;
    setIp(newIp);
    if (ipRegex.test(newIp)) {
      setError(""); // Clear error if the new IP is valid
    } else {
      setError("La dirección IP no es válida.");
    }
  };

  return { ip, handleIpChange, error, setError };
};
