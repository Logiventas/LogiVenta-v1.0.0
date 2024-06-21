import { useParams  } from "react-router-dom"
export const  EditProfile=()=>{

            let { idProfile } = useParams();
       return(

        <div>
            <h1>Editar Perfil {idProfile}</h1>
        </div>
       ) 
}
