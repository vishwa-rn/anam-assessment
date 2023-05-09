import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../features/userDetailSlice';
import CustomModal from './CustomModal';


const Read = () => {
    const dispatch = useDispatch();
    
    // const { users, loading } = useSelector((state) => state.app)

    useEffect(() => {
        dispatch(showUser());
    }, []);

    // if (loading) {
    //     return (<h2>loading</h2>)
    // }
    return (
        <div>
            {/* <CustomModal/> */}
            <h2>All Data</h2>
            <div>
                 <div className="card w-50 mx-auto">
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">eamil</h6>
                        <p className="card-text">number</p>
                        <p className="card-text">age</p>
                        <p className="card-text">gender</p>
                        <a href="#" class="card-link">view</a>
                        <a href="#" class="card-link">edit</a>
                        <a href="#" class="card-link">delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read;
