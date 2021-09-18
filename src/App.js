import Add from "./components/Add";
import {
  BrowserRouter as Router,
  Switch,
  Route,Link

} from "react-router-dom";
import Show from "./components/Show";
import Update from './components/Update';


function App() {
  return (
    <div className="App">
      <Router>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          
        </ul>
        <Switch>
         
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/:id">
            <Update />
          </Route> 
          <Route exact  path="/">
            <Show />
          </Route>
        </Switch>
      </Router>,


    </div>
  );
}

export default App;
