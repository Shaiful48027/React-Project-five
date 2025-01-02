import React, { useContext } from 'react';
import { auth } from '../../firebase.init';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivetRout = ({children}) => {

    const {user} = useContext(AuthContext)


    if(user){
        return children;
    }

    return (
       <Navigate to="/login"></Navigate>
    );
};

export default PrivetRout;