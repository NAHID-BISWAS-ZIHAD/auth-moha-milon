import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email, password)
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error.message);
        })
    }
    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
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
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="text-center">
                            <p>Already hava a account ?<Link to='/login'><button className="btn btn-link">Login Now</button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;