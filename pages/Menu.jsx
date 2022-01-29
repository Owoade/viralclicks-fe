import Link from 'next/link'
import {useRouter} from 'next/router';
const menu = () => {
    const router = useRouter();
    return ( 
        <div className="mobile-nav">
        <div className="container">
        <i className="ri-close-line" onClick={()=>{router.back()}}></i>
          <nav>
            <Link href="/Our-Packages">Our Packages</Link>
            <Link href="/buy-coupon-code">Buy Coupon Code</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="https://viralclicks-db.vercel.app/verify">Verify coupon code</Link>
           <> <Link href="/">Home</Link></> 
            {/* <Link href="/buy-coupon-code">Buy Coupon Code</Link> */}
            
          </nav>
        </div>
        <svg width="100%" height="50%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
                    <path d="M 0,400 C 0,400 0,133 0,133 C 93.26153846153846,155.8948717948718 186.52307692307693,178.7897435897436 268,171 C 349.4769230769231,163.2102564102564 419.1692307692308,124.73589743589743 490,121 C 560.8307692307692,117.26410256410257 632.8000000000001,148.26666666666668 701,158 C 769.1999999999999,167.73333333333332 833.6307692307691,156.19743589743587 924,140 C 1014.3692307692309,123.80256410256412 1130.676923076923,102.94358974358975 1221,101 C 1311.323076923077,99.05641025641025 1375.6615384615384,116.02820512820512 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#9900ef88" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
                    <path d="M 0,400 C 0,400 0,266 0,266 C 86.32564102564103,259.12307692307695 172.65128205128207,252.24615384615385 243,249 C 313.34871794871793,245.75384615384615 367.72051282051285,246.1384615384615 436,245 C 504.27948717948715,243.8615384615385 586.4666666666666,241.2 679,251 C 771.5333333333334,260.8 874.4128205128206,283.0615384615385 970,280 C 1065.5871794871794,276.9384615384615 1153.8820512820512,248.55384615384614 1231,242 C 1308.1179487179488,235.44615384615386 1374.0589743589744,250.72307692307692 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#9900efff" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
                </svg>
      </div>
     );
}
 
export default menu;
