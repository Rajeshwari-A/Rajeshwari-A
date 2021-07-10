import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import LenderProfile from '../../lender-profile';
import * as actionTypes from "../../../../Redux/types"
import './lender-residence-details.css';
import InputField from '../../../FormFields/Input/formInput';
// import axios from 'axios';


const LenderResidenceDetails = () => {
    const dispatch = useDispatch();
  const [residenceDetails, setResidenceDetails] = useState({
    line1: "",
    line2: "",
    city: "",
    state_province: "",
    zip: "",
    country: ""
  });

  const [btnEnable, setBtnEnable] = useState(false);
  const lenderResidenceDetails = useSelector(state => state.getLenderDetails.lenderPage_2);

  console.log("fetcted lender Details -------", lenderResidenceDetails)
  const {city, line1, line2, state_province, zip, country} = residenceDetails;

  const handleResidenceDetails = (e) => {
    const {name, value} = e.target;
    console.log("check data---", value, name)
    setResidenceDetails((prevState) => ({...prevState, [name]: value}));
  }

  useEffect(() => {
    if(Object.keys(lenderResidenceDetails)){
        setResidenceDetails(lenderResidenceDetails)
    }
  }, [lenderResidenceDetails])

  useEffect(() => {
    validateResidenceDetails();
    // if(Object.keys(lenderResidenceDetails).length) {
    //     setResidenceDetails(lenderResidenceDetails)
    // }
  }, [residenceDetails])

  const validateResidenceDetails = () => {
    console.log("called-----", residenceDetails)
    const {line1, line2, city, state_province, zip, country } = residenceDetails;
    if( line1 && line2 && city && state_province && zip && country) {
      setBtnEnable(true);
    } else {
      setBtnEnable(false);
    }
  }


    return (
        <React.Fragment>  
            <LenderProfile btnEnable={btnEnable} displayBtn={true} navPageID={2} data={residenceDetails}>
                <section className="residence-details-wrapper">
                    <h2 className="residence-details-subheader">Residence Details</h2>
                    <div className="address-block address-line-1">
                        <span className="input-label-span residence-details-span">Address Line 1*</span>
                        <InputField type="text" value={line1} id="autoComplete" name="line1" placeholder="Street Name"
                            className="form-input profile-input" onChange={handleResidenceDetails}
                        />
                    </div>
                    <div className="address-block address-line-2">
                        <span className="input-label-span residence-details-span">Address Line 2</span>
                        <InputField type="text" value={line2} name="line2" placeholder="Apt, Suit no"
                            className="form-input profile-input" onChange={handleResidenceDetails}
                        />
                    </div>
                    <div className="address-block city-block">
                        <span className="input-label-span residence-details-span">City*</span>
                        <InputField type="text" value={city} name="city" placeholder="" 
                            className="form-input profile-input" onChange={handleResidenceDetails}
                        />
                    </div>
                    <div className="address-block state-block">
                        <span className="input-label-span residence-details-span">State/Province*</span>
                        <InputField type="text" value={state_province} name="state_province" placeholder=""
                            className="form-input profile-input" onChange={handleResidenceDetails}
                        />
                    </div>
                    <div className="postal-address-block">
                        <span className="input-label-span residence-details-span">Zip/Postal code*</span>
                        <InputField type="text" value={zip} name="zip" placeholder=""
                            className="form-input profile-input" onChange={handleResidenceDetails}
                        />
                        <div></div>
                        <span className="input-label-span residence-details-span">Country*</span>
                        <InputField type="text" value={country} name="country" placeholder=""
                            className="form-input profile-input" onChange={handleResidenceDetails}
                        />
                    </div>
                </section>
            </LenderProfile>
        </React.Fragment>
    );
}

export default LenderResidenceDetails;