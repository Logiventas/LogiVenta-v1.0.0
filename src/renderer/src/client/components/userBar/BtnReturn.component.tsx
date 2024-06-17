import { useNavigate, useLocation } from 'react-router-dom';
import icon_atras from '@client/src/assets/icon/atras.png';

const BtnReturn: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleShowModal = () => {
    navigate(-1);
    console.log('atras');
  };

  const isHome = location.pathname === '/home';

  return (
    <button onClick={handleShowModal} className="btn" disabled={isHome}>
        <img style={{ width: "40px", height: "40px" }} src={icon_atras} alt="Salir" />
      </button>
  );
};

export default BtnReturn;
