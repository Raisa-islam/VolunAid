import { Link } from 'react-router-dom';

const NeedVolTable = ({ item, idx }) => {
    const { _id, title, thumbnail, location, selectedDate  } = item;
    const date = selectedDate.slice(0,10)
    return (
        <>
            <tr>
                <th>{idx}</th>
                <td>{title}</td>
                <td>{thumbnail}</td>
                <td>{location}</td>
                <td>{date}</td>
                <td><Link to={`/view-post-details/${_id}`}>
            <button className="bg-gradient-to-r from-[#495597] to-[#7794ed]  text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ">View Details</button>
            </Link></td>
            </tr>
        </>
    );
};

export default NeedVolTable;