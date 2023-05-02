import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const SignUp = () => {
    const { signUp } = useContext(AuthContext);

    const signUpHandler = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signUp(email, password)
            .then((result) => {
                const signUpUser = result.user;
                console.log(signUpUser);
                alert("user sign up successful");
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
                        <h2 className='text-2xl text-start p-2'>Sign Up</h2>
                        <form onSubmit={signUpHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered pr-28" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered pr-28" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="place" name='password' className="input input-bordered pr-28" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-warning px-32">Sign Up</button>
                            </div>

                            <p>Already have an account? <Link to={"/authentication/login"}>Login</Link></p>

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

export default SignUp;