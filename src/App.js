import Sidebar from "./sidebar";
import Topbar from "./topbar";
import "./sb-admin-2.css";
import Dashboard from "./dashboard";
import Footer from "./footer";
import {UserProvider} from "./usercontext";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserList from "./userlist";
import UserCreate from "./usercreate";
import UserEdit from "./useredit";

function App() {
  return (
    <>
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <UserProvider>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>
              <div className="container-fluid">
              <Switch>
                <Route path="/dashboard" component={Dashboard} exact={true}/>
                <Route path="/users" component={UserList} exact={true}/>
                <Route path="/usercreate" component={UserCreate} exact={true}/>
                <Route path="/useredit/:id" component={UserEdit} exact={true}/>
              </Switch>          
              </div>
            </div>
            <Footer></Footer>
          </div>
        </UserProvider>
      </div> 
    </Router>     
    </>
     );
}

export default App;
