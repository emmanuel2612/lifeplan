import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Planner from "./pages/Planner";


function App() {
  return (
    <>
        <Switch>
          <Route path="/planner" component={Planner} />
          <Route path="/" component={Home} />
        </Switch>
    </>
  );
}

export default App;
