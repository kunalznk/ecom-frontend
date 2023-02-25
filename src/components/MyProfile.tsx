import { useState } from 'react';
import EditProfile from './EditProfile';
import { useAppSelector } from '../store/hooks';

const MyProfile = () => {
    const [ isEdit , setEdit ] = useState(false)
    const { user } = useAppSelector((state) => state.entities.user);
    return <>

    {!isEdit ? <div className="col-lg-9 col-md-12">
                            <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                <div className="dash__pad-2">
                                    <h1 className="dash__h1 u-s-m-b-14">My Profile</h1>

                                    <span className="dash__text u-s-m-b-30">Look all your info, you could customize your profile.</span>
                                    <div className="row">
                                        <div className="col-lg-4 u-s-m-b-30">
                                            <h2 className="dash__h2 u-s-m-b-8">First Name</h2>
                                             <span className="dash__text">{user.firstName}</span>
                                        </div>
                                        <div className="col-lg-4 u-s-m-b-30">
                                            <h2 className="dash__h2 u-s-m-b-8">Last Name</h2>
                                             <span className="dash__text">{user.lastName}</span>
                                        </div>
                                        <div className="col-lg-4 u-s-m-b-30">
                                            <h2 className="dash__h2 u-s-m-b-8">E-mail</h2>
                                            <span className="dash__text">{user.emailId}</span>
                                        </div>
                                        <div className="col-lg-4 u-s-m-b-30">
                                            <h2 className="dash__h2 u-s-m-b-8">Phone</h2>
                                            <span className="dash__text">{user.phoneNumber}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            
                                            <div className="u-s-m-b-16">

                                                <a className="dash__custom-link btn--e-transparent-brand-b-2" onClick={() => setEdit(true)}>Edit Profile</a></div>
                                            <div>

                                                {/* <a className="dash__custom-link btn--e-brand-b-2" href="#">Change Password</a> */}
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </div> : <EditProfile setEdit={setEdit}/>}
    </>
}

export default MyProfile;