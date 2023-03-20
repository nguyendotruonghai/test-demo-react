import logo from "./logo.svg";
import "./App.scss";
import Headers from "./components/Header/Header";
import {Link} from "react-router-dom";



const App = () => {

  return (
    <div className="app-container">
        <Headers/>
        <div>
          test link
        </div>
        <div>
          <button>
            <Link to="/users">go to User page</Link>
          </button>
          <button>
            <Link to="/admins">go to Admin page</Link>
          </button>
        </div>
        
    </div>
  );
};

export default App;
