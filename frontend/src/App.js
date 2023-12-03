import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserManagement from "./pages/UserManagement";
import SharedLayout from "./components/SharedLaout/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<SharedLayout />}
        >
          <Route path="user-management" element={<UserManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
