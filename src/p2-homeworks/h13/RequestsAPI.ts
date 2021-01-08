import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',

})

export const RequestAPI = {
    auth(data: AuthDataType) {
        return instance.post<ResponseDataAuthType>(`auth/test`, data)
    }

}
type ResponseDataAuthType = {

    errorText: string
    info: string
    yourBody:
        {
            success: boolean
        }
    yourQuery: any

}
type AuthDataType = {
    success:boolean
}