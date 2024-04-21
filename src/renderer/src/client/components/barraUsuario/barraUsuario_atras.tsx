

const atras: React.FC = () => {

  const handleShowModal = () => {
    
    console.log('atras')
  };

  return (
    <>
      <button onClick={handleShowModal} className="btn">
        <img style={{ width: "40px", height: "40px" }} src="/src/assets/icon/atras.png" alt="Salir" />
      </button>
    </>
  );
};

export default atras;
