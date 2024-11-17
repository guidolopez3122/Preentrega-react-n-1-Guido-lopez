import { mixed, object, string } from "yup";

let userSchema = object({
    fullname: string().required("Ingrese su nombre completo"),
    phone: mixed().required("Ingrese un numero valido"),
    email: string().required("Ingrese un dato con formato correo electronico!")
})

const validateForm = async(dataForm)=> {
    try{
        await userSchema.validate(dataForm)
        return {status:"succes"}
    } catch (error){
        return {status:"error", message:error.message}
    }
}

export default validateForm