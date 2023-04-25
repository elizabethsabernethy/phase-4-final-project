import Home from "./Home";
import Museums from "./Museums";
import NavBar from "./NavBar";
import {Route, Switch} from "react-router-dom";
import Paintings from "./Paintings";

function App() {
  return (
    <div>
        <NavBar />
      <Switch>
        <Route exact path="/museums">
          <Museums/>
        </Route>
        <Route exact path="/paintings">
          <Paintings/>
        </Route>
        <Route exact path="/my-art">
          {/* ADD MY ART HERE */}
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
