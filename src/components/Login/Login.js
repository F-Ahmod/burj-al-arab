import React from 'react';
import useAuth from '../../Hooks/useAuth';





const Login = () => {
  const {singinwithgoogle}=useAuth();
    return (
        <div className="d-flex justify-content-center mt-4">
            
            <form>
            <h3>Please login With Your Google Account</h3>
            <input  className="bg-info w-50 fs-5 rounded"  onClick={singinwithgoogle} type="button" value="Sing with google" />
            </form>    
        </div>
    );
};

export default Login;