import HttpService from './HttpService';

export const SignUpService = (credentials) => 
{
    const http = new HttpService();
    let signUpUrl = "auth/register";
    return http.postData(credentials,signUpUrl).then((data)=>
    {
        console.log(data);
        return data;
    }).catch((error) => {
        console.log(error);
        return error;
    })
}

export const LoginUser = (credentials) =>
{
    const http=new HttpService();
    let loginUrl = "auth/login";
    return http.postData(credentials,loginUrl).then((data)=>
    {
        return data;
    }).catch((error)=>{
        console.log(error)
        return error;
    })
}