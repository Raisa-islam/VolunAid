
import { AuthContext } from '../../../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';
import Avatar from '../../../components/avatar/Avatar';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoi from '../../../assets/logo11_prev_ui.png'

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
        <li><NavLink to="/needVolunteer">Need Volunteer</NavLink></li>
        <li>
            <details>
                <summary>My Profile</summary>
                <ul className="p-2 z-10">
                    <li><NavLink to="/add-volunteer-post">Add Volunteer Post</NavLink></li>
                    <li><NavLink to="/managePost">Manage My Post</NavLink></li>
                </ul>
            </details>
        </li>

        <li> {
            user && (user.photoURL || flag) ?
                <>


                    <button onClick={handleSignOut} className="md:hidden transition duration-300 font-bold ">
                        Sign out
                    </button>
                </>

                :
                <>
                    <button onClick={handleSignOut} className="md:hidden  transition duration-300 font-bold ">
                        Log in
                    </button>
                    <button onClick={handleSignOut} className="md:hidden  transition duration-300 font-bold ">
                        Register
                    </button>
                </>


        }</li>

    </>
    return (
        <div className=' bg-gradient-to-tr from-[#acd4fc] to-[#deeefd]'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            {navlinks}
                        </ul>
                    </div>
                    <img src={logoi} alt="" className='w-12 h-12' />
                    <a className="btn btn-ghost text-xl">Volun Aid</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
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
                                <Tooltip id="my-tooltip" className=' z-20' />


                                <button onClick={handleSignOut} className="hidden md:flex bg-gradient-to-r from-[#495597] to-[#7794ed]  text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ">
                                    Sign out
                                </button>
                            </>

                            :
                            <>
                                <Link to='/login'><button className="hidden md:flex bg-gradient-to-r from-[#495597] to-[#7794ed]  text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ">
                                    Log in
                                </button></Link>
                                <Link to='/register'><button className="hidden md:flex bg-gradient-to-r from-[#495597] to-[#7794ed] text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ml-2">
                                    Register
                                </button></Link>

                            </>




                    }

                </div>
            </div>
        </div>

    );
};

export default Navbar;