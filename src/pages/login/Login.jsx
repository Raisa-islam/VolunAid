import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from 'react-helmet';


const Login = () => {
    const {user, signIn, GoogleSignIn, GithubSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleGoogleSignIn = () =>{
        GoogleSignIn();
        //navigate after log in
        //navigate(location?.state ? location.state : "/")
       
    }

   

    const handleGithubSignIn = () =>{
        GithubSignIn();
        //navigate after log in
        //navigate(location?.state ? location.state : "/")
    }
    useEffect(() => {
        if (user) {
            navigate(location?.state ? location.state : "/");
        }
    }, [user]);

    const handleLogin = async e =>{
        e.preventDefault();
        const { email, password } = formData;

        signIn(email, password)
            .then(result =>{
                toast.success('Login successful');
                console.log(result.user);
                // Clear form data after successful login
                setFormData({
                    email: '',
                    password: ''
                });
                //navigate after log in
                navigate(location?.state ? location.state : "/")
               
            })
            .catch(error =>{
                toast.error('Credentials do not match');
                console.error(error);
            });
    }

    return (
        
        <div className="min-h-screen flex justify-center items-center container mx-auto overflow-hidden">
            <Helmet>
                <title>VolunAid | Sign in</title>
            </Helmet>
            <div className="w-full lg:w-1/2 p-4">
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col gap-4'>
                        <label className="text-xl text-black font-semibold">
                            Email
                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered" name='email' value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="text-xl text-black font-semibold">
                            Password
                        </label>
                        <input type={showPassword ? "text":"password"} placeholder="password" className="input input-bordered" name='password' value={formData.password} onChange={handleChange} required />
                        <div className='flex justify-between'>
                            <label>
                                <a href="#" className="label-text-alt link link-hover text-sm font-medium">Forgot password?</a>
                            </label>
                            <span onClick={()=> setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash/>:<FaEye/>}</span>
                        </div>
                       
                    </div>

                    <div className="form-control mt-6">
                        <button className="bg-gradient-to-r from-[#495597] to-[#7794ed] border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold">
                            Sign In</button>
                    </div>
                </form>

                <div className='mt-8 mb-8 flex flex-row justify-center items-center gap-2'>
                    <div className='w-1/2 bg-black'><hr /></div>
                    <div className='font-bold'> OR </div>
                    <div className='w-1/2 bg-black h-[1px]'><hr /></div>
                </div>
                <div className='flex flex-row justify-center items-center mt-5 gap-5'>
                    <button onClick={handleGoogleSignIn} className="border text-black border-gray-300 hover:text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#7794ed] hover:to-[#495597] transition duration-300 font-bold">
                        Continue with Google
                    </button>

                    {/* <button onClick={handleFacebookSignIn} className="bg-gradient-to-r from-purple-400 to-pink-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 transition duration-300 font-bold">
                        Continue with Facebook
                    </button> */}

                    <button onClick={handleGithubSignIn} className="border border-gray-300 text-black hover:text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 transition duration-300 font-bold">
                        Continue with GitHub
                    </button>
                </div>

                <div className='flex flex-row justify-center items-center mt-10'>
                    <p className=' font-semibold'>Don't have an account? <Link className=' text-blue-500 underline' to='/register'>Create an Account</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;