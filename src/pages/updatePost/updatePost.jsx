import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { toast } from 'react-toastify';
import addvoli from '../../assets/download-removebg-preview.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const UpdatePost = () => {
    const item = useLoaderData()
    
    console.log("update Post Page")
    
    const { user } = useContext(AuthContext);
    const {_id, thumbnail, title, description, location, selectedDate, category, noOfVol} = item
    const [uselectedDate, setuSelectedDate] = useState(selectedDate);
    const handleUpdate = (e)=>{
        e.preventDefault()
        const thumbnail = e.target.elements.thumbnail.value;
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        const category = e.target.elements.category.value;
        const location = e.target.elements.location.value;
        const noOfV = e.target.elements.noOfVol.value;
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const noOf = parseInt(noOfV)
        console.log(thumbnail, title, description, name, email, category, location, noOfVol, uselectedDate)
        const itemObj = { thumbnail   , title, description, category, location, noOf, selectedDate, name, email };
        console.log(itemObj);


        fetch(`https://b9a11-server-six.vercel.app/incrementField/${item._id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(itemObj)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            toast.success("Post updated successfully!");
        })
        .catch((error)=>{
            console.log(error)
            toast.error("Failed to update!")
        })

    }

    return (
         <div className='container mx-auto max-w-[80%] lg:max-w-[60%] mt-12'>

            <Helmet>
                <title>VolunAid | Update Post</title>
            </Helmet>
            <div className='flex flex-col justify-center items-center'>
                <img src={addvoli} alt="" />
                <div className='bg-[#82c1f9] w-full flex flex-col rounded-t-xl px-4 md:px-8 lg:px-24'>
                    <div className='font-bold text-2xl mt-6 text-center mb-6'>
                        Volunteer Opportunities Post
                    </div>
                    <form onSubmit={handleUpdate} className='mb-12'>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Update Thumbnail:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='thumbnail' defaultValue={thumbnail} required />


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Update Post Title:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='title' required defaultValue={title}/>


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Update Description:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='description' required defaultValue={description}/>


                        </div>

                        <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Select Category Name:</span>

                            </div>
                            <select className="select select-primary w-full md:max-w-[80%]" name="category"defaultValue={category}>
                                <option value='Healthcare'>Healthcare</option>
                                <option value='Education'>Education</option>
                                <option value='Social Service'>Social Service</option>
                                <option value='Animal Welfare'>Animal Welfare</option>
                            </select>

                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Update Location:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='location' required defaultValue={location}/>


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Update No. of Volunteers Needed:</span>

                            </div>
                            <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='noOfVol' required defaultValue={noOfVol}/>

                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Update Deadline:</span>

                            </div>

                            <Datepicker
                                showIcon
                                toggleCalendarOnIconClick
                                selected={uselectedDate}
                                onChange={(date) => setuSelectedDate(date)}
                                className='rounded-xl border border-blue-700'
                            />
                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Organizer Name:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='name' value={user.displayName} required readOnly />


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Organizer Email:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='email' value={user.email} required readOnly />


                        </div>

                        <div className='flex justify-center'>
                            <button className="md:flex bg-gradient-to-r from-[#495597] to-[#7794ed]  text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold mt-6" type='submit'>
                                Update Post
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePost;