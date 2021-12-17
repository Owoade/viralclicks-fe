import Footer from "./components/Footer";
import Header from "./components/Header";
const How_it_works = () => {
    return ( 
        <div className="hiw-parent-container">
            <div className="hero-container-2">
                <Header />
                <div className="overlay"></div>
                <div className="hero-text">
                    <h1>How It Works</h1>
                </div>
              
            </div>
            <div className="faqs">
                    <div className="container">
                        <div className="faq">
                            <details>
                                <summary>How does ViralClicks work? </summary>
                                <span className="answer">
                                    Read about it on how does it work section on our website
                                </span>

                            </details>
                        </div>
                        <div className="faq">
                            <details>
                                <summary>How do I earn on ViralClick? </summary>
                                <span className="answer">
                                    You earn through 4 different ways , Welcome bonus, Affiliate bonus, Mine earning and our ViralPost.
                                </span>

                            </details>
                        </div>
                        <div className="faq">
                            <details>
                                <summary> How does ViralClicks generate profit to pay miners?</summary>
                                <span className="answer">
                                    We ViralClicks generate profit through different ways.. Google ads revenue, crypto trading and Agriculture
                                    Our Group has different offline businesses, we are also major distributor to some companies in Nigeria.

                                </span>

                            </details>
                        </div>
                        <div className="faq">
                            <details>
                                <summary>How much do I earn Dailymotion on ViralClicks? </summary>
                                <span className="answer">
                                Your earning potential depends on the package you choose on our website.
                                </span>

                            </details>
                        </div>
                        <div className="faq">
                            <details>
                                <summary>How do I withdraw? </summary>
                                <span className="answer">
                                Once you attain the withdrawal threshold, you can place withdrawal and receive payment before 24hrs
                                </span>

                            </details>
                        </div>
                        <div className="faq">
                            <details>
                                <summary>Who can join ViralClick ? </summary>
                                <span className="answer">
                                Anyone who has access to the Internet and needs financial stability can queue in.
                                </span>

                            </details>
                        </div>
                    </div>
                    
                </div>
            <Footer />
        </div>
     );
}
 
export default How_it_works;