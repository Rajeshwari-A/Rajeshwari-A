import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PublicRoute from "./Components/Routes/publicRoute";
import Login from './Components/Login/login';
import ForgotPassword from './Components/Forgot-Password/forgot-password';
import VerifyCode_ForgotPassword from './Components/Forgot-Password/verify-code-forgot-password';
import CreateNewPassword from "./Components/Forgot-Password/create-new-password";
import EmailNotification from './Components/Forgot-Password/email-notification-page';
import PasswordNotification from './Components/Forgot-Password/password-notification';
import CreateAccount from './Components/Create-Account/create-account';
import LenderProfileType from './Components/Lender-Profile/Lender-Profile-type/lender-Profile-type';
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
          <PublicRoute restricted={false} path="/forgot-password" exact component={ForgotPassword} />
          <PublicRoute restricted={false} path="/forgot-password/verify-code" exact component={VerifyCode_ForgotPassword} />
          <PublicRoute restricted={false} path="/forgot-password/email-notification" exact component={EmailNotification} />
          <PublicRoute restricted={false} path="/forgot-password/password-notification" exact component={PasswordNotification} />
          <PublicRoute restricted={false} path="/forgot-password/create-password" exact component={CreateNewPassword} />
          <PublicRoute restricted={false} path="/create-account" exact component={CreateAccount} />
          <PublicRoute restricted={false} path="/create-profile" exact component={LenderProfileType} />
          <PublicRoute restricted={false} path="/create-profile/lender-details" exact component={IlenderDetailsContainer} />
          <PublicRoute restricted={false} path="/create-profile/residence-details" exact component={IlenderResidenceDetails} />
          <PublicRoute restricted={false} path="/create-profile/contact-details" exact component={ILenderContactDetails} />
          <PublicRoute restricted={false} path="/create-profile/beneficiary-details" exact component={IBeneficiaryDetails} />
          <PublicRoute restricted={false} path="/create-profile/account-details/" exact component={ILenderAccountDetails} />
          <PublicRoute restricted={false} path="/create-profile/add-comments" exact component={IAddComments} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
