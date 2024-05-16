import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyPost = ({ item, idx, handleDeleteMyPost }) => {
    const { _id, title, thumbnail, selectedDate, name, email, location } = item
    const date = selectedDate.slice(0,10)

    const onDelete = () => {
       
        handleDeleteMyPost(_id)
       
    }
    return (
        <tr>
            <th>{idx}</th>
            <th>{title}</th>
            <th>{location}</th>
            <th>{date}</th>
            <th><Link to ={`/updatePost/${_id}`}> <button className="md:flex bg-gradient-to-r from-[#495597] to-[#7794ed] text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ml-2">
                Update
            </button></Link></th>
            <th> <button onClick={onDelete} className="hidden md:flex bg-gradient-to-r from-[#495597] to-[#7794ed] text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ml-2">
                Delete
            </button></th>
        </tr>
    );
};

export default MyPost;