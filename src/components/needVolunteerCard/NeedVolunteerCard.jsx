import { Link } from "react-router-dom";


const NeedVolunteerCard = ({item}) => {
    const {_id, title, thumbnail, location, date} = item;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{thumbnail}</p>
          <p>{location}</p>
          <p>{date}</p>
          <div className="card-actions justify-end">
          <Link to={`/view-post-details/${_id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default NeedVolunteerCard;