import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AppliedPost = ({ item, idx, handleDeleteApplied }) => {

    const { _id, title, thumbnail, selectedDate, postId } = item
    const date = selectedDate.slice(0,10)
    const [unit, setUnit] = useState([])
    const deleteItem = () => {
        handleDeleteApplied(_id);
        fetch(`http://localhost:5001/post/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            toast.success("Cancelation of the event done")
        })
        console.log("item is deleted", _id);

      

        // fetch(`http://localhost:5001/addVolPost/All/${postId}`)
        // .then(res => res.json())
        // .then(data => setUnit(data))
        // .catch(error => console.error("Error:", error));

        // const { _id, thumbnail, title, category, description, name, email, location,noOfVol , selectedDate} = unit[0]

        
        // const noOf = noOfVol+1
        // console.log(noOf)
        // const updateObj = { _id, thumbnail, title, category, description, name, email, location,noOf , selectedDate} 

        // fetch(`http://localhost:5001/incrementField/${item.postId}`, {
        //     method:'PUT',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body: JSON.stringify(updateObj)
        // })
        // .then(res => res.json())
        // .then(data=>{
        //     console.log(data);
            
        // })
        // .catch((error)=>{
        //     console.log(error)
           
        // })


    }
    return (
        <tr>
            <th>{idx}</th>
            <th>{title}</th>
            <th>{thumbnail}</th>
            <th>{date}</th>
            <th><button className="md:flex bg-gradient-to-r from-[#495597] to-[#7794ed] text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ml-2" onClick={deleteItem}>
                Cancel
            </button></th>

        </tr>
    );
};

export default AppliedPost;