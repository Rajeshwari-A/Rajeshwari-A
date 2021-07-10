import React, { Component } from 'react';
import * as actions from '../../../../Redux/Actions/index';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BeneficiaryDetails from './beneficiary-details';
import LenderProfile from '../../lender-profile';
import '../../lender-profile.css';
import '../../lender-profile.css';
import './beneficiary-details.css'



class IBeneficiaryDetailsContainer extends Component {
    state = {
        showNomineeBlock: false,
        beneficiaryList:["b1"],
        addAnother: true,
        percentageCount: 0
    }

    addAnotherNominee = () => {
        const testArray = ["b1"];
        let updatedList = this.state.beneficiaryList;
        updatedList[updatedList.length] = "b" + [updatedList.length + 1];
        this.props.btnEnable(false);
        this.setState({beneficiaryList: updatedList})
        testArray.push("b" + [testArray.length+1])
    }


    render () {
        const {beneficiaryData} = this.props;
        const {enableAddBtn, validData, beneficiaryPercentageCount} = this.props.beneficiaryData;
        console.log("enableAddBtn", beneficiaryPercentageCount);
        return (
            <React.Fragment>
                <LenderProfile btnEnable={enableAddBtn && beneficiaryPercentageCount === 100} displayBtn={true} navPageID={4} data={beneficiaryData}>
                    <div className="beneficiary-details-container">
                        <div className="container-subheader-wrapper">
                            <h2 className="sub-header">Beneficiary Details</h2>
                        </div>
                        <div>
                        </div>
                            {console.log("beneficiaList", this.state.beneficiaryList)}
                        <div className="nominee-details-block">
                            {
                                this.state.beneficiaryList.length ? this.state.beneficiaryList.map((value, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <BeneficiaryDetails beneficiaryID={index + 1} beneficiariesCount={this.state.beneficiaryList.length}/>
                                            <hr className="section-division-line" />
    
                                            {(this.state.beneficiaryList.length-1 === index && beneficiaryPercentageCount < 100) ? <div className="add-nominee-btn-wrapper">
                                                <button className={`add-section ${enableAddBtn ? "" : "btn-disabled"}`} onClick={this.addAnotherNominee}>
                                                <span className="plus-icon-span">+</span>Add Another
                                            </button></div> : null}
                                            <div>
                                            </div>
                                        </React.Fragment>
                                    )
    
                                }) : null
                                
                            }
    
                            {/* {
                                !beneficiaryList.length &&
                                <div className="add-nominee-btn-wrapper"><button className="add-section" onClick={addAnotherNominee}>
                                    <span className="plus-icon-span">+</span>Add Another
                                </button></div>
                            } */}
    
                        </div>
                    </div>
                </LenderProfile>
            </React.Fragment>
        );
    }

    
}

// export default IBeneficiaryDetailsContainer;

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        btnEnable : (bool) => {
            dispatch(actions.enableAddBtn(bool))
        },
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
  )(withRouter(IBeneficiaryDetailsContainer));