import Link from 'next/link';
import Footer from './components/Footer';
import Header from './components/Header'
const Home = () => {
    return (
        <div className="index-parent-container">
            <div className="hero-container">
                <Header />
                <div className="hero-text">
                    <h1>THE BEST MINING PLATFORM</h1>
                    <p>Viralclicks is a well structured and registered trading platform created solely for your wealth creation.</p>
                    <a href="https://viralclicks-db.vercel.app" class="btn">Start Mining</a>
                </div>
                <svg width="100%" height="50%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
                    <path d="M 0,400 C 0,400 0,133 0,133 C 93.26153846153846,155.8948717948718 186.52307692307693,178.7897435897436 268,171 C 349.4769230769231,163.2102564102564 419.1692307692308,124.73589743589743 490,121 C 560.8307692307692,117.26410256410257 632.8000000000001,148.26666666666668 701,158 C 769.1999999999999,167.73333333333332 833.6307692307691,156.19743589743587 924,140 C 1014.3692307692309,123.80256410256412 1130.676923076923,102.94358974358975 1221,101 C 1311.323076923077,99.05641025641025 1375.6615384615384,116.02820512820512 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#9900ef88" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
                    <path d="M 0,400 C 0,400 0,266 0,266 C 86.32564102564103,259.12307692307695 172.65128205128207,252.24615384615385 243,249 C 313.34871794871793,245.75384615384615 367.72051282051285,246.1384615384615 436,245 C 504.27948717948715,243.8615384615385 586.4666666666666,241.2 679,251 C 771.5333333333334,260.8 874.4128205128206,283.0615384615385 970,280 C 1065.5871794871794,276.9384615384615 1153.8820512820512,248.55384615384614 1231,242 C 1308.1179487179488,235.44615384615386 1374.0589743589744,250.72307692307692 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#9900efff" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
                </svg>
            </div>
            <div className="about-container">
                <div className="container flex space-between">
                    <img src="img/0.png" alt="" />
                    <div className="about-text">
                        <h2>WHO WE ARE?</h2>
                        <div class="progress-container">
                            <div class="progress"></div>
                        </div>
                        <p>
                            <strong> VIRALCLICKS</strong> : Is a well structured and registered trading company with a team of business gurus in different financial sectors such as, Foreign Exchange, Crypto mining, synthetic indices, Gold mining, Real estate and some other offline businesses.
                        </p>
                        <p>We have come together to correct all the errors of many scam investment platforms. We also come to achieve one common goal of eradicating poverty Nationwide</p>

                    </div>
                </div>
                <div className="container flex-reverse space-between">
                <img src="img/1.png" alt="" />
                    <div className="about-text">
                        <h2>MISSION & VISION</h2>
                        <div class="progress-container">
                            <div class="progress"></div>
                        </div>
                        <p>
                            <strong>MISSION</strong> : Our mission is to add value with active portfolio management to help our clients reach their long-term financial goals. We achieve this through our investment strategies, adhering to our values and investment principles, and offering employees a challenging and rewarding place to build a career.
                        </p>
                        <p><strong>VISION</strong> : We have come together to correct all the errors of many scam investment platforms. We also come to achieve one common goal of eradicating poverty Nationwide</p>

                    </div>
                  
                </div>
            </div>
            <div className="package-container">
                <div className="container">
                    <h2 className="package-header-text">OUR PACKAGES</h2>
                    <div class="progress-container">
                        <div class="progress"></div>
                    </div>
                    <div className="packages grid">
                        <div className="package">
                            <strong>STARTER </strong>
                            <h2>#3,000</h2>
                            <a href="#">Read More...</a>
                        </div>
                        <div className="package">
                            <strong>PREMIUM</strong>
                            <h2>#5,000</h2>
                            <a href="#">Read More...</a>
                        </div>
                        <div className="package">
                            <strong>PREMIUM PRO</strong>
                            <h2>#10,000</h2>
                            <a href="#">Read More...</a>
                        </div>
                        <div className="package">
                            <strong>ELITE</strong>
                            <h2>#20,000</h2>
                            <a href="#">Read More...</a>
                        </div>
                        <div className="package">
                            <strong>EXPERT</strong>
                            <h2>#30,000</h2>
                            <a href="#">Read More...</a>
                        </div>
                        <div className="package">
                            <strong>WORKER</strong>
                            <h2>#50,000</h2>
                            <a href="#">Read More...</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="newsletter-container">
                <img src="img/1.svg" alt="" />
                <div className="newsletter">
                    <div className="container">
                        <h2>Subsribe to Our Newsletter</h2>
                        <div className="form">
                            <input type="text" placeholder="Enter E-mail" />
                            <button><i class="ri-send-plane-2-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faqs-container">
                <h2>VIRALCLICKS FAQs</h2>
                <div class="progress-container">
                        <div class="progress"></div>
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
                    <div className="extra-question">
                    <h3>My question is not here</h3>
                    <a href="#" className="btn">Ask your question</a>
                    </div>
                </div>
            </div>
           <Footer />

        </div>

    )

}
export default Home;

