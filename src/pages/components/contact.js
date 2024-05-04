import React from 'react'
import Header from './header'
import Footer from './footer'

const contactus = () => {
    return (
        <>
            <Header />
            <section className="contactus">
                <div className="custom-container">
                    <div className="contacttop">
                        <img src="\assets\importantimages\contactuslogo.svg" alt="contactimglogo" className="contactimglogo" />
                        <div className="contactexts">
                            <h4 className="contacthead">Contact Us</h4>
                            <p className="contactpara">If you have any question, suggestion or need more information, please fill out the form below. We are happy to assist you and will get back to you as soon as possible.</p>
                        </div>
                    </div>
                    <div className="contactbottom">
                        <img src="\assets\importantimages\qrcode.png" alt="contactqr" className="contactqr" />
                        <div className="contactright">
                            <div className="nameinput">
                                <input type="text" className="rightconnectinput" placeholder='Enter your name' />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='nameimg'>
                                    <path d="M12.0018 15C8.83173 15 6.0126 16.5306 4.2178 18.906C3.83151 19.4172 3.63836 19.6728 3.64468 20.0183C3.64956 20.2852 3.81716 20.6219 4.02717 20.7867C4.29899 21 4.67567 21 5.42904 21H18.5746C19.3279 21 19.7046 21 19.9764 20.7867C20.1864 20.6219 20.354 20.2852 20.3589 20.0183C20.3652 19.6728 20.1721 19.4172 19.7858 18.906C17.991 16.5306 15.1719 15 12.0018 15Z" stroke="#A3A3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0018 12C14.4871 12 16.5018 9.98528 16.5018 7.5C16.5018 5.01472 14.4871 3 12.0018 3C9.51652 3 7.5018 5.01472 7.5018 7.5C7.5018 9.98528 9.51652 12 12.0018 12Z" stroke="#A3A3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className="numberinput">
                                <input type="text" className="rightconnectinput" placeholder='+966' />
                                <img src="\assets\importantimages\flag.svg" alt="flagimg" className="flagimg" />
                            </div>
                            <textarea className='rightconnecttextarea' placeholder='Type your message'></textarea>
                            <p className="rightbottompara">By clicking {'<<submit >>'} you agree to our Privacy Policy and consent to us contacting yoy using the provided contact information.</p>
                            <button className="bluebtn">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default contactus