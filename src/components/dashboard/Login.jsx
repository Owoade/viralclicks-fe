import { auth, db } from './firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { doc, setDoc, getDocs, collection,query } from "firebase/firestore";
import { useState, useEffect } from 'react';
import queryString from 'query-string';


const Login = () => {
  localStorage.removeItem('ref');
  const referral= queryString.parse(window.location.search);
  console.log(referral.ref);
  const users=[];
  const navigate = useNavigate();
  const signIn = async () => {
    const q = query(collection(db, "user"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const user={info:doc.data()}
      users.push(user)
    });
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((re) => {
      localStorage.setItem('session',JSON.stringify(re._tokenResponse));
      localStorage.setItem('user-key',re._tokenResponse.email);
      if(users.map((user)=>(user.info.email)).includes(re._tokenResponse.email)){
        navigate('dashboard');
      }else{
        navigate('coupon');
        localStorage.setItem( "ref", referral.ref != undefined ? referral.ref : null);
      }
      
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <>
      <span>Hello there</span>
      <button onClick={signIn}>Log in</button>
    </>
  );
}

export default Login;