import '../../../styles/dashboard-index.css';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const initial=localStorage.getItem('user-key');
    const package_type = localStorage.getItem('package');
    const navigate = useNavigate();
    return ( 
        <div className="header-container">
           <header>
                <div className="container">
                    <div className="left">
                        <p className="logo-db">Viralclicks<span>-mine</span></p>
                        <span className="avatar" >{initial[0].toUpperCase()}</span>
                        {/* style={{padding:"unset",width:"40px",height:"40px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",'@media(max-width:480px)':{display:"none"}}} */}
                        <span className="package">{package_type}</span>
                    </div>

                    <div className="right">
                        <a href="#" ><span>My Profile</span> <i className="ri-user-line f-i"></i> </a>
                        <a href="#" onClick={()=>{signOut(getAuth()); navigate('/') }}><span >Logout</span> <i className="ri-logout-circle-r-line s-i"></i> </a>
                    </div>
                    
                </div>
            </header> 
        </div>
        
     );
}
 
export default Header;