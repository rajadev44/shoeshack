/* eslint-disable react/prop-types */
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const isAuthenticated = useSelector((state) => state.auth.authenticated);
    let location = useLocation();

    if(!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
    
    return children

};

export default ProtectedRoute;