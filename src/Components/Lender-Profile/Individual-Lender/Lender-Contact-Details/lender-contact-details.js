import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LenderProfile from '../../lender-profile';
import * as actionTypes from "../../../../Redux/types"
import './lender-contact-details.css';
import InputField from '../../../FormFields/Input/formInput';
import { validateEmail } from '../../../../Utlis/utlis';


const ILenderContactDetails = () => {

    const dispatch = useDispatch();
 
    const [contactDetails, setContactDetails] = useState({
        email:"",
        phone: "",
        emergencyFirstName: "",
        emergencyLastName: "",
        emergencyContactNumber:""

    });
   
    const lenderContactDetails = useSelector(state => state.getLenderDetails.lenderPage_3);
    const {email, phone, emergencyFirstName, emergencyLastName, emergencyContactNumber} = contactDetails
    
    useEffect(() => {
        if(Object.keys(lenderContactDetails)) {
            setContactDetails(lenderContactDetails);
        }
    }, [ lenderContactDetails])

    const [error, setError] = useState({
        inValidEmail: false
    });
    const [btnEnable, setBtnEnable] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("e-----", e.target.value, name)

        setContactDetails(prevState => ({ ...prevState, [name]: value }));
        //  setContactDetails(prevState => ({ ...prevState,emergencyContactNumber: contactDetails.firstname + " " + contactDetails.lastname }))
    }

    const handleEmail = (e) => {
        const { name, value } = e.target;
        if (value) {
            setContactDetails(prevState => ({ ...prevState, [name]: value }));
            if (validateEmail(value)) {
                console.log("validated true")
                setError(prevState => ({ ...prevState, inValidEmail: false }))
            } else if (!validateEmail(value)) {
                console.log("validated false")
                setError(prevState => ({ ...prevState, inValidEmail: true }))
            }
        }
    }

    const validateContactDetails = () => {
        console.log("contactDetails", contactDetails)
        const {email, emergencyFirstName, emergencyLastName, emergencyContactNumber, phone} = contactDetails;
        if(email && emergencyFirstName && emergencyLastName && emergencyContactNumber && phone && !error.inValidEmail) {
            setBtnEnable(true);
        } else { setBtnEnable(false); }
    }

    useEffect(() => {
        validateContactDetails();
    }, [contactDetails, error])


    return (
        <React.Fragment>
            <LenderProfile btnEnable={btnEnable} displayBtn={true} navPageID={3} data={contactDetails}>
                <section className="contact-details-section">
                    <h2 className="contact-details-subheader">Contact Details</h2>
                    <div className="contact-details-wrapper">
                        <div className="contact-block lender-email">
                            <span className="input-label-span email-span">Email*</span>
                            <InputField type="text" value={email} name="email" placeholder=""
                                className="form-input profile-input" onChange={handleEmail}
                            />
                            {error.inValidEmail && <span className={`error-span ${error.inValidEmail ? "error" : ""}`}>Please Enter a Vaild Email Address</span>}
                        </div>
                        <div className="contact-number">
                            <span className="input-label-span contact-number-span">Phone Number</span>
                            <InputField type="number" value={phone}  name="phone" placeholder=""
                                className="form-input profile-input" onChange={handleChange}
                            />
                            {/* <span className="char-span"> - </span>
                            <InputField type="text" value="" name="ssn-id-2" placeholder=""
                                className="form-input profile-input"
                            /> */}
                            {/* <span className="char-span"> - </span> */}
                            {/* <InputField type="text" value="" name="ssn-id-3" placeholder=""
                                className="form-input profile-input"
                            /> */}
                        </div>
                        <div className="emergency-contact">
                            <span className="input-label-span emergency-contact-span">Emergency Contact*</span>
                            <InputField type="text" value={emergencyFirstName}  name="emergencyFirstName" placeholder="First"
                                className="form-input profile-input firstname"  onChange={handleChange}
                            />
                            <InputField type="text" value={emergencyLastName} name="emergencyLastName" placeholder="Last"
                                className="form-input profile-input lastname"  onChange={handleChange}
                            />
                        </div>
                        <div className="alternate-contact">
                            <span className="input-label-span alternate-contact-span">Emergency Contact Number*</span>
                            <InputField type="number" value={emergencyContactNumber} name="emergencyContactNumber" placeholder=""
                                className="form-input profile-input"  onChange={handleChange}
                            />
                            {/* <span className="char-span"> - </span>
                            <InputField type="text" value="" name="ssn-id-2" placeholder=""
                                className="form-input profile-input"
                            />
                            <span className="char-span"> - </span>
                            <InputField type="text" value="" name="ssn-id-2" placeholder=""
                                className="form-input profile-input"
                            /> */}
                        </div>
                    </div>
                </section>
            </LenderProfile>
        </React.Fragment>
    );
}

export default ILenderContactDetails;