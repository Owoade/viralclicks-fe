import Header from "./sub-components/Header";
import '../../../src/styles/upgrade.css'
import { Button } from "@mui/material";
const Upgrade = () => {
    return ( 
        <div className="upgrade-container">
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
                            <a href="#" >Notifications</a>
                            <a href="#" className="active">Upgrade</a>
                        </nav>
                    </div>

                </div>
            </div>
            {/* <div className="upgrade-box"> */}
                <div className="gc-box">
                    <span>To upgrade your package, Enter promotion code </span>
                    <div className="text-field">
                    <input type="text" placeholder='Enter promotion code' />
                    </div>
                    <div className="btn">
                        <Button variant="contained" style={{backgroundColor:"#9900EF"}}> Proceed</Button>   
                    </div>  
                </div>
                <div className="buy-coupon">
                <span>I don't have a promotion code?</span>
                <a href="#">Click here</a>
                </div>
            {/* </div> */}
            
        </div> 
     );
}
 
export default Upgrade;