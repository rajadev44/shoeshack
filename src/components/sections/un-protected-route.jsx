/* eslint-disable react/prop-types */
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const UnProtectedRoute = ({children}) => {
    const isAuthenticated = useSelector((state) => state.auth.authenticated);
    let location = useLocation();
    console.log(isAuthenticated)
    if(isAuthenticated) {
        return <Navigate to="/dashboard" state={{ from: location}} replace />
    }
    
    return children

};

export default UnProtectedRoute;