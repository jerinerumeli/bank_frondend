
import DropDown from "./Components/DropDown";
import "./App.css";
import {Route,Routes, BrowserRouter as Router} from "react-router-dom"
import HomePage from "./Components/Home/HomePage";
import AmountDetails from "./Components/AmountDetails/AmountDetails";
import Deposit from "./Components/Deposit/Deposit";
import Balance from "./Components/Balance/Balance";
import Withdrawal from "./Components/Withdrawal/Withdrawal";
import SignIn from "./Components/Signin/SignIn/SignIn";
import Login from "./Components/Signin/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route excact path='/' element={<HomePage/>} />
          <Route excact path='/login' element={<Login/>} />
          <Route excact path='/signin' element={<SignIn/>} />
          <Route excact path='/account' element={<AmountDetails/>} />
          <Route excact path='/deposit' element={<Deposit/>} />
          <Route excact path='/withdrawal' element={<Withdrawal/>} />
          <Route excact path='/balance' element={<Balance/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
