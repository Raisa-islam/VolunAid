
const Avatar = ({ photoURL }) => {
    return (
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img alt="User Avatar" src={photoURL} />
            </div>
        </div>
    );
};

export default Avatar;