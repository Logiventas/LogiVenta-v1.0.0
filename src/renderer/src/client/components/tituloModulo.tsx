export function TituloModulo({titulo,img}){
    return(
        <div className="d-flex mx-5 mt-3">
            <img src={img} alt={'icono'+titulo} />
            <h1 className="mx-2">{titulo}</h1>
        </div>
    )
}