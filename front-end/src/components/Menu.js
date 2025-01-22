import React from "react";
import "../style/menu.css";
import axios from "axios";
import { useUser } from "../Auth/ProtectedRoute";
import { useLocation } from "react-router-dom";
import GetCompanies from "../hooks/GetCompanies";
import toast from "react-hot-toast";

export default function Menu() {
  const { user } = useUser();

  const comapnies = GetCompanies();

  const currentUrl = useLocation();

  function obtainSignUpId() {
    const signUpId = comapnies.find(
      (comapnie) => comapnie.companyName === user.companyId
    )._id;

    const tempInput = document.createElement("textarea");
    tempInput.value = signUpId;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    toast.success("L'ID de votre société a été copié");
  }

  return (
    <div className="Menu shadow">
      <div className="userSetting text-end mb-4">
        <div className="dropdown">
          <button
            className="btn btn-dark p-3 pt-1 pb-1 dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Paramètre
          </button>
          <ul className="dropdown-menu shadow">
            <li className="d-flex align-items-center gap-2 dropdown-item">
              <img src="/Assets/clientEdit.png" alt="edit client" width={20} />
              <a
                className="text-dark"
                style={{ textDecoration: "none" }}
                href={`/users/update-user/${user._id}`}
              >
                Modifier votre profile
              </a>
            </li>
            <hr className="m-0 mt-1 mb-1" />
            {user.function === "Admin" && (
              <li
                className="d-flex align-items-center gap-2 dropdown-item"
                onClick={obtainSignUpId}
              >
                <img src="/Assets/companyId.png" alt="companuId" width={20} />
                Obtenir l'ID du société
              </li>
            )}
            <hr className="m-0 mt-1 mb-1" />
            <li className="">
              <form
                className="logoutForm"
                onSubmit={() => {
                  axios
                    .post(
                      `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/logout`,
                      {},
                      { withCredentials: true }
                    )
                    .then((res) => {
                      console.log("Logout successful");
                    })
                    .catch((error) => {
                      console.error("Error logging out:", error);
                    });
                }}
              >
                <button
                  type="submit"
                  className="pt-1 pb-1 p-3 d-flex align-items-center gap-2 dropdown-item"
                  style={{
                    outline: "none",
                    border: "none",
                    backgroundColor: "white",
                  }}
                >
                  <img src="/Assets/logout.png" alt="logout" width={20} />
                  Déconnexion
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
      <div className="UserInfoSegment">
        <div>
          <img src="/Assets/profile.png" alt="user" width={80} />
        </div>

        <div className="">
          <div className="w-100">
            <div className="d-flex align-items-center gap-2">
              <p className="userFullName">{user.fullName}</p>
              <p className="userFunction bg_blue_button p-2 pt-0 pb-0">
                {user.role}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-end flex-wrap">
              <div>
                <div className="p-2 pt-0 pb-0 mt-1 d-flex align-items-center gap-2">
                  <img src="/Assets/company.png" alt="name" width={15} />
                  <span className="userCompany">{user.companyId}</span>
                </div>
                <div
                  className="p-2 pt-0 pb-0 mt-1 d-flex align-items-center gap-2"
                  style={{ fontSize: "13px" }}
                >
                  <img src="/Assets/email.png" alt="email" width={15} />
                  <span>{user.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <nav className="navLinks">
        <ul>
          <li
            className={currentUrl.pathname === "/clients" ? "activeLink" : ""}
          >
            <img src="/Assets/clients.png" alt="clients" width={20} />
            <a href="/clients">Clients</a>
          </li>
          {/* <ul className="subNavLinks">
            <li
              className={
                currentUrl.pathname === "/clients/add-client"
                  ? "activeSubLink"
                  : ""
              }
            >
              <a href="/clients/add-client">Ajouter client</a>
            </li>
          </ul> */}
          <li
            className={currentUrl.pathname === "/compteurs" ? "activeLink" : ""}
          >
            <img src="/Assets/counter.png" alt="compteur" width={20} />
            <a href="/compteurs">Compteur</a>
          </li>
          {/* <ul className="subNavLinks">
            <li
              className={
                currentUrl.pathname === "/compteurs/add-compteur"
                  ? "activeSubLink"
                  : ""
              }
            >
              <a href="/compteurs/add-compteur">Ajouter compteur</a>
            </li>
          </ul> */}
          <li
            className={currentUrl.pathname === "/factures" ? "activeLink" : ""}
          >
            <img src="/Assets/bill.png" alt="facture" width={20} />
            <a href="/factures">Facture</a>
          </li>
          {/* <ul className="subNavLinks">
            <li
              className={
                currentUrl.pathname === "/factures/add-facture"
                  ? "activeSubLink"
                  : ""
              }
            >
              <a href="/factures/add-facture">Creer facture</a>
            </li>
          </ul> */}
          <li>
            <img src="/Assets/tranche.png" alt="tranche" width={20} />
            <a href="/tranches">Tranche</a>
          </li>
          {/* <ul className="subNavLinks">
            <li
              className={
                currentUrl.pathname === "/tranches/add-tranche"
                  ? "activeSubLink"
                  : ""
              }
            >
              <a href="/tranches/add-tranche">Creer tranche</a>
            </li>
          </ul> */}
        </ul>
      </nav>
    </div>
  );
}
