import Header from "./sub-components/Header";
import Footer from './sub-components/Footer';
import { db } from './firebase/firebase';
import { doc, setDoc, getDocs, collection, query, addDoc, where, updateDoc } from "firebase/firestore";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
const Index = (props) => {
    const user_key = localStorage.getItem('user-key');
    const [user_id, setId] = useState('')
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState(null);
    const [t_amt, setTamt] = useState();
    const [mine_amt, setMamt] = useState();
    const [ref_amt, setRamt] = useState();
    const [ref, setRef] = useState();
    const [shares, setShares] = useState();
    const [mines, setMines] = useState();
    // const [min,setMin]=useState();
    // const [mine_amt,setMamt]=useState();
    const assignPackageProps = (package_type) => {
        var amount = '';
        var mine_amount = '';
        var mine_duration = '';
        var referral_bonus='';
        switch (package_type) {
            case "starter":
                amount = 300;
                mine_amount = 10;
                mine_duration = 1;
                referral_bonus=1500;
                break;

            case "premium":
                amount = 500;
                mine_amount = 40;
                mine_duration = 1;
                referral_bonus=2500;
                break;

            case "premium pro":
                amount = 1000;
                mine_amount = 1500;
                mine_duration = 24;
                referral_bonus=5000
                break;

            case "elite":
                amount = 1500;
                mine_amount = 3200;
                mine_duration = 24;
                referral_bonus=10000
                break;

            case "expert":
                amount = 2000;
                mine_amount = 4000;
                mine_duration = 24;
                referral_bonus=15000
                break;

            case "worker":
                amount = 2500;
                mine_amount = 6000;
                mine_duration = 24;
                referral_bonus=25000
                break;
        }
        return { amount, mine_amount, mine_duration,referral_bonus }
    }
    useEffect(() => {
        if (user == null) {
            (async () => {
                const q = query(collection(db, "user"), where("email", "==", user_key));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    setUser(doc.data())
                    setId(doc.id)
                    localStorage.setItem('user_id', user);
                });
                
                console.log(user)

            })();

        }
        if (user != null) {
            localStorage.setItem('package', user.package);
            // localStorage.setItem('user_id', user_id);
            console.log(user_id)
            if (user.no_logins == 0) {
                (async () => {
                    setTamt(assignPackageProps(user.package).amount)
                    setMamt(0)
                    setRamt(0)
                    setRef(0);
                    setMines(0)
                    setShares(0);

                    const userRef = doc(db, "user", user_key);
                    await updateDoc(userRef, {
                        total_balance: assignPackageProps(user.package).amount,
                        referal_balance: 0,
                        mine_balance: 0,
                        mine_earning: assignPackageProps(user.package).mine_amount,
                        mine_duration: assignPackageProps(user.package).mine_duration,
                        referral_bonus:assignPackageProps(user.package).referral_bonus,
                        no_logins: user.no_logins + 1,
                        no_referrals: 0,
                        no_shares: 0,
                        no_mines: 0,
                        mining:false
                    });
                    const notification_data = {
                        type: "earnings",
                        subject: "welcome to Viralclicks mine",
                        body: `You have just been credited with an amount of #${assignPackageProps(user.package).amount}`,
                        time: Date.now(),
                        to: user_key
                    }
                    const docRef = await addDoc(collection(db, "notifications"), notification_data)
                })()
            }


            if (user.no_logins > 0) {
                (async () => {
                    const q = query(collection(db, "user"), where("email", "==", user_key));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        setUser(doc.data())
                        setId(doc.id)
                    });
                    setRef(user.no_referrals);
                    setMines(user.no_mines);
                    setShares(user.no_shares);
                    setTamt((user.referral_bonus * user.no_referrals) + (user.mine_balance) + assignPackageProps(user.package).amount );
                    setRamt(user.referral_bonus * user.no_referrals)
                    setMamt(user.mine_balance);

                })()
            }
        }
    }, [user]);

    return (
        user && (<div className="index-parent-container">
            <Header props={{ initial: user_key[0].toUpperCase(), package: user.package }} />
            <div className="base-nav">
                <div className="container">
                    <div className="scroll-wrapper">
                        <nav>
                            <a href="#" className="active">Overview</a>
                            <Link to="/mine">Mine</Link>
                            <Link to="/referral" >Referals</Link>
                            <a href="#">Share & Earn</a>
                            <a href="#">Withdraw</a>
                            <a href="#">Marketplace</a>
                            <Link to="/notifications">Notifications</Link>
                            <a href="#">Upgrade</a>
                        </nav>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="cards-container grid">
                    <div className="card">
                        <h3>Total Amount</h3>
                        <h1><span>₦</span> {t_amt}</h1>
                    </div>
                    <div className="card">
                        <h3>Mine Amount</h3>
                        <h1><span>₦</span> {mine_amt}</h1>
                    </div>
                    <div className="card">
                        <h3>Referral Bonus</h3>
                        <h1><span>₦</span>{ref_amt}</h1>
                    </div>
                    <div className="card">
                        <h3>Referrals</h3>
                        <h1>{ref}</h1>
                    </div>
                    <div className="card">
                        <h3>Mines</h3>
                        <h1>{mines}</h1>
                    </div>
                    <div className="card">
                        <h3>Shares</h3>
                        <h1>{shares}</h1>
                    </div>

                </div>
            </div>
            <div className="analytics">
                <div className="container">
                    <div className="pie">
                        <CircularProgressbar value={30} text={`${20}%`} styles={buildStyles({ pathColor: "#9900EF", textColor: "black", pathTransitionDuration: 0.15 })} strokeWidth={5} />
                        <span>Daily Mine Progress</span>
                    </div>
                    <div className="pie">
                        <CircularProgressbar value={30} text={`${20}%`} styles={buildStyles({ pathColor: "#b853f3", textColor: "black" })} strokeWidth={5} />
                        <span>Weekly Mine Progress</span>
                    </div>
                    <div className="pie">
                        <CircularProgressbar value={30} text={`${20}%`} styles={buildStyles({ pathColor: "#9900EF", textColor: "black" })} strokeWidth={5} />
                        <span>Monthly Mine Progress</span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>)


    );
}

export default Index;