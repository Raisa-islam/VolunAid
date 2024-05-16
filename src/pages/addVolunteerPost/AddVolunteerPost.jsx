import { Helmet } from 'react-helmet';
import addvoli from '../../assets/download-removebg-preview.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { toast } from 'react-toastify';

const AddVolunteerPost = () => {
    const { user } = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handlePost = (e) => {
        e.preventDefault();
        const thumbnail = e.target.elements.thumbnail.value;
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        const category = e.target.elements.category.value;
        const location = e.target.elements.location.value;
        const noOf = e.target.elements.noOfVol.value;
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;

        //date picking baki
        const noOfVol = parseInt(noOf)
        console.log(thumbnail, title, description, name, email, category, location, noOfVol, selectedDate)
        const itemObj = { thumbnail, title, description, category, location, noOfVol, selectedDate, name, email };
        console.log(itemObj);

        fetch('https://b9a11-server-six.vercel.app/addVolPost/All', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemObj)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok ' + res.statusText);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                // Clear the form here after successful submission
                e.target.reset();
                toast.success("Post added successfully!");
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                toast.error("Failed to add the item. Please try again!");
            });

    }
    return (
        <div className='container mx-auto max-w-[80%] lg:max-w-[60%] mt-12'>

            <Helmet>
                <title>VolunAid | Add Post</title>
            </Helmet>
            <div className='flex flex-col justify-center items-center'>
                <img src={addvoli} alt="" />
                <div className='bg-[#82c1f9] w-full flex flex-col rounded-t-xl px-4 md:px-8 lg:px-24'>
                    <div className='font-bold text-2xl mt-6 text-center mb-6'>
                        Volunteer Opportunities Post
                    </div>
                    <form onSubmit={handlePost} className='mb-12'>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Enter Thumbnail:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='thumbnail' required />


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Enter Post Title:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='title' required />


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Enter Description:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='description' required />


                        </div>

                        <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Select Category Name:</span>

                            </div>
                            <select className="select select-primary w-full md:max-w-[80%]" name="category">
                                <option value='Healthcare'>Healthcare</option>
                                <option value='Education'>Education</option>
                                <option value='Social Service'>Social Service</option>
                                <option value='Animal Welfare'>Animal Welfare</option>
                            </select>

                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Enter Location:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='location' required />


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Enter No. of Volunteers Needed:</span>

                            </div>
                            <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='noOfVol' required />

                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Enter Deadline:</span>

                            </div>

                            <Datepicker
                                showIcon
                                toggleCalendarOnIconClick
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
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
                                Add Post
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddVolunteerPost;