import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import ProtectedRoute from "./Auth/ProtectedRoute";
import Clients from "./components/Clients";
import Compteurs from "./components/Compteurs";
import AddForm from "./components/AddForm";
import ModForm from "./components/MofFrom";
import UserModFrom from "./components/UserModFrom";
import PasswordReset from "./components/PasswordReset";
import Facture from "./components/Facture";
import Home from "./components/Home";
import Employees from "./components/Employees";
import AddEmployee from "./components/AddEmployee";
import AddFacture from "./components/crufForm/AddFacture";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* authentication -------------------------------------------- */}
        <Route path="/log-in" element={<LogIn />} />

        {/* home page --------------------------------------------------- */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* employees --------------------------------------------------- */}
        <Route
          path="/employees"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/add-employee"
          element={
            <ProtectedRoute>
              <AddEmployee />
            </ProtectedRoute>
          }
        />

        {/* user ---------------------------------------------------*/}
        <Route path="/add-admin-user" element={<SignUp />} />
        <Route
          path="/users/update-user/:userId"
          element={
            <ProtectedRoute>
              <UserModFrom />
            </ProtectedRoute>
          }
        />
        <Route path="/reset-password" element={<PasswordReset />} />

        {/* clients ---------------------------------------------------- */}
        <Route
          path="/clients"
          element={
            <ProtectedRoute>
              <Clients />
            </ProtectedRoute>
          }
        />
        <Route
          path="/clients/add-client"
          element={
            <ProtectedRoute>
              <AddForm page={"client"} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/clients/update-client/:clientId"
          element={
            <ProtectedRoute>
              <ModForm page={"client"} />
            </ProtectedRoute>
          }
        />

        {/* compteurs ---------------------------------------------------- */}
        <Route
          path="/compteurs"
          element={
            <ProtectedRoute>
              <Compteurs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compteurs/add-compteur/:numClient"
          element={
            <ProtectedRoute>
              <AddForm page={"compteur"} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compteurs/update-compteur/:compteurId"
          element={
            <ProtectedRoute>
              <ModForm page={"compteur"} />
            </ProtectedRoute>
          }
        />
        {/* facture --------------------------------------------------- */}
        <Route
          path="/factures"
          element={
            <ProtectedRoute>
              <Facture />
            </ProtectedRoute>
          }
        />
        <Route
          path="/facture/add-facture"
          element={
            <ProtectedRoute>
              <AddForm page={"facture"} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/facture/update-facture/:factureId"
          element={
            <ProtectedRoute>
              <ModForm page={"facture"} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
