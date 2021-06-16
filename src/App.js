import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PublicRoute from "./Components/Routes/publicRoute";
import Login from './Components/Login/login';
import CreateAccount from './Components/Create-Account/create-account';
import LenderProfileType from './Components/Lender-Profile/Lender-Profile-type/lender-profile-type';
// import ILenderDetails from './Components/Lender-Profile/Individual-Lender/ILender-Details/lender-details';
import IlenderDetailsContainer from './Components/Lender-Profile/Individual-Lender/lender-details-container';
import IlenderResidenceDetails from './Components/Lender-Profile/Individual-Lender/Lender-Residence-Details/lender-residence-details';
import ILenderContactDetails from './Components/Lender-Profile/Individual-Lender/Lender-Contact-Details/lender-contact-details';
import IBeneficiaryDetails from './Components/Lender-Profile/Individual-Lender/Beneficiary-Details/beneficiary-details-container';
import ILenderAccountDetails from './Components/Lender-Profile/Individual-Lender/Lender-Account-Details/lender-account-details';
import IAddComments from "./Components/Lender-Profile/Individual-Lender/Add-Comments/add-comments";


import { isLenderProfilePage } from './Utlis/utlis';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PublicRoute restricted={false} path="/" exact component={Login} />
          <PublicRoute restricted={false} path="/create-account" exact component={CreateAccount} />
          <PublicRoute restricted={false} path="/create-profile" exact component={LenderProfileType} />
          <PublicRoute restricted={false} path="/create-profile-I" exact component={IlenderDetailsContainer} />
          <PublicRoute restricted={false} path="/create-profile-r" exact component={IlenderResidenceDetails} />
          <PublicRoute restricted={false} path="/create-profile-c" exact component={ILenderContactDetails} />
          <PublicRoute restricted={false} path="/create-profile-b" exact component={IBeneficiaryDetails} />
          <PublicRoute restricted={false} path="/create-profile-a" exact component={ILenderAccountDetails} />
          <PublicRoute restricted={false} path="/create-profile-ac" exact component={IAddComments} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
