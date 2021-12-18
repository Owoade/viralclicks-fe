import { auth, db } from './dashboard/firebase/firebase';
import { initializeApp } from "firebase/app";
import { doc, setDoc, getDocs, collection,query,addDoc,getDoc,updateDoc } from "firebase/firestore";
import TextField from '@mui/material/TextField';
import  Button from '@mui/material/Button';
import '.././styles/GetCoupon.css'
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
const GetCoupon = () => {
    const navigate = useNavigate();
    const [couponCode, setCouponCode]=useState('');
    const [error, setError] = useState(null);
    const [clicked,setClicked]=useState(false);
    const allCodes=[]
    const all_user_coupon_code=[];
    const ref = collection(db, "coupon");
    const userRef=collection(db,"user");
    const assignReferalBonus=()=>{

    }
    const validateCoupon =async ()=>{
        try{
            setClicked(true)
         const q=query(ref)
         const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const code={info:doc.data()}
            allCodes.push(code)
        });
        const q2=query(userRef)
        const userSnapShot= await getDocs(q2)
        userSnapShot.forEach((doc)=>{
            const user={user:doc.data()}
            all_user_coupon_code.push(user);
        })
    //    If coupon code is valid 
       if(allCodes.map((code)=>(code.info.code)).includes(couponCode)){
        //    if coupon code is not taken by any user
           if(all_user_coupon_code.map((user)=>(user.user.coupon)).includes(couponCode)){
                setClicked(false);
                setError('This Coupon Code has been used!!!');
           }else{
                setClicked(false);
                setError('');
                // Package type
                const coupon_type=allCodes.filter((code)=>{ return couponCode===code.info.code})[0].info.package;
                const user_data =JSON.parse(localStorage.getItem('session'));
                const referrer = localStorage.getItem('ref')
                const data= {
                    email: user_data.email,
                    name: user_data.fullName,
                    coupon: couponCode,
                    package:coupon_type,
                    no_logins:0,
                    referrer:referrer
                }
              
                if(referrer != "null"){
                    const docRef = doc(db, "user", referrer);
                    const docSnap = await getDoc(docRef);
                    const user= docSnap.data();
                    const referrer_email=user.email;

                    const notification_data={
                        type:'earning',
                        subject:`${user_data.email} just joined using your mail`,
                        body:`You have been credited the sum of #${user.referral_bonus} as referral bonus`,
                        time:Date.now(),
                        to:referrer_email

                    }
                    const referral_data={
                        referred:user_data.email,
                        referrer:referrer_email,
                        time:Date.now()
                    }
                    const notRef = await addDoc(collection(db, "referrals"), referral_data);
                    const refRef = await addDoc(collection(db, "notifications"), notification_data);
                    const userRef = doc(db, "user", user.email);
                    await updateDoc(userRef, {
                        no_referrals:user.no_referrals + 1
                    });
                    localStorage.removeItem('ref');

                }
                
                await setDoc(doc(db, "user", user_data.email), data);
                localStorage.removeItem('session');
                localStorage.setItem('user-key',user_data.email);
                navigate('/dashboard')

           }
           
        //   console.log(data,user_data)
         
          
       }else{
           alert(false);
           setClicked(false)
           setError('Invalid Coupon code');
       }
        }
        catch(err){
            console.log(err)
        }
       
    }
    return ( 
        <div className="gc-main-container">
            <p className="logo">Viralclicks<span>-mine</span></p>
            <div className="gc-box" style={{transform:"translateY(0em)"}}>
                <h3>HELLO THERE!!!!</h3>
                <span>It seems this is your first time, Enter your Coupon Code to proceed </span>
                <div className="text-field">
                   <input type="text" placeholder='Enter Coupon Code' style={{width:"93%"}} value={couponCode} onChange={(e)=>{setCouponCode(e.target.value)}} required />
                </div>
                {   !clicked &&
                   <div className="btn">
                   <Button variant="contained" style={{backgroundColor:"#9900EF"}} onClick={validateCoupon}>Proceed</Button>   
                   </div>  
                }
                {   clicked &&
                   <div className="btn">
                   <Button variant="contained" style={{backgroundColor:"#520580"}}>LOADING...</Button>   
                   </div>  
                }
                {
                  <span className="error" style={{color:"red",fontWeight:"bolder"}}>{error}</span>
                } 
                
            </div>
            <div className="buy-coupon">
               <span>I don't have a coupon code?</span>
               <a href="#">Click here</a>
            </div>
        </div>
     );
}
 
export default GetCoupon;