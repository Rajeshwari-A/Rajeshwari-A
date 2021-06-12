import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PublicRoute from "./Components/Routes/publicRoute";
import Login from './Components/Login/login';
import LenderProfileType from './Components/Lender-Profile/Lender-Profile-type/Lender-Profile-type';
// import ILenderDetails from './Components/Lender-Profile/Individual-Lender/ILender-Details/lender-details';
import IlenderDetailsContainer from './Components/Lender-Profile/Individual-Lender/lender-details-container';
import IlenderResidenceDetails from './Components/Lender-Profile/Individual-Lender/Lender-Residence-Details/lender-residence-details';
import ILenderContactDetails from './Components/Lender-Profile/Individual-Lender/Lender-Contact-Details/lender-contact-details';

import { isLenderProfilePage } from './Utlis/utlis';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PublicRoute restricted={false} path="/" exact component={Login} />
          <PublicRoute restricted={false} path="/create-profile" exact component={LenderProfileType} />
          <PublicRoute restricted={false} path="/create-profile-I" exact component={IlenderDetailsContainer} />
          <PublicRoute restricted={false} path="/create-profile-r" exact component={IlenderResidenceDetails} />
          <PublicRoute restricted={false} path="/create-profile-c" exact component={ILenderContactDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
