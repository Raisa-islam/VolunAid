
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            {/* navbar */}
            <Outlet></Outlet>
            {/* footer */}
        </div>
    );
};

export default Root;