import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';



const Login = () => {

    const navigate = useNavigate();


    const { signinUser, signinWithGoogle } = useContext(AuthContext)

    const handlelogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signinUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/home')

            })
            .catch(error => {
                console.log("error", error.message);

            })
    }

    const handleGoogleSign = () =>{
        signinWithGoogle()
        .then(result =>{
            console.log(result.user);
            navigate('/home');
        })
        .catch(error => console.log('error', Error.message))
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl mb-5 font-bold">Login now!</h1>
                </div>

                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handlelogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" className="input input-bordered" name="password" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>New to this website? Please <Link to="/register">Register</Link> </p>
                    <p>
                        <button onClick={handleGoogleSign} className='btn'>Google</button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;