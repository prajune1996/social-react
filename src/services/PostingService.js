import HttpService from './HttpService';

export const Postshow = () => {
    const http = new HttpService();
    let homeUrl = "auth/posts";
    return http.getData(homeUrl).then(data=>{
        return data;
    }).catch((error)=>{
        return error;
    })
}