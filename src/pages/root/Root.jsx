
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';

const Root = () => {
    return (
        <div className='bg-[#e2e9ef]'>
            {/* navbar */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;