import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const signInHandler = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const signInUser = result.user;
                console.log(signInUser);
                alert("login successful");
                navigate(from, { replace: true });
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div>
            <div className="">
                <div className="hero-content flex-col">
                    <div className="card p-0 flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
                        <h2 className='text-2xl text-start p-2'>Login</h2>
                        <form onSubmit={signInHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered pr-28" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="place" className="input input-bordered pr-28" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-warning px-32">Login</button>
                            </div>

                            <p>Don't have an account? <Link to={"/authentication/signUp"}>Create an account</Link></p>

                            {/* <div>
                                <button className='my-5'>Continue with Facebook</button>

                                <button>Continue with Google</button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;