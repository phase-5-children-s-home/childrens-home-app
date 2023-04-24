import React from "react";
import'./footer.css';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Support</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/donationplan">
                            <p>Donation Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource Centre</p>
                        </a>
                        <a href="/resources">
                            <p>Testimonials</p>
                        </a>
                        <a href="/employer">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="/employer">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="https://childrens-home-app.vercel.app/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/https://childrens-home-app.vercel.app/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Coming Soon</h4>
              </div>
            </div>
            
            <hr></hr>

            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} LetsCharity. All Rights Reserved.
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>

        </div>
     </div>
    )
}

export default Footer;