
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProviders';
import AppliedPost from '../../components/tableRow/AppliedPost';
import MyPost from '../../components/tableRow/MyPost';

const ManageMyPost = () => {
    const { user } = useContext(AuthContext)
    const [myPosts, setMyPosts] = useState([])
    const [appliedPosts, setAppliedPosts] = useState([])

    var idx1 = 1;
    var idx2 = 1;
    useEffect(() => {
        fetch(`http://localhost:5001/myPosts/${user.email}`)
            .then(res => res.json())
            .then(data => setMyPosts(data))
            .catch(error => console.error("Error:", error));

        fetch(`http://localhost:5001/applyPosts/${user.email}`)
            .then(res => res.json())
            .then(data => setAppliedPosts(data))
            .catch(error => console.error("Error:", error));

    }, [myPosts, appliedPosts])

    const handleDeleteApplied = () => {

    }

    const handleDeleteMyPost = () => {

    }
    return (
        <div className='container mx-auto mt-12  max-w-[80%]'>
            <Helmet><title>VolunAid | My Posts</title></Helmet>
            <div className='w-full'>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="My Volunteer Need Post" />
                    <div role="tabpanel" className="tab-content w-full  overflow-x-auto">
                       
                            <table className="table table-zebra">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th> 
                                        <th>Thumbnail</th>
                                        <th>Deadline</th>
                                        <th></th>
                                        <th></th>
                                    </tr>


                                </thead>
                                <tbody>
                                    {myPosts.map((item) => <MyPost key={item._id} item={item} idx={idx1++} handleDeleteMyPost={handleDeleteMyPost}></MyPost>)}
                                </tbody>
                            </table>
                      
                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="My Volunteer Request Post" />
                    <div role="tabpanel" className="tab-content w-full overflow-x-auto">
                        <table className="table table-zebra">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Thumbnail</th>
                                    <th>Deadline</th>
                                    <th></th>

                                </tr>


                            </thead>
                            <tbody>
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