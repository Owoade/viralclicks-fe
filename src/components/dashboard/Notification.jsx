import Header from "./sub-components/Header";
import '../../../src/styles/notification.css';
import { db } from './firebase/firebase';
import { doc, setDoc, getDocs, collection, query, addDoc, where, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
const Notification = () => {
    const [notifications,setNotifications]=useState(null);
    const all_not=[];
    const user_id=localStorage.getItem('user-key');
    const __convert_date=(seconds)=>{
        return new Date(seconds).toDateString()
    }
    useEffect(()=>{
      if(notifications==null){
        ( async ()=>{
            const q = query(collection(db, "notifications"), where("to", "==", user_id));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        all_not.push(doc.data())
             });
             setNotifications(all_not.sort((a,b)=>{return b.time - a.time}))
        })()
      }
      
   },[notifications])
    return ( 
        <div className="notification-container">
             <Header />  
          <div className="base-nav">
              <div className="container">
                 <div className="scroll-wrapper">
                        <nav>
                            <a href="#">Overview</a>
                            <a href="#">Mine</a>
                            <a href="#">Referals</a>
                            <a href="#">Share & Earn</a>
                            <a href="#">Withdraw</a>
                            <a href="#">Marketplace</a>
                            <a href="#" className="active">Notifications</a>
                            <Link to="/upgrade">Upgrade </Link>
                        </nav>
                    </div>    
                    
                </div>
            </div>
            {notifications && <div className="notifications">
                        {
                         notifications.map(notification=>(
                            <div className="notification new">
                                <span className={`tag ${notification.type}`}>{notification.type}</span>
                                <strong>{notification.subject}</strong>
                                <p>{notification.body}</p>
                                <span className="time">{__convert_date(notification.time)}</span>
                            </div>
                         ))
                        }
            </div> }
            
        </div>
     );
}
 
export default Notification;