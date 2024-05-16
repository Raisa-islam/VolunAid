import React from 'react';
import { Link } from 'react-router-dom';

const NeedsNowHomeCard = ({item}) => {
    const {_id, title, thumbnail, category, selectedDate} = item;
    const date = selectedDate.slice(0,10)
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body text-black">
          <h2 className="font-bold text-2xl">{title}</h2>
          <h2 className="card-title text-lg">Category : {category}</h2>
          <p className="font-semibold text-lg">{thumbnail}</p>
        
          <div className="font-semibold flex flex-row text-lg">Apply Deadline : <span className="font-medium">{date}</span></div>
          <div className="card-actions justify-end">
          <Link to={`/view-post-details/${_id}`}>
            <button className="bg-gradient-to-r from-[#495597] to-[#7794ed]  text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default NeedsNowHomeCard;