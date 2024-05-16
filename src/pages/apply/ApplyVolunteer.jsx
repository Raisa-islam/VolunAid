
import { Helmet } from 'react-helmet';
import addvoli from '../../assets/download-removebg-preview.png'
import { useLoaderData } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { toast } from 'react-toastify';
const ApplyVolunteer = () => {
    const item = useLoaderData();
    console.log(item);
    const [ applyDone, setApplyDone] = useState(0)

    const {_id, thumbnail, title, category, description, name, email, location, noOfVol, selectedDate}= item
    const {user} = useContext(AuthContext)
    
    const handleApply = (e)=>{
        e.preventDefault()
        const postId = _id
        const vname = e.target.elements.vName.value;
        const vemail = e.target.elements.vEmail.value;
        const itemObj = { thumbnail, title, description, category, location, selectedDate, name, email, postId,vname,vemail };
        console.log(itemObj);

        fetch('https://b9a11-server-six.vercel.app/applyPosts', {
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
                toast.success("Applied successfully!");
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                toast.error("Failed to add the item. Please try again!");
            });
            const noOf = noOfVol-1
            console.log(noOf)
            const updateObj = { _id, thumbnail, title, category, description, name, email, location,noOf , selectedDate}

            fetch(`https://b9a11-server-six.vercel.app/incrementField/${item._id}`, {
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(updateObj)
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data);
                
            })
            .catch((error)=>{
                console.log(error)
               
            })

            setApplyDone(1)
            toast.success("Successfully applied!")
    }
    return (
        <div className='container mx-auto max-w-[80%] lg:max-w-[60%] mt-12'>

            <Helmet>
                <title>VolunAid | Apply</title>
            </Helmet>
            <div className='flex flex-col justify-center items-center'>
                <img src={addvoli} alt="" />
                <div className='bg-[#82c1f9] w-full flex flex-col rounded-t-xl px-4 md:px-8 lg:px-24'>
                    <div className='font-bold text-2xl mt-6 text-center mb-6'>
                        Volunteer Opportunities Post
                    </div>
                    <form onSubmit={handleApply} className='mb-12'>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl"> Thumbnail:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='thumbnail' defaultValue={thumbnail} required readOnly/>


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl"> Post Title:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" defaultValue={title} name='title' required readOnly/>


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl"> Description:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='description' defaultValue={description} required readOnly/>


                        </div>

                        <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Category Name:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='category' defaultValue={category} required readOnly/>


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl"> Location:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='location' defaultValue={location} required readOnly/>


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl"> No. of Volunteers Needed:</span>

                            </div>
                            <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='noOfVol' defaultValue={applyDone? noOfVol-1:noOfVol} required readOnly/>

                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl"> Deadline:</span>

                            </div>

                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='noOfVol'defaultValue={selectedDate} required readOnly/>

                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Organizer Name:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='name' defaultValue={name} required readOnly />


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Organizer Email:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='email'defaultValue={email} required readOnly />


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Volunteer Name:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='vName' value={user.displayName} required />


                        </div>

                        <div className="form-control w-full flex flex-col gap-4">
                            <div className="label w-fit">
                                <span className="label-text font-medium text-xl">Volunteer Email:</span>

                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='vEmail' value={user.email} required  />


                        </div>

                        <div className='flex justify-center'>
                            <button className="md:flex bg-gradient-to-r from-[#495597] to-[#7794ed]  text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold mt-6" disabled={applyDone===1} type='submit'>
                                Apply
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    
    );
};

export default ApplyVolunteer;