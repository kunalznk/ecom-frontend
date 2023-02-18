const EditAddress = (props:any) => {
    const { setEdit } = props;
    return <>
    <div className="col-lg-9 col-md-12">
                                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                                        <div className="dash__pad-2">
                                            <h1 className="dash__h1 u-s-m-b-14">Edit Address</h1>

                                            <span className="dash__text u-s-m-b-30">We need an address where we could deliver products.</span>
                                            <form className="dash-address-manipulation">
                                                <div className="gl-inline">
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-fname">FIRST NAME *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-fname" placeholder="John Doe" /></div>
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-lname">LAST NAME *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-lname" placeholder="Doe" /></div>
                                                </div>
                                                <div className="gl-inline">
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-phone">PHONE *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-phone" placeholder="(+0) 900901904" /></div>
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-street">STREET ADDRESS *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-street" placeholder="4247 Ashford Drive Virginia" /></div>
                                                </div>
                                                <div className="gl-inline">
                                                    <div className="u-s-m-b-30">

                                                        

                                                        <label className="gl-label" htmlFor="address-country">COUNTRY *</label><select className="select-box select-box--primary-style" id="address-country">
                                                            <option selected value="">Choose Country</option>
                                                            <option value="uae">United Arab Emirate (UAE)</option>
                                                            <option value="uk">United Kingdom (UK)</option>
                                                            <option value="us">United States (US)</option>
                                                        </select>
                                                        
                                                    </div>
                                                    <div className="u-s-m-b-30">

                                                        

                                                        <label className="gl-label" htmlFor="address-state">STATE/PROVINCE *</label><select className="select-box select-box--primary-style" id="address-state">
                                                            <option selected value="">Choose State/Province</option>
                                                            <option value="al">Alabama</option>
                                                            <option value="al">Alaska</option>
                                                            <option value="ny">New York</option>
                                                        </select>
                                                        
                                                    </div>
                                                </div>
                                                <div className="gl-inline">
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-city">TOWN/CITY *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-city" /></div>
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="address-street">ZIP/POSTAL CODE *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="address-postal" placeholder="20006" /></div>
                                                </div>

                                                <button className="btn btn--e-brand-b-2" type="submit" onClick={() => setEdit(false)}>SAVE</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
    </>
}

export default EditAddress;