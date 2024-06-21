import user from "@renderer/client/model/User.model"
interface User extends user{

    identification:number|null
    account:number
    email:string
    phone:number
    profile:number
    sex:string
    job:number
    userName:string
    homeCountry:number
    homeCity:number
    homeAddress:string
    profilePicture:File|null
    password:string
    emergencyFirstName:string
    emergencySecondName:string
    emergencySurname:string
    emergencySecondSurname:string
    emergencyPhone:number
    emergencyEmail:string
}
export default User;
