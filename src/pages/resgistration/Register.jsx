import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProviders';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const Register = () => {
    const {user, createUser } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: '',
        p_url: '',
        email: '',
        password: '',
        c_password: ''
    });
    const [errors, setErrors] = useState({});

    const [showPassword, setShowPassword] = useState(false)
    const [showcPassword, setShowcPassword] = useState(false)
    const location = useLocation();
    const navigate = useNavigate(); 

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear errors when user starts typing in the input field
        if (e.target.name === 'c_password') {
            setErrors({
                ...errors,
                c_password: ''
            });
        } else {
            setErrors({
                ...errors,
                [e.target.name]: ''
            });
        }
    };

    useEffect(() => {
        if (user) {
            navigate(location?.state ? location.state : "/");
        }
    }, [user]);

    const handlePasswordChange = e => {
        const { value } = e.target;
        // Check password length and criteria
        const passwordError = [];
        if (value.length < 6) {
            passwordError.push('Password must be at least 6 characters long');
        }
        if (!value.match(/[A-Z]/)) {
            passwordError.push('Password must have at least one uppercase letter');
        }
        if (!value.match(/[a-z]/)) {
            passwordError.push('Password must have at least one lowercase letter');
        }
        setErrors({
            ...errors,
            password: passwordError.join(', ')
        });
    };

    const handleConfirmPasswordChange = e => {
        const { value } = e.target;
        const { password } = formData;
    
        // Check if passwords match
        if (password !== value) {
            setErrors({
                ...errors,
                c_password: 'Passwords do not match'
            });
        } else {
            // Clear any existing error messages
            setErrors({
                ...errors,
                c_password: ''
            });
        }
    };

    const handleRegister = e => {
        e.preventDefault();
        
        const { name, p_url, email, password, c_password } = formData;

        // Check if passwords match
        if (password !== c_password) {
            setErrors({
                ...errors,
                c_password: 'Passwords do not match'
            });
            return;
        }

        // Check if there are any password errors
        if (errors.password || errors.c_password) {
            return;
        }

        // create user
        createUser(name, p_url, email, password)
        .then(result =>{
            console.log("user is ",result.user)
            // Show success toast
            toast.success('Registration successful');
        })
        .catch(error =>{
            console.error(error);
            // Show error toast
            toast.error('Registration failed');
        });

        

        // Clear form data
        setFormData({
            name: '',
            p_url: '',
            email: '',
            password: '',
            c_password: ''
        });
    };

    return (
        <div className="min-h-screen flex justify-center items-center container mx-auto overflow-hidden">
            <Helmet>
                <title>VolunAid | Register</title>
            </Helmet>
            <div className="w-full lg:w-1/2 p-4">
                <form onSubmit={handleRegister} className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <label className="text-xl text-black font-semibold">
                            Name
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered" name='name' value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="text-xl text-black font-semibold">
                            Photo URL
                        </label>
                        <input type="text" placeholder="Enter your photo Url" className="input input-bordered" name='p_url' value={formData.p_url} onChange={handleChange} required />
                    </div>
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
                        <input 
                            type={showPassword ? "text":"password"} 
                            placeholder="password" 
                            className="input input-bordered" 
                            name='password' 
                            value={formData.password} 
                            onChange={handleChange} 
                            onBlur={handlePasswordChange} 
                            required /> 
                        <div className='flex justify-end'>
                            <span onClick={()=> setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash/>:<FaEye/>}</span>
                        </div>
                        
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="text-xl text-black font-semibold">
                            Confirm Password
                        </label>
                        <input 
                            type={showcPassword ? "text":"password"}  
                            placeholder="Confirm password" 
                            className="input input-bordered" 
                            name='c_password' value={formData.c_password} 
                            onChange={handleChange} 
                            onBlur={handleConfirmPasswordChange} required />
                        <div className='flex justify-end'>
                            <span onClick={()=> setShowcPassword(!showcPassword)}>{showcPassword ? <FaEyeSlash/>:<FaEye/>}</span>
                        </div>
                        {errors.c_password && <p className="text-red-500">{errors.c_password}</p>}
                    </div>

                <div className="form-control mt-6">
                        <button className="bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold">
                            Register
                        </button>
                    </div>
                </form>

                <div className='flex flex-row justify-center items-center mt-10'>
                    <p className=' font-semibold'>Already have an account? <Link className=' text-blue-500 underline' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;