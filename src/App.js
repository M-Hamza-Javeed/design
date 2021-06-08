import { Route,Router, Switch } from 'react-router'; 
import { createBrowserHistory } from "history";
import Home from './commponents/Home.jsx'
import Products from './commponents/Products.jsx'
import Contact from './commponents/Contact.jsx'

var hist = createBrowserHistory();


function App() {
  return (
    <Router history={hist}>
    <Switch>
    <Route path="/Home" component={Home} />
    <Route path="/Products" component={Products} />
    <Route path="/Contact" component={Contact} />
    <Route path="/" component={Home} />
    </Switch>
  </Router>

  );
}

export default App;
