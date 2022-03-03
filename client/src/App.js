import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from "./components/Screens/CommonScreens/AboutUs/AboutUs";
import VissionMission from "./components/Screens/CommonScreens/AboutUs/VisionMission";
import ContactUs from "./components/Screens/CommonScreens/ContactUs/ContactUs";
import Events from "./components/Screens/CommonScreens/Events/Event";
import Gallery from "./components/Screens/CommonScreens/Gallery/Gallery";
import Home from "./components/Screens/CommonScreens/Home";
import Members from "./components/Screens/CommonScreens/Members/Members";
import NewsRoom from "./components/Screens/CommonScreens/Newsroom/Newsroom";
import AdminHome from "./components/Screens/PostLoginScreens/Admin/AdminHome";
import AdminProfile from "./components/Screens/PostLoginScreens/Admin/AdminProfile";
import PendingMembers from "./components/Screens/PostLoginScreens/Admin/Members/PendingMembers";
import PendingMembersList from "./components/Screens/PostLoginScreens/Admin/Members/PendingMembersList";
import Login from "./components/Screens/PreLoginScreens/Login";
import LoginAdmin from "./components/Screens/PreLoginScreens/LoginAdmin";
import Register from "./components/Screens/PreLoginScreens/Register";
import RegisterAdmin from "./components/Screens/PreLoginScreens/RegisterAdmin";
import UserRegDetails from "./components/Screens/PreLoginScreens/UserRegDetails/UserRegDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' exact element = {<Home />} />
          <Route path = '/aboutus' element = {<AboutUs />} />
          <Route path = '/visionmission' element = {<VissionMission />} />
          <Route path = '/newsroom' element = {<NewsRoom />} />
          <Route path = '/contactus' element = {<ContactUs />} />
          <Route path = '/alumniassist' element = {<ContactUs />} />
          <Route path = '/gallery' element = {<Gallery />} />
          <Route path = '/members' element = {<Members />} />
          <Route path = '/events' element = {<Events />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '/register' element = {<Register />} />
          <Route path = '/registeradmin' element = {<RegisterAdmin />} />
          <Route path = '/loginadmin' element = {<LoginAdmin />} />
          <Route path = '/userregdetail' element = {<UserRegDetails />} />
          <Route path = '/admin' element = {<AdminHome />} />
          <Route path = '/adminprofile' element = {<AdminProfile />} />
          <Route path = '/pendingmembers' element = {<PendingMembersList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
