import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
const Login = () => {
    const navigate = useNavigate();
    const {signInUser,signInWithGoogle} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
            e.target.reset()
            navigate('/')
        })
        .catch(error =>{
            console.error(error.message);
        })
    }
    const handlePopUp = ()=>{
        signInWithGoogle()
        .then (result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error.message);
        })
    }
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="text-center">
                            <p>New here ? Please <Link to='/register'><button className="btn btn-link">Register Now</button></Link></p>
                        </div>
                        <p onClick={handlePopUp} className="text-center btn btn-ghost">GOOGLE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;