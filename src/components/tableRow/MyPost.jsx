import React from 'react';
import { toast } from 'react-toastify';

const MyPost = ({ item, idx, handleDeleteMyPost }) => {
    const { _id, title, thumbnail, selectedDate } = item

    const onDelete = () => {
        handleDeleteMyPost()

        fetch(`http://localhost:5001/allVolPost/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            toast.success("Cancelation of the event done")
        })
        console.log("item is deleted", _id);
    }
    return (
        <tr>
            <th>{idx}</th>
            <th>{title}</th>
            <th>{thumbnail}</th>
            <th>{selectedDate}</th>
            <th><button className="md:flex bg-gradient-to-r from-[#495597] to-[#7794ed] text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ml-2">
                Update
            </button></th>
            <th> <button onClick={onDelete} className="hidden md:flex bg-gradient-to-r from-[#495597] to-[#7794ed] text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ml-2">
                Delete
            </button></th>
        </tr>
    );
};

export default MyPost;