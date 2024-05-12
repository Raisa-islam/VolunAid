
import { AuthContext } from '../../../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';
import Avatar from '../../../components/avatar/Avatar';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const { user, logout, flag } = useContext(AuthContext);
    console.log(user);
    const handleSignOut = () => {
        logout()
            .then()
            .catch()
    }
    const navlinks = <> 
    <li><NavLink to="/">Home</NavLink></li>
    <li><a>Need Volunteer</a></li>
                    <li>
                        <details>
                            <summary>My Profile</summary>
                            <ul className="p-2">
                                <li><a>Add Volunteer Post</a></li>
                                <li><a>Manage My Post</a></li>
                            </ul>
                        </details>
                    </li>

                    <li> {
            user && (user.photoURL || flag) ?
                <>


                    <button onClick={handleSignOut} className="md:hidden bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold ">
                        Sign out
                    </button>
                </>

                :
                <>
                    <button onClick={handleSignOut} className="md:hidden bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold ">
                        Log in
                    </button>
                    <button onClick={handleSignOut} className="md:hidden bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold ">
                        Register
                    </button>
                </>


        }</li>
                   
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Volun Aid</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
            {
                    user && (user.photoURL || flag) ?
                        <>
                            <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className=' z-20'>
                                <Avatar photoURL={user.photoURL} />
                            </a>
                            <Tooltip id="my-tooltip" className=' z-20'/>


                            <button onClick={handleSignOut} className="hidden md:flex bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold ">
                                Sign out
                            </button>
                        </>

                        :
                        <>
                            <Link to='/login'><button  className="hidden md:flex bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold ">
                                Log in
                            </button></Link>
                            <Link to='/register'><button className="hidden md:flex bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold ">
                                Register
                            </button></Link>
                           
                        </>




                }

            </div>
        </div>
    );
};

export default Navbar;