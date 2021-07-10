import React, { useEffect, useState } from 'react';
// import Button from '../../../FormFields/Button/button';
import { useDispatch } from 'react-redux';
import * as actions from "../../../../Redux/Actions/index"
import InputField from '../../../FormFields/Input/formInput';
import localforage from 'localforage';
import {validateSSN} from '../../../../Utlis/utlis';
// import LenderProfile from '../../lender-profile';
import '../../lender-profile.css';
import './lender-details.css';



const ILenderDetails = ({lenderID}) => {
    // console.log("lenderID", lenderID);
    const dispatch = useDispatch();
    const [uploadedFile1Name, setUploadedFile1Name] = useState("");
    const [uploadedFile2Name, setUploadedFile2Name] = useState("");
    const [lenderOneData, setLenderOneData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        ssn: "",
        file1: "",
        type: "",
    })
    const [lenderTwoData, setLenderTwoData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        ssn: "",
        file2: "",
        type: "",        
    });

    const [error1, setError1] = useState ({
        invalidSSN: false, invalidDOB: false
    })

    const [error2, setError2] = useState ({
        invalidSSN: false, invalidDOB: false
    })


    const handleNameChange = e => {
        const { name, value } = e.target;
        if(lenderID === 1)
        setLenderOneData(prevState => ({ ...prevState, [name]: value }));
        else
        setLenderTwoData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSSN = (e, id, index) => {
        let { name, value } = e.target;
        let inputs;
        if (lenderID === 1) {
        inputs = document.querySelectorAll('#ssn1');

        }
        else {
        inputs = document.querySelectorAll('#ssn2');

        }
        if (index === 0 && value.length > 2) {
            inputs[index + 1].focus();
        } else if (index === 1 && value.length === 2) {
            inputs[index + 1].focus();
        }
        value = inputs[0].value + "-" + inputs[1].value + "-" + inputs[2].value;
        if (id === 1) {
            setLenderOneData(prevState => ({ ...prevState, [name]: value }));
            if (validateSSN(value)) {
                setError1(prevState => ({ ...prevState, invalidSSN: false }))

            } else {
                setError1(prevState => ({ ...prevState, invalidSSN: true }))
            }

        } else {
            // console.log("22222", validateSSN(value), value)
            setLenderTwoData(prevState => ({ ...prevState, [name]: value }));
            if (validateSSN(value)) {
                setError2(prevState => ({ ...prevState, invalidSSN: false }))

            } else {
                setError2(prevState => ({ ...prevState, invalidSSN: true }))
            }

        }

    }

    const handleFileUpload = (e, id) => {
        const {name} = e.target;
        // console.log("e--", e.target, id, name);
        if (e.target.files[0]) {
            if (id === 1) {
                setLenderOneData(prevState => ({ ...prevState, [name]: e.target.files[0] }));
                setUploadedFile1Name(e.target.files[0].name)

            } else {
                setLenderTwoData(prevState => ({ ...prevState, [name]: e.target.files[0] }));
                setUploadedFile2Name(e.target.files[0].name);
            }

        }
    }

    const handleDOB = (e, id, index) => {
        let { name, value } = e.target;
        let inputs;
        if(id === 1) {
            inputs = document.querySelectorAll('#dob1');
        } else {
            inputs = document.querySelectorAll('#dob2');
        }
        if(index === 0) {
            inputs[index + 1].focus();
        } if(index ===1 && value.length > 1) {
            inputs[index + 1].focus();
        } 
        // console.log("inputs", inputs)
        value = inputs[0].value +'/'+ inputs[1].value +'/' + inputs[2].value;
        let currentDate = new Date();
        let age = (Date.now(currentDate) - new Date(value)) / (31557600000);
        let futureDate = "DOB can not be a future Date";
        let invalidAge = "Lender should be atleast 18 years old"
        if (id === 1) {
            setLenderOneData(prevState => ({ ...prevState, [name]: value }));
            if (age > 0) {
                if (age < 18) {
                    setError1(prevState => ({ ...prevState, invalidDOB: invalidAge }))
                } else {
                    setError1(prevState => ({ ...prevState, invalidDOB: "" }))
                }
            } else {
                setError1(prevState => ({ ...prevState, invalidDOB: futureDate }))
            }
        } else {
            // console.log("age--", age)
            setLenderTwoData(prevState => ({ ...prevState, [name]: value }))
            if (age > 0) {
                if (age < 18) {
                    setError2(prevState => ({ ...prevState, invalidDOB: invalidAge }))
                } else {
                    setError2(prevState => ({ ...prevState, invalidDOB: "" }))
                }
            } else {
                setError2(prevState => ({ ...prevState, invalidDOB: futureDate }))
            }
        }
    }

    const handleFileType = (e, id) => {
        // console.log("name-----", e.target.value)
        if(id === 1) {
            setLenderOneData(prevState => ({...prevState, type : e.target.value}))
        } else {
            setLenderTwoData(prevState => ({...prevState, type : e.target.value}))
        }
    }

    useEffect(() => {
        saveLenderDeatils()
    }, [lenderOneData, lenderTwoData])

    const saveLenderDeatils = async (e) => {
        // console.log("called-------", lenderID, lenderOneData, lenderTwoData, error1, error2)
        if(lenderID === 1) {
            if(lenderOneData.firstName && lenderOneData.lastName && lenderOneData.dob && lenderOneData.file1 &&
                lenderOneData.type && !error1.invalidDOB && !error1.invalidSSN) {
                    console.log("reached here----------")
                dispatch(actions.saveLenderDetails({lenderOne: lenderOneData, lenderTwo: null}));
                localforage.setItem('lenderOneData', lenderOneData); }
                else {
                    dispatch(actions.saveLenderDetails({lenderOne: null, lenderTwo: null}));
                    
                }

        }
        else if(lenderID === 2) {
            // console.log("lenderTwoData", lenderTwoData)
            if(lenderTwoData.firstName && lenderTwoData.lastName && lenderTwoData.dob && lenderTwoData.file2 &&
                lenderTwoData.type && !error2.invalidDOB && !error2.invalidSSN) {
                try {
                    const lenderOne = await localforage.getItem('lenderOneData');
                    dispatch(actions.saveLenderDetails({lenderOne, lenderTwo: lenderTwoData}));
                    // localforage.setItem('lenderTwoData', lenderTwoData);
                    // console.log("lenderOneData",value);
                } catch (err) {
                    // This code runs if there were any errors.
                    console.log("err", err);
                }
            } else {
                dispatch(actions.saveLenderDetails({lenderOne: null, lenderTwo: null}));
            }
        }


            // dispatch(actions.saveLenderDetails(lenderOneData, lenderTwoData));

    }

    return (
        <React.Fragment>
            <section className="lender-details-section">
                <div className="lender-details-block">
                    <div className="lender-name-block">
                        <span className="input-label-span lender-name-label">Full Legal Name*</span>
                        <InputField type="text" defaultValue="" name="firstName" placeholder="First" className="form-input firstname" 
                        onChange={(e)=>handleNameChange(e,lenderID)} />
                        <InputField type="text" defaultValue="" name="lastName" placeholder="Last"
                            className="form-input lastname" onChange={(e)=>handleNameChange(e,lenderID)}
                        />
                    </div>
                    <div className="dob-wrapper">
                        <span className="input-label-span lender-dob-label">Date of Birth*</span>
                        <select className="form-select select-month" id={"dob"+lenderID} name="dob" onChange={(e) => handleDOB(e, lenderID, 0)}>
                            <option defaultValue value='default'>Select</option>
                            <option value='1'>Janaury</option>
                            <option value='2'>February</option>
                            <option value='3'>March</option>
                            <option value='4'>April</option>
                            <option value='5'>May</option>
                            <option value='6'>June</option>
                            <option value='7'>July</option>
                            <option value='8'>August</option>
                            <option value='9'>September</option>
                            <option value='10'>October</option>
                            <option value='11'>November</option>
                            <option value='12'>December</option>
                        </select>
                        <span className="char-span"> / </span>
                        <InputField type="text" defaultValue="" id={"dob"+lenderID} name="dob" placeholder="Date"
                            className="form-input profile-input" onChange={(e) => handleDOB(e,lenderID, 1)}
                        />
                        <span className="char-span"> / </span>
                        <InputField
                            type="text" defaultValue="" name="dob"
                            placeholder="Year" id={"dob"+lenderID}
                            className="form-input profile-input"
                            onChange={(e) => handleDOB(e,lenderID, 2)}
                        />
                        {error1.invalidDOB && <span className={`error-span ${error1.invalidDOB ? "ssn-error-span" : ""}`}>{error1.invalidDOB}</span>}
                        {error2.invalidDOB && <span className={`error-span ${error2.invalidDOB ? "ssn-error-span" : ""}`}>{error2.invalidDOB}</span>}
                    </div>
                    <div className="lender-id-block">
                        <span className="input-label-span lender-id-span">SSN*</span>
                        <InputField type="text" defaultValue="" id={"ssn" +lenderID} name="ssn" placeholder=""
                            className="form-input profile-input"  onChange={(e) => handleSSN(e, lenderID, 0)}
                        />
                        <span className="char-span"> - </span>
                        <InputField type="text" defaultValue="" id={"ssn" +lenderID} name="ssn" placeholder=""
                            className="form-input profile-input"  onChange={(e) => handleSSN(e, lenderID, 1)}
                        />
                        <span className="char-span"> - </span>
                        <InputField type="text" defaultValue="" id={"ssn" +lenderID} name="ssn" placeholder=""
                            className="form-input profile-input"  onChange={(e) => handleSSN(e, lenderID, 2)}
                        />
                        {error1.invalidSSN && <span className="error-span ssn-error-span">Please Enter a Vaild SSN</span>}
                        {error2.invalidSSN && <span className="error-span ssn-error-span">Please Enter a Vaild SSN</span>}
                    </div>
                    <div className="text-wrapper">
                        <span className="input-label-span text-span">Upload Valid ID Proof</span>
                        <span className="text-span">
                            ( You can upload US driver’s license (in or out-of-state)/US passport/Firearms
                            identification card/US Armed Forces identification Identification issued by a state agency
                            (e.g., Registry of Motor Vehicles)/Certificate of citizenship or naturalization as ID proof)
                        </span>
                    </div>
                    <div className="lender-profile-item">
                        <div></div>
                        <span className="text-span content-span">Type</span>
                        <select className="form-select select-type" name="type" onChange={(e) => handleFileType(e, lenderID)}>
                            <option defaultValue="Select">Select</option>
                            <option value="Valid Driver's License">Valid Driver's License</option>
                            <option value="Birth Certificate">Birth Certificate</option>
                            <option value="State-issued Identification Card">State-issued Identification Card</option>
                            <option value="Social Security Card">Social Security Card</option>
                            <option value="Military Identification Card">Military Identification Card</option>
                            <option value="US Passport or Passport Card">US Passport or Passport Card</option>
                        </select>
                    </div>
                    <div className="upload-files-wrapper">
                        <div></div>
                        <span className="text-span content-span">Select Document</span>
                        <div className="upload-file">
                            <div className="file-upload-span" >
                                <label className="upload-label" htmlFor={"upload"+lenderID}>Choose</label>
                                <input id={"upload" + lenderID} type="file" name={"file" + lenderID} accept="image/png, .jpeg, .jpg, image/gif, .pdf"
                                onChange={(e) => handleFileUpload(e, lenderID)}/>
                            </div>
                           {uploadedFile1Name && <span className="filename-span">{uploadedFile1Name}</span>}
                            {uploadedFile2Name && <span className="filename-span">{uploadedFile2Name}</span>}
                        </div>
                        <span></span>
                    </div>
                    {/* <div>
                            <hr className="section-division-line" />
                        </div> */}

                </div>
                {/* <div className="nominee-details-block" onClick={displayNomineeBlock}>
                            {!nomineeBlock ? <button className="add-section">
                                <span className="plus-icon-span">+</span>Add Another
                            </button> :  <button className="add-section">
                                <span className="plus-icon-span">+</span>Nominee block displayed
                            </button>
                            }
                        </div> */}
            </section>
        </React.Fragment>
    );
}

export default ILenderDetails;