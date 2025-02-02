
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProviders';
import AppliedPost from '../../components/tableRow/AppliedPost';
import MyPost from '../../components/tableRow/MyPost';
import 'react-toastify/ReactToastify.css';
import Swal from 'sweetalert2'


const ManageMyPost = () => {
    const { user } = useContext(AuthContext)
    const [myPosts, setMyPosts] = useState([])
    const [appliedPosts, setAppliedPosts] = useState([])
    const [myTab, setMyTab] = useState(0)

    var idx1 = 1;
    var idx2 = 1;
    useEffect(() => {
        fetch(`https://b9a11-server-six.vercel.app/myPosts/${user.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setMyPosts(data))
            .catch(error => console.error("Error:", error));

        fetch(`https://b9a11-server-six.vercel.app/applyPosts/${user.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setAppliedPosts(data))
            .catch(error => console.error("Error:", error));

    }, [myPosts, appliedPosts])

    const handleDeleteApplied = (_id, postId) => {
        Swal.fire({
            title: "Are you sure you want to delete?",
            showDenyButton: true,

            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://b9a11-server-six.vercel.app/post/${_id}/${postId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        
                    })
                console.log("item is deleted", _id);
                Swal.fire("Deleted!", "", "success");

            } else if (result.isDenied) {
                //   Swal.fire("Changes are not saved", "", "info");
            }
        });

    }

    const handleDeleteMyPost = (_id) => {

        Swal.fire({
            title: "Are you sure you want to delete?",
            showDenyButton: true,

            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://b9a11-server-six.vercel.app/allVolPost/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                    })
                console.log("item is deleted", _id);

                Swal.fire("Deleted!", "", "success");

            } else if (result.isDenied) {
                //Swal.fire("Changes are not saved", "", "info");
            }
        });

    }
    return (
        <div className='container mx-auto mt-12  max-w-[80%]'>
            <Helmet><title>VolunAid | My Posts</title></Helmet>
            <div className='w-full'>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="My Volunteer Need Post" checked={myTab === 0} onClick={() => setMyTab(0)} />
                    <div role="tabpanel" className="tab-content w-full overflow-x-auto">

                        <table className="table table-zebra">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Location</th>
                                    <th>Deadline</th>
                                    <th></th>
                                    <th></th>
                                </tr>


                            </thead>
                            <tbody>
                                {myPosts.length === 0 && <h1 className='text-2xl' > No Posts To Show!!</h1>}
                                {myPosts.map((item) => <MyPost key={item._id} item={item} idx={idx1++} handleDeleteMyPost={handleDeleteMyPost}></MyPost>)}
                            </tbody>
                        </table>

                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="My Volunteer Request Post" onClick={() => setMyTab(1)} checked={myTab === 1} />
                    <div role="tabpanel" className="tab-content w-full overflow-x-auto">
                        <table className="table table-zebra">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Organizer</th>
                                    <th>Deadline</th>
                                    <th></th>

                                </tr>


                            </thead>
                            <tbody>
                                {appliedPosts.length === 0 && <h1 className='text-2xl' > No Posts To Show!!</h1>}
                                {appliedPosts.map((item) => <AppliedPost key={item._id} idx={idx2++} item={item} handleDeleteApplied={handleDeleteApplied}></AppliedPost>)}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default ManageMyPost;