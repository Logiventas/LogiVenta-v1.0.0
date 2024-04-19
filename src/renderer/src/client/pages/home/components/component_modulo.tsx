const Modulo= (prop:any)=>{


    return(
        <>
            <div style={{width:'8rem' ,cursor:'pointer' }} className="iconoHover d-flex flex-column align-align-items-center m-auto ">
                <img  className="m-auto" style={{width:'70px'}} src={prop.urlImg}></img>
                <h6 className="text-center mt-3">{prop.modulo}</h6>
            </div>  
        </>
    )

}

export default Modulo