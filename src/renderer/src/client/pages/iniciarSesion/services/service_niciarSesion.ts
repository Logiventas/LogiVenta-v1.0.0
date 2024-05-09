
// hace la condulta al servidor (API)
const login = (usuario:string, contrasena:string) => {
  if (usuario === 'Brayan' && contrasena == '12345') {
    return 'brianKro'
  } else {
    return false
  }
}
export default login
