import Footer from "./components/Footer";
import Link   from 'next/link'
import Header from "./components/Header";
const How_it_works = () => {
    return ( 
        <div className="op-parent-container">
            <div className="hero-container-2">
              <Header />
              <div className="overlay">
                  
              </div>
               <div className="hero-text">
                   <h1>Our Packages</h1>
               </div>
            </div>
           <div className="all-packages">
               <div className="container grid">
                   <div className="package">
                       <h3>STARTER</h3>
                       <h1>#3,000</h1>
                       <section>
                           <span> <strong> Registration</strong> #3,000</span>
                           <span> <strong>Welcome Bonus </strong> #300</span>
                           <span> <strong> Affiliate Bonus</strong> #1,500</span>
                           <span> <strong> Second level Affiliate Bonus</strong> #100</span>
                           <span> <strong>Mine Duration </strong> 1 hour</span>
                           <span> <strong>Mine Earning </strong> #10</span>
                           <span> <strong>Daily Earning </strong> #240</span>
                           <span> <strong>Weekly Earning</strong> #1,680</span>
                           <span> <strong>Monthly Earning</strong> #11,760</span>

                       </section>
                   </div>
                   <div className="package">
                       <h3>PREMIUM</h3>
                       <h1>#5,000</h1>
                       <section>
                           <span> <strong> Registration</strong>  #5,000</span>
                           <span> <strong>Welcome Bonus </strong>  #500</span>
                           <span> <strong> Affiliate Bonus</strong> #2,500</span>
                           <span> <strong> Second level Affiliate Bonus</strong>   #200</span>
                           <span> <strong>Mine Duration </strong> Hourly</span>
                           <span> <strong>Mine Earning </strong> #40</span>
                           <span> <strong>Daily Earning </strong> #960</span>
                           <span> <strong>Weekly Earning</strong> #6,720</span>
                           <span> <strong>Monthly Earning</strong> #26,880</span>

                       </section>
                   </div>
                   <div className="package">
                       <h3>PREMIUM PRO</h3>
                       <h1>#10,000</h1>
                       <section>
                           <span> <strong> Registration</strong>  #10,000</span>
                           <span> <strong>Welcome Bonus </strong>  #1,000</span>
                           <span> <strong> Affiliate Bonus</strong> #5,000</span>
                           <span> <strong> Second level Affiliate Bonus</strong> #400</span>
                           <span> <strong>Mine Duration </strong> Hourly</span>
                           <span> <strong>Daily Earning </strong> #1,500</span>
                           <span> <strong>Weekly Earning</strong> #10,500</span>
                           <span> <strong>Monthly Earning</strong> #42,000</span>

                       </section>
                   </div>
                   <div className="package">
                       <h3>ELITE</h3>
                       <h1>#20,000</h1>
                       <section>
                           <span> <strong> Registration</strong> #20,000</span>
                           <span> <strong>Welcome Bonus </strong> #1,500</span>
                           <span> <strong> Affiliate Bonus</strong> #10,000</span>
                           <span> <strong> Second level Affiliate Bonus</strong> #800</span>
                           <span> <strong>Mine Duration </strong> Hourly</span>
                           <span> <strong>Daily Earning </strong> #3,200</span>
                           <span> <strong>Weekly Earning</strong> #22,400</span>
                           <span> <strong>Monthly Earning</strong> #89,600</span>

                       </section>
                   </div>
                   <div className="package">
                       <h3>EXPERT</h3>
                       <h1>#30,000</h1>
                       <section>
                           <span> <strong> Registration</strong> #30,000</span>
                           <span> <strong>Welcome Bonus </strong> #2,000</span>
                           <span> <strong> Affiliate Bonus</strong> #15,000</span>
                           <span> <strong> Second level Affiliate Bonus</strong> #1,000</span>
                           <span> <strong>Mine Duration </strong> 24 hours</span>
                           <span> <strong>Daily Earning </strong> #4,000</span>
                           <span> <strong>Weekly</strong> #28,000</span>
                           <span> <strong>Monthly Earning</strong> #112,000</span>

                       </section>
                   </div>
                   <div className="package">
                       <h3>WORKER</h3>
                       <h1>#50,000</h1>
                       <section>
                           <span> <strong> Registration</strong>  #50,000</span>
                           <span> <strong>Welcome Bonus </strong>  #2,500</span>
                           <span> <strong> Affiliate Bonus</strong> #25,000</span>
                           <span> <strong> Second level Affiliate Bonus</strong> #1,200</span>
                           <span> <strong>Mine Duration </strong> 24 hours</span>
                           <span> <strong>Daily Earning </strong> #6,000</span>
                           <span> <strong>Weekly Earning</strong> #42,000</span>
                           <span> <strong>Monthly Earning</strong> #168,000</span>

                       </section>
                   </div>
               </div>
               <a href="/buy-coupon-code" className="btn">Buy Coupon Code</a>
           </div>
        
                  
                
           
            <Footer />
        </div>
     );
}
 
export default How_it_works;
