// hooks/useConfig.ts
import { useState } from 'react';

type ConfigType = 'cliente' | 'servidor' | null;

export function useConfig() {
  const [config, setConfig] = useState<ConfigType>(null);

  const handleSelection = (type: ConfigType) => {
    setConfig(type);
  };

  const resetSelection = () => {
    setConfig(null);
  };

  return { config, handleSelection, resetSelection };
}
