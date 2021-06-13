import Counter from './components/Counter/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeCounter from './components/HomeConter';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomeCounter} />
          <Route path="/Counter" component={Counter} />

        </Switch>
      </Router>
    </div>
  );
}
export default App;