import './App.css';
import Index from './components/dashboard/Index';
import GetCoupon from './components/GetCoupon';
import './remix-icon/remixicon.css';
import Referal from './components/dashboard/Referal';
import Mine from './components/dashboard/Mine';
import Notification from './components/dashboard/Notification';
import Upgrade from './components/dashboard/Upgrade';
import Login from './components/dashboard/Login';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import {useState,useEffect} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  const auth = getAuth();
  const [signedIn,setSignedIn]=useState(true)
  useEffect(()=>{
  const subscribe =  onAuthStateChanged(auth, (user) => {
      user ? setSignedIn(true) : setSignedIn(false)
    })
   return ()=> subscribe();

  },[])
 
  return signedIn ? (
    <div className="App">
    <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<Login />}/>
          <Route exact path="dashboard" element={<Index />} >
          </Route> 
          <Route exact path="coupon" element={<GetCoupon />} >
          </Route> 
          <Route exact path="referral" element={<Referal />} >
          </Route> 
          <Route exact path="/mine" element={<Mine />} >
          </Route> 
          <Route exact path="/notifications" element={<Notification />} >
          </Route> 
          <Route exact path="upgrade" element={<Upgrade />}>
          </Route> 
      </Routes>
    </BrowserRouter>  
    </div>
  ) : 
  <div className="App">
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login />}/> 
      </Routes>
    </BrowserRouter>  
    </div>
}

export default App;
