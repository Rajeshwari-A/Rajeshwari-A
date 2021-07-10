import React, { Component } from 'react';
// import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import localforage from 'localforage';
import Button from '../../../FormFields/Button/button';
import * as actions from '../../../../Redux/Actions/index';
import { validateSSN } from '../../../../Utlis/utlis';
import InputField from '../../../FormFields/Input/formInput'
import './beneficiary-details.css';
import '../../lender-profile.css';



class IBeneficiaryDetails extends Component {
    // const IBeneficiaryDetails = () => {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state !== prevState) {
            this.saveBeneficiaryDeatils();
        }


    }

    handleNameChange = (e, id) => {
        const { name, value } = e.target;
        if (value) {
            this.setState((state) => ({
                ["beneficiary" + id]: { ...state["beneficiary" + id], [name]: value },
            }));
        } else if (this.state["beneficiary" + id][name]) {
            delete this.state["beneficiary" + id][name];
            this.setState((state) => ({ ...state }))
        }
    }

    handleSSN = (e, id, index) => {
        let { name, value } = e.target;
        // let inputs = document.querySelectorAll('#ssn');
        // let inputs = document.querySelectorAll('input:([data-ssn="ssn"])');
        let inputs = document.querySelectorAll(`.ssn-input-${id}`)
        if (index === 0 && value.length > 2) {
            inputs[index + 1].focus();
        } else if (index === 1 && value.length === 2) {
            inputs[index + 1].focus();
        }
        value = inputs[0].value + "-" + inputs[1].value + "-" + inputs[2].value;
        if (value) {
            this.setState((state) => ({
                ["beneficiary" + id]: { ...state["beneficiary" + id], [name]: value },
            }));
        } else if (this.state["beneficiary" + id][name]) {
            delete this.state["beneficiary" + id][name];
            this.setState((state) => ({ ...state }))
        }
        // this.setState(prevState => ({ ...prevState, [name]: value }));
        if (validateSSN(value)) {
            // setError1(prevState => ({ ...prevState, invalidSSN: false }))
            this.setState((state) => ({
                ["error" + id]: { ...state["error" + id], invalidSSN: false },
            }));

        } else {
            this.setState((state) => ({
                ["error" + id]: { ...state["error" + id], invalidSSN: true },
            }));
        }
    }

    handleFileUpload = (e, id) => {
        const { name } = e.target;
        if (e.target.files[0]) {
            this.setState((state) => ({
                ["beneficiary" + id]: { ...state["beneficiary" + id], [name]: e.target.files[0], fileName: e.target.files[0].name },
            }));
        }
    }

    handleDOB = (e, id, index) => {

        let { name, value } = e.target;
        let inputs = document.querySelectorAll(`.dob-select-${id}`);
        if (index === 0) {
            inputs[index + 1].focus();
        } if (index === 1 && value.length > 1) {
            inputs[index + 1].focus();
        }
        value = inputs[0].value + '/' + inputs[1].value + '/' + inputs[2].value;
        let currentDate = new Date();
        let age = (Date.now(currentDate) - new Date(value)) / (31557600000);
        let futureDate = "DOB can not be a future Date";
        let invalidAge = "Lender should be atleast 18 years old";
        let invalidDate = "You have entered an invalid Date"
        // if (id === 1) {
        // setLenderOneData(prevState => ({ ...prevState, [name]: value }));
        if (value) {
            this.setState((state) => ({
                ["beneficiary" + id]: { ...state["beneficiary" + id], [name]: value },
            }));
        } else if (this.state["beneficiary" + id][name]) {
            delete this.state["beneficiary" + id][name];
            this.setState((state) => ({ ...state }))
        }
        if (age > 0) {
            if (age < 18) {
                // setError1(prevState => ({ ...prevState, invalidDOB: invalidAge }))
                this.setState((state) => ({
                    ["error" + id]: { ...state["error" + id], invalidDOB: invalidAge },
                }));
            } else {
                this.setState((state) => ({
                    ["error" + id]: { ...state["error" + id], invalidDOB: "" },
                }));
            }
        } else {
            // setError1(prevState => ({ ...prevState, invalidDOB: futureDate }))
            this.setState((state) => ({
                ["error" + id]: { ...state["error" + id], invalidDOB: futureDate },
            }));
        }
        // }
    }

    handleFileType = (e, id) => {
        const { name, value } = e.target
        if (value && value !== "Select") {
            this.setState((state) => ({
                ["beneficiary" + id]: { ...state["beneficiary" + id], [name]: value },
            }));
        } else if (this.state["beneficiary" + id][name]) {
            delete this.state["beneficiary" + id][name];
            this.setState((state) => ({ ...state }))
        }
    }

    handleBenPercentage = (e, id) => {
        let { name, value } = e.target;
        let { beneficiaryPercentageCount } = this.props.beneficiaryData;
        if (value > 100) {
            this.setState((state) => ({
                ["error" + id]: { ...state["error" + id], invalidPercent: "Sum of beneficiary percentages can not be more than '100'" },
            }), () => {
                setTimeout(() => {
                    e.target.value = 100;
                    this.setState((state) => ({
                        ["error" + id]: { ...state["error" + id], invalidPercent: "" },
                    }))
                }, 1.5 * 1000);
            });
        }
        if (value) {
            this.setState((state) => ({
                ["beneficiary" + id]: { ...state["beneficiary" + id], [name]: value },
            }), async () => {
                let percentageList = await localforage.getItem("percentageList");
                percentageList = percentageList ? percentageList : {};
                percentageList["p" + id] = parseInt(this.state["beneficiary" + id].percentage);
                localforage.setItem('percentageList', percentageList);
                let percentCount = Object.values(percentageList).reduce((a, b) => a + b, 0);
                console.log("percentCount--", percentCount)
                if (percentCount > 100) {
                    this.setState((state) => ({
                        ["error" + id]: { ...state["error" + id], invalidPercent: "Sum of beneficiary percentages can not be more than '100'" },
                    }))
                } else {
                    this.setState((state) => ({
                        ["error" + id]: { ...state["error" + id], invalidPercent: false },
                    }))
                }
                this.props.handlebeneficiaryPercentage(percentCount);
            });
        } else if (this.state["beneficiary" + id][name]) {
            delete this.state["beneficiary" + id][name];
            this.setState((state) => ({ ...state }))
        }

    }

    componentDidMount = async () => {
        if (this.props.beneficiariesCount === 1) {
            await this.clearStorage();
        }
    }

    componentWillUnmount = async () => {
        this.clearStorage();
    }

    clearStorage = async () => {
        await localforage.removeItem("percentageList")
        await localforage.removeItem("beneficiaryData")
    }


    saveBeneficiaryDeatils = async (e) => {

        // if(lenderID === 1) {
        // if(lenderOneData.firstname && lenderOneData.lastname && lenderOneData.dob && lenderOneData.file1 &&
        //     lenderOneData.type && !error1.invalidDOB && !error1.invalidSSN) {
        //         console.log("reached here----------")
        //     dispatch(actions.saveLenderDetails({lenderOne: lenderOneData, lenderTwo: null}));
        //     localforage.setItem('lenderOneData', lenderOneData); }
        //     else {
        //         dispatch(actions.saveLenderDetails({lenderOne: null, lenderTwo: null}));

        //     }

        // }

        // console.log("validating--------", this.state["beneficiary"+1], Object.keys(this.state["beneficiary"+1]).length)


        // const beneficiariesCount = 
        const { beneficiariesCount, beneficiaryID } = this.props;
        let formDataCount = 0;
        // localforage.setItem('beneficiaryData', data);
        let data = await localforage.getItem("beneficiaryData");
        console.log("data11111111-----", data)

        data = (data) ? data : {};
        // for(let c=0; c< beneficiariesCount; c++ ){
        // console.log("looping--------",Object.keys(this.state["beneficiary"+1]).length, typeof Object.keys(this.state["beneficiary"+1]).length )
        if (this.state["beneficiary" + beneficiaryID] && Object.keys(this.state["beneficiary" + beneficiaryID]).length == 9 &&
            !this.state["error" + beneficiaryID].invalidAge && !this.state["error" + beneficiaryID].invalidPercent && !this.state["error" + beneficiaryID].invalidSSN
            && !this.state["error" + beneficiaryID].invalidDOB) {
            console.log("incrementing----")
            formDataCount += 1;
            console.log("beneficiariesCount---", beneficiariesCount, formDataCount)

            if (formDataCount && beneficiaryID === beneficiariesCount) {
                if (!data["beneficiary" + beneficiaryID]) {
                    data["beneficiary" + beneficiaryID] = this.state["beneficiary" + beneficiaryID]

                }

                console.log("data-----", data)

                localforage.setItem('beneficiaryData', data);

                this.props.saveBeneficiaryData(data);
                this.props.btnEnable(true);

            }
            return;
        } else {
            formDataCount -= 1;
            this.props.btnEnable(false)
            return;
        }
        // }



    }


    render() {
        console.log("rendering--------------", this.state)
        const { beneficiaryID, beneficiariesCount } = this.props;
        return (
            <React.Fragment>
                <section className="beneficiary-details-section">
                    <div className="beneficiary-details-block">
                        <div className="beneficiary-name-block">
                            <span className="input-label-span beneficiary-name-span">Full Legal Name*</span>
                            <InputField type="text" defaultValue="" name="firstname" placeholder="First" className="form-input firstname"
                                onChange={(e) => this.handleNameChange(e, beneficiaryID)} />
                            <InputField type="text" defaultValue="" name="lastname" placeholder="Last"
                                className="form-input lastname" onChange={(e) => this.handleNameChange(e, beneficiaryID)}
                            />
                        </div>
                        <div className="dob-wrapper">
                            <span className="input-label-span dob-span">Date of Birth*</span>
                            <select className={`form-select ${"dob-select-" + beneficiaryID}`} name="dob" onChange={(e) => this.handleDOB(e, beneficiaryID, 0)}>
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
                            <InputField type="number" defaultValue="" name="dob" placeholder="Date"
                                className={`profile-input ${"dob-select-" + beneficiaryID}`} onChange={(e) => this.handleDOB(e, beneficiaryID, 1)}
                            />
                            <span className="char-span"> / </span>
                            <InputField
                                type="number" defaultValue="" name="dob"
                                placeholder="Year"
                                className={`profile-input ${"dob-select-" + beneficiaryID}`}
                                onChange={(e) => this.handleDOB(e, beneficiaryID, 2)}
                            />
                            {this.state["error" + beneficiaryID] && this.state["error" + beneficiaryID].invalidDOB && <span className={`error-span ${this.state["error" + beneficiaryID].invalidDOB ? "ssn-error-span" : ""}`}>{this.state["error" + beneficiaryID].invalidDOB}</span>}
                            {/* {error1.invalidDOB && <span className={`error-span ${error1.invalidDOB ? "ssn-error-span" : ""}`}>{error1.invalidDOB}</span>} */}
                        </div>
                        <div className="beneficiary-id-block">
                            <span className="input-label-span ssn-span">SSN*</span>
                            <InputField type="text" defaultValue="" name="ssn" id="ssn-0" data-ssn="ssn" placeholder=""
                                className={`profile-input ${"ssn-input-" + beneficiaryID}`} onChange={(e) => this.handleSSN(e, beneficiaryID, 0)}
                            />
                            <span className="char-span"> - </span>
                            <InputField type="text" defaultValue="" id="ssn-1" name="ssn" id="ssn" placeholder=""
                                className={`profile-input ${"ssn-input-" + beneficiaryID}`} onChange={(e) => this.handleSSN(e, beneficiaryID, 1)}
                            />
                            <span className="char-span"> - </span>
                            <InputField type="text" defaultValue="" id="ssn-2" name="ssn" id="ssn" placeholder=""
                                className={`profile-input ${"ssn-input-" + beneficiaryID}`} onChange={(e) => this.handleSSN(e, beneficiaryID, 2)}
                            />
                            {this.state["error" + beneficiaryID] && this.state["error" + beneficiaryID].invalidSSN && <span className={`error-span ${this.state["error" + beneficiaryID].invalidSSN ? "ssn-error-span" : ""}`}>Please Enter a Vaild SSN</span>}
                        </div>
                        <div className="beneficiary-Percenrage-block">
                            <span className="input-label-span percentage-span">Percenrage (%)*</span>
                            <InputField type="percentage" defaultValue="" name="percentage" id="percentage" maxLength="3" min="1" max="100" step="1" placeholder=""
                                className="form-input profile-input input-percentage" onChange={(e) => this.handleBenPercentage(e, beneficiaryID)}
                            />
                            {this.state["error" + beneficiaryID] && this.state["error" + beneficiaryID].invalidPercent && <span className={`error-span ${this.state["error" + beneficiaryID].invalidPercent ? "ssn-error-span" : ""}`}>{this.state["error" + beneficiaryID].invalidPercent}</span>}
                        </div>
                        <div className="beneficiary-relationship-block">
                            <span className="input-label-span relationship-span">Relationship to member</span>
                            <InputField type="text" defaultValue="" name="relation" placeholder=""
                                className="form-input profile-input input-relationship" onChange={(e) => this.handleNameChange(e, beneficiaryID)}
                            />
                        </div>
                        <div className="text-wrapper">
                            <span className="input-label-span text-span">Upload Valid ID Proof</span>
                            <span className="text-span text-span">
                                ( You can upload US driver’s license (in or out-of-state)/US passport/Firearms
                                identification card/US Armed Forces identification Identification issued by a state agency
                                (e.g., Registry of Motor Vehicles)/Certificate of citizenship or naturalization as ID proof)
                            </span>
                        </div>
                        <div className="beneficiary-file-type">
                            <div></div>
                            <span className="text-span content-span">Type</span>
                            <select className="form-select select-type" name="type" onChange={(e) => this.handleFileType(e, beneficiaryID)}>
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
                                <div className="file-upload-span">
                                    <label className="upload-label" htmlFor={"upload" + beneficiaryID}>Choose</label>
                                    <input id={"upload" + beneficiaryID} type="file" name="file" accept="image/png, .jpeg, .jpg, image/gif, .pdf"
                                        onChange={(e) => this.handleFileUpload(e, beneficiaryID)} />
                                </div>
                                {this.state["beneficiary" + beneficiaryID] && this.state["beneficiary" + beneficiaryID].fileName && <span className="filename-span">{this.state["beneficiary" + beneficiaryID].fileName}</span>}
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
}

// export default IBeneficiaryDetails;
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveBeneficiaryData: (data) => {
            console.log("data dispatching------", data)
            dispatch(actions.saveBeneficiaryDetails(data))
        },
        btnEnable: (bool) => {
            dispatch(actions.enableAddBtn(bool))
        },
        handlebeneficiaryPercentage: (percentage) => {
            dispatch(actions.handleBeneficiariesPercentage(percentage))
        }
    };

};
const mapStateToProps = (state) => {
    return {
        beneficiaryData: state.beneficiaryData,

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(IBeneficiaryDetails));