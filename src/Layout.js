import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import App from './App';
  import User from './components/User/User';
  import Admin from './components/Admin/Admin';
  import HomePage from './components/Home/HomePage';
  import Dashboard from './components/Admin/content/DashBoard';
  import ManageUser from './components/Admin/content/ManageUser';
  import Login from './components/Auth/Login';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Layout=(props)=>{
    return (
        <div>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<HomePage />} />
                <Route path="users" element={<User />} />
            </Route>
            <Route path="/admins" element={<Admin />}>
                <Route index element={<Dashboard />} />
                <Route path="manage-users" element={<ManageUser />} />
            </Route>
            <Route path="/login" element={<Login></Login>} />
        </Routes>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
        />
        </div>
    )
}
export default Layout