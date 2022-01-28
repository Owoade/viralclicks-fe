import Link from 'next/link';
const Header = () => {
    return ( 
        <header>
        <div className="container flex space-between">
            <p className="logo">Viralclicks<span>-mine</span></p>
            <nav>
                <a href="/">Home</a>
                <a href="/Our-Packages">Our Packages</a>
                <a href="/how-it-works">How It Works</a>
                <a href="/buy-coupon-code">Buy Coupon Code</a>
                {/* <a href="https://viralclicks-db.vercel.app/verify">Verify Coupon Code</a> */}
            </nav>
            <div className="btns">
                <a href="#" className="btn">Get started</a>
            </div>
           <Link href="/Menu"><i className="ri-menu-line"></i></Link> 
        </div>
    </header> 
     );
}
 
export default Header;
