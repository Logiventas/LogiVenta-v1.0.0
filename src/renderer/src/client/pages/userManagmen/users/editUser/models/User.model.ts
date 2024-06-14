import user from "@renderer/client/model/User.model"
interface User extends user{
    identification:number
    email:string
    phone:number
    profile:number
    job:number
    homeCountry:number
    homeCity:number
    homeAddress:string
    profilePicture:File|null
    userName:string
    password:string
    emergencyFirstName:string
    emergencySecondName:string
    emergencySurname:string
    emergencySecondSurname:string
    emergencyPhone:number
    emergencyEmail:string
    emergencyRelation:string
}
export default User;
