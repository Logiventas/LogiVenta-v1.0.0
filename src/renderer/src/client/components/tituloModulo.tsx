export function TituloModulo({titulo,img}){
    return(
        <div className="d-flex mx-4 mt-3">
            <img style={{height:'60px'}} src={img} alt={'icono'+titulo} />
            <h1 className="mx-2 my-auto fs-1">{titulo}</h1>
        </div>
    )
}