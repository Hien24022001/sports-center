import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserManagement from "./pages/UserManagement/UserManagement";
import SharedLayout from "./components/SharedLaout/SharedLayout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CourseManagement from "./pages/CourseManagement/CourseManagement";
import Maintainance from "./pages/Maintainance/Maintainance";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SharedLayout />}
          >
            <Route path="user-management" element={<UserManagement />} />
            <Route path="course-management" element={<CourseManagement />} />
            <Route path="maintainance" element={<Maintainance />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
