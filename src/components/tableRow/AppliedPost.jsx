import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AppliedPost = ({ item, idx, handleDeleteApplied }) => {

    const { _id, title, thumbnail, selectedDate, postId, name, email } = item
    const date = selectedDate.slice(0,10)
    const [unit, setUnit] = useState([])
    const deleteItem = () => {
        handleDeleteApplied(_id);
        fetch(`https://b9a11-server-six.vercel.app/post/${_id}/${postId}`,{
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
            <th>{name}</th>
            <th>{date}</th>
            <th><button className="md:flex bg-gradient-to-r from-[#495597] to-[#7794ed] text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ml-2" onClick={deleteItem}>
                Cancel
            </button></th>

        </tr>
    );
};

export default AppliedPost;