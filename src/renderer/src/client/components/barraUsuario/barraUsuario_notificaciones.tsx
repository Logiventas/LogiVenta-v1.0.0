
import icon_notificacin from '/src/assets/icon/notificacion.png'
const notificacion =(prop:any)=>{
    return(
        <>
                <button className="btn">
                    <i className="fas fa-bell">
                        <img
                            style={{ width: "40px", height: "40px", marginRight: "10px" }}
                            src={icon_notificacin}
                            alt="Notificaciones"
                        />
                         <span   
                            style={{ position:'absolute' ,transform:' translate(-25px,12px)'}} 
                            className="badge rounded-pill badge-notification bg-danger">
                            {prop.numero!=0?prop.numero:''}
                        </span>
   
                    </i>
                   
                </button>
        </>
    )
}
export  default notificacion