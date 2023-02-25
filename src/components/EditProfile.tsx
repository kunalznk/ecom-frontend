
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { updateUserByIdThunk, userActions } from '../store/userSlice';

const EditProfile = (props: any  ) => {
    const { setEdit } = props;
    const dispatch = useAppDispatch();
    const {user } = useAppSelector((state) => state.entities.user)

    const onChangeField = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        dispatch(
        userActions.setUser({
            [e.target.name] : e.target.value,
          }) );
        };
    return <>
    <div className="col-lg-9 col-md-12">
                        <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                            <div className="dash__pad-2">
                                <h1 className="dash__h1 u-s-m-b-14">Edit Profile</h1>

                                <span className="dash__text u-s-m-b-30">Looks like you haven't update your profile</span>
                                
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form className="dash-edit-p">
                                            <div className="gl-inline">
                                                <div className="u-s-m-b-30">

                                                    <label className="gl-label" htmlFor="reg-fname">FIRST NAME *</label>

                                                    <input className="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="" name="firstName" value={user.firstName} onChange={(e) => onChangeField(e)}/></div>
                                                <div className="u-s-m-b-30">

                                                    <label className="gl-label" htmlFor="reg-lname">LAST NAME *</label>

                                                    <input className="input-text input-text--primary-style" type="text" id="reg-lname" name="lastName" value={user.lastName} onChange={(e) => onChangeField(e)} /></div>
                                            </div>
                                            <div className="gl-inline">
                                                <div className="u-s-m-b-30">

                                                    <label className="gl-label" htmlFor="reg-fname">Email ID *</label>

                                                    <input className="input-text input-text--primary-style" type="text" id="reg-fname" name="emailId" value={user.emailId} onChange={(e) => onChangeField(e)}/></div>
                                                <div className="u-s-m-b-30">

                                                    <label className="gl-label" htmlFor="reg-lname">Mobile No *</label>

                                                    <input className="input-text input-text--primary-style" type="text" id="reg-lname" name="phoneNumber" value={user.phoneNumber} onChange={(e) => onChangeField(e)} /></div>
                                            </div>
                                            <button className="btn btn--e-brand-b-2"  onClick={(e) => {e.preventDefault(); dispatch(updateUserByIdThunk(user)); setEdit(false);}}>SAVE</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
    </>
}

export default EditProfile;