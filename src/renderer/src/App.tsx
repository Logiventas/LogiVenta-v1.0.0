import  { useState, useEffect } from 'react';
import Router from './client/routes/router';
import Logiventas from './client/components/logoLogiventas.component';


function App(): JSX.Element {
  // Estado para controlar qué componente mostrar
  const [showLogiventas, setShowLogiventas] = useState(true);

  useEffect(() => {
    // Establecer un temporizador para cambiar de Logiventas a Router después de 5 segundos
    const timer = setTimeout(() => {
      setShowLogiventas(false); // Cambia el estado para mostrar Router
    }, 6000);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez después del montaje inicial

  return (
 
      <>
      {showLogiventas ? <Logiventas /> : <Router />}
      </>
    
  );
}

export default App;
