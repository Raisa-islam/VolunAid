import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NeedVolunteerCard from '../../components/needVolunteerCard/NeedVolunteerCard';

const CategoryWisePost = () => {
    const items = useLoaderData()
    const {category} = useParams()

    return (
        <div className='container mx-auto max-w-[80%] mb-12'>
            <div className='flex justify-center items-center mt-12'>
                <h1 className='text-2xl font-bold'>{category} </h1>
            </div>
            <div className='mt-6 flex justify-center items-center'>
                {items.length===0 && <h1 className='text-2xl' > No Posts To Show!!</h1>}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        items.map((item)=><NeedVolunteerCard key={item._id} item={item}>

                        </NeedVolunteerCard>)
                    }

                </div>

            </div>

            
        </div>
    );
};

export default CategoryWisePost;