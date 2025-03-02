
import './App.scss';
import Header from './components/Header/Header';
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className='app-container'>
      <Header></Header>
      <div>
        <button ><Link to="/users">Go to page User</Link> </button>
        <button ><Link to="/admins">Go to page Admin</Link> </button>
      </div>
    </div>
  );
}

export default App;
