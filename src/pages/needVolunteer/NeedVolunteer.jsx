import { useEffect, useState } from 'react';
import { BsGrid3X3GapFill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import coveri from '../../assets/cover.jpg'
import NeedVolunteerCard from '../../components/needVolunteerCard/NeedVolunteerCard';
import NeedVolTable from '../../components/needVolunteerCard/NeedVolTable';
import { Helmet } from 'react-helmet-async';
const NeedVolunteer = () => {
    const [items, setItems] = useState([]);
    const [grid1, setGrid1] = useState(0);
    console.log(grid1)
    const [val, setVal] = useState('All');
    useEffect(() => {
        fetch(`http://localhost:5001/addVolPost/${val}`)
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.error("Error:", error));

    }, [val])
    var idx = 0

    const handleSearch = (e) => {
        e.preventDefault();
        setVal(e.target.elements.search.value);
        console.log(val)
    }
    return (
        <>
            <div className='relative w-full'>
                <Helmet>
                    <title>VolunAid | All Posts</title>
                </Helmet>
                <img src={coveri} alt="" className='w-full h-96' />
                <div className="absolute inset-0 bg-gradient-to-t from-[#495597] to-transparent flex flex-col justify-center">
                    <form onSubmit={handleSearch}> <div className='w-full h-full flex justify-center items-center gap-4'>



                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text border-0" className="grow" placeholder="Search" name='search' />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                        <button className="hidden md:flex bg-gradient-to-r from-[#495597] to-[#7794ed]  text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold " type='submit'>
                            Apply
                        </button>
                    </div>
                    </form>
                </div>
            </div>
            <div className='container mx-auto max-w-[80%] flex flex-col justify-center items-center mt-6 text-[#495597] font-black'>
                <div className='flex justify-end text-2xl gap-4 items-center w-full'>
                    <h1>Change Layout</h1>
                    <button onClick={() => { setGrid1(0) }}><BsGrid3X3GapFill /></button>
                    <button onClick={() => { setGrid1(1) }}><CiGrid2H /></button>
                </div>


                <div className={grid1 ? 'my-12 table table-zebra' : 'my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
                    {!grid1 && items.map((item) => <NeedVolunteerCard key={item._id} item={item}></NeedVolunteerCard>)}
                    {grid1 && <><thead>
                       
                        <tr className='text-lg'>
                            <th></th>
                            <th>Title</th>
                            <th>Thumbnail</th>
                            <th>Location</th>
                            <th>Deadline</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item)=> <NeedVolTable key={item._id} item={item} idx={idx++}></NeedVolTable>)}
                    </tbody></>}
                </div>
            </div>

        </>
    );
};

export default NeedVolunteer;