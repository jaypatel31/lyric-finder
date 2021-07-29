import './App.css';
import Navbar from "./components/layout/Navbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Index from "./components/layout/Index";
import {Provider} from "./context"
import Lyrics from './components/tracks/Lyrics';

function App() {
  return (
    <Router>
      <Provider>
        <>
          <Navbar/>
          <div className="container"> 
            <Switch>
              <Route path="/lyric-finder" exact component={Index}/>
              <Route path="/lyric-finder/lyrics/track/:id" component={Lyrics}/>
              <Route path="/lyrics/track/:id" component={Lyrics}/>
            </Switch>
          </div>
        </>
    </Provider>
    </Router>
  );
}

export default App;
