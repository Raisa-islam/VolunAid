
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';

const Root = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;