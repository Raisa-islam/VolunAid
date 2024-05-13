import { useEffect, useState } from 'react';
import coveri from '../../assets/cover.jpg'
import NeedVolunteerCard from '../../components/needVolunteerCard/NeedVolunteerCard';
const NeedVolunteer = () => {
    const [items, setItems] = useState([]);
    const [val, setVal] = useState('All');
    useEffect(()=>{
        fetch(`http://localhost:5001/addVolPost/${val}`)
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(error => console.error("Error:", error));
        
    },[val])

    const handleSearch=(e)=>{
        e.preventDefault();
        setVal(e.target.elements.search.value);
        console.log(val)
    }
    return (
        <>
            <div className='relative w-full'>
                <img src={coveri} alt="" className='w-full h-96' />
                <div className="absolute inset-0 bg-gradient-to-t from-[#495597] to-transparent flex flex-col justify-center">
                <form onSubmit={handleSearch}> <div className='w-full h-full flex justify-center items-center gap-4'>
                       
                            
                       
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" name='search' />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                        <button className="hidden md:flex bg-gradient-to-r from-[#495597] to-[#7794ed]  text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold " type='submit'>
                                    Apply
                                </button>
                    </div>
                    </form>
                </div>
            </div>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
            {items.map((item)=><NeedVolunteerCard key={item._id} item={item}></NeedVolunteerCard>)}
            </div>

        </>
    );
};

export default NeedVolunteer;