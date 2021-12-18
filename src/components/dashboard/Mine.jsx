import '../../../src/styles/mine.css'
import Header from './sub-components/Header';
import  Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { auth, db } from './firebase/firebase';
import { doc, setDoc, getDocs, collection,query,updateDoc,where, addDoc } from "firebase/firestore";
const Mine = () => {
    const user_id=localStorage.getItem('user-key');
    const [user,setUser]=useState(null);
    const [isMining,setIsMining]=useState(null);
    const [mils,setMils]=useState(0);
    const [hour,setHour]=useState('0')
    const [min,setMinute]=useState('0')
    const [sec,setSec]=useState('0')

    const addZeros=(n)=>{
       return n < 10 ? `0${n}` : n
    }

    console.log(new Date('May 30, 2020 12:00:00').getTime())
    if(isMining == true){
        if(mils != 0){
            setInterval(()=>{
                const dif=mils - Date.now();
                if(dif > 0){
                    setHour(Math.floor(dif % (1000*60*60*24) / (1000*60 *60)))
                    setMinute(Math.floor(dif % (1000*60*60) / (60 * 1000)))
                    setSec(Math.floor(dif % (1000 * 60) /1000))
                }else{
                    setIsMining(false)
                }
                
             },1000)
        }
    }

    const start_mining= async ()=>{
        setIsMining(true)
        if(user.mining==false){
            const userRef = doc(db, "user", user_id);
            await updateDoc(userRef, {
                mining:true,
                no_mines:user.no_mines+1,
                minining_starts_at:Date.now(),
                mining_ends_at:Date.now() + (user.mine_duration * 3600 * 1000)
            });
            
             const notification_data = {
                type: "mine",
                subject: "You have started mining",
                body: `Your mining ends in the ${user.mine_duration} hour`,
                time: Date.now(),
                to: user_id
            }
            const docRef = await addDoc(collection(db, "notifications"), notification_data)
        }
    
       
    } 
    useEffect(()=>{
        if(user == null){
            (async ()=>{
                const q = query(collection(db, "user"), where("email", "==", user_id));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach( async (doc) => {
                    setUser(doc.data())
                    setIsMining(doc.data().mining)
                    setMils(doc.data().mining_ends_at);
                });
            })()
        }    
    },[user])
    if(user != null){
        if(Date.now() >= user.mining_ends_at && user.mining_ends_at !=0 ){
        ( async()=>{
                const userRef = doc(db, "user", user_id);
                await updateDoc(userRef, {
                    mining:false,
                    no_mines:user.no_mines+1,
                    minining_starts_at:0,
                    mining_ends_at:0,
                    mine_balance:user.mine_balance + user.mine_earning
                 }); 
                 const notification_data = {
                    type: "mine",
                    subject: "Mining just ended",
                    body: `An amount of #${user.mine_earning} has been added to your total balance`,
                    time: Date.now(),
                    to: user_id
                }
                const docRef = await addDoc(collection(db, "notifications"), notification_data) ;
                setIsMining(false)
            
        })()
        }
    }

    // setInterval(()=>{
    //   setSec(new Date().getSeconds())
    // },1000)
    return ( 
        <div className="mine-container">
          <Header />  
          <div className="base-nav">
              <div className="container">
                 <div className="scroll-wrapper">
                        <nav>
                            <a href="#">Overview</a>
                            <a href="#" className="active">Mine</a>
                            <Link to="/referral">Referals</Link>
                            <a href="#">Share & Earn</a>
                            <a href="#">Withdraw</a>
                            <a href="#">Marketplace</a>
                            <Link to="/notifications">Notifications</Link>
                            <a href="#">Upgrade</a>
                        </nav>
                    </div>    
                    
                </div>
            </div>
             {  user && <div className="container">
                    <div className="mine-box">
                        <h1>{`${addZeros(hour)}:${addZeros(min)}:${addZeros(sec)}`}</h1>
                    </div>
                <div className="btn">
                    {!isMining && <Button variant="contained" style={{backgroundColor:"#9900EF"}} onClick={start_mining}>Start Mining</Button>}    
                    {isMining && <Button variant="contained" style={{backgroundColor:"#9900EF"}}>Mining...</Button>  }  
                    </div> 
                    
                </div>
                 }
               
            
        </div>    
     );
}
 
export default Mine;