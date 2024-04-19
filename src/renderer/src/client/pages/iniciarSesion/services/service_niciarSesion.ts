

const apiUrl:string = 'https://api/';
const loginURL:string = apiUrl +"login/";


//hace la condulta al servidor (API)
const login =(usuario:string,contrasena:string ) => {

    if(usuario==="Brayan"&&contrasena =="12345"){
        return "55551515"+usuario+contrasena+loginURL;
    }else{
        return false;
    }
    
}
export default login
