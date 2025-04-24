import usersData from '../assets/users.json';

export function loginUser(email, password){
    const user = usersData.find( (user) => (user.email === email) && (user.password === password) );

    if(user){
        localStorage.setItem("loggedUser", JSON.stringify(user));
        return {
            success: true,
            data: user
        };
    }else{
        return{
            success: false,
            error: "Invalid credentials. Please try again"
        };
    }
}