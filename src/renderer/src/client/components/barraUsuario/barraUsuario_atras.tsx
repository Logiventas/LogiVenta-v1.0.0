
import { useNavigate } from 'react-router-dom';
import icon_atras from '/src/assets/icon/atras.png'

const atras: React.FC = () => {
  const navigate= useNavigate()
  const handleShowModal = () => {
    navigate(-1)
    console.log('atras')
  };

  return (
    <>
      <button onClick={handleShowModal} className="btn">
        <img style={{ width: "40px", height: "40px" }} src={icon_atras} alt="Salir" />
      </button>
    </>
  );
};

export default atras;
