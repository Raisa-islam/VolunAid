import { Link } from "react-router-dom";


const NeedVolunteerCard = ({item}) => {
    const {_id, title, thumbnail, location, selectedDate} = item;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body text-black">
          <h2 className="card-title text-xl">{title}</h2>
          <p className="font-semibold">{thumbnail}</p>
          <p className="font-semibold">Location : <span className="font-medium">{location}</span></p>
          <div className="font-semibold flex flex-col md:flex-row">Apply Deadline : <span className="font-medium">{selectedDate}</span></div>
          <div className="card-actions justify-end">
          <Link to={`/view-post-details/${_id}`}>
            <button className="bg-gradient-to-r from-[#495597] to-[#7794ed]  text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default NeedVolunteerCard;