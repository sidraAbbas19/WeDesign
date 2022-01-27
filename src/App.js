import Homepage from "./components/Homepage";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FindADesigner from "./components/FindADesigner";
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm";
import Portfolios from "./components/Portfolios";
import Profile from "./components/Profile";
import CreatePortfolio from "./components/CreatePortfolio";
import Chat from './components/Chat'
import DIY from './components/DIY'
import Payment from './components/Payment'
function App() {
  return (
    <>
      <Router>
    <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/findADesigner" element={<FindADesigner/>} />
      <Route path="/signupForm" element={<SignupForm/>} />
      <Route path="/loginForm" element={<LoginForm/>} />
      <Route path="/Portfolios" element={<Portfolios/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/CreatePortfolio" element={<CreatePortfolio/>} />
      <Route path="/DIY" element={<DIY/>} />
      <Route path="/Payment" element={<Payment/>} />
      </Routes>
    <Footer/> 
     </Router>
    </>
  );
}
export default App;






