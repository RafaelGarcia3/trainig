export function getLoggedUser(){
    const data = localStorage.getItem('loggedUser');
    
    if(!data) return null;

    try{
        const user = JSON.parse(data);
        return user;
    }catch(error){
        console.error('Invalid user data' + error);
        return null;
    }
}