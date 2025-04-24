import { useState, useEffect } from 'react';
import { getLoggedUser } from '../logic/userLogic';

export default function useLoggedUser(){
    const [user, setUser] = useState(null);

    useEffect(() =>{
        const userData = getLoggedUser();
        setUser(userData);
    }, []);

    return user;
}