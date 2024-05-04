import React from 'react'

const Connected = () => {
    return (
        <section className="connected">
            <div className="custom-container">
                <div className="innerconnected">
                    <div className="connectedleft">
                        <h5 className="connectedhead">Stay connected with our mobile app.</h5>
                        <p className="connectedpara">Download our user-friendly mobile app to access your medical information, book appointments, and receive personalized health recommendations on the go.</p>
                        <div className="connectedbtns">
                            <button className="connectbtn">
                                <img src="\assets\importantimages\applestore.svg" alt="connectimg" className="connectimg" />
                                App Store
                            </button>
                            <button className="connectbtn">
                                <img src="\assets\importantimages\playstore.svg" alt="connectimg" className="connectimg" />
                                Google Play
                            </button>
                        </div>
                        <div className="bottombtnmain">
                            <button className="bottombtn">Mobile app</button>
                            <button className="bottombtn">IOS</button>
                            <button className="bottombtn">Android</button>
                        </div>
                        <img src="\assets\importantimages\Logoform.svg" alt="leftlogoimg" className="leftlogoimg" />
                        <img src="\assets\importantimages\Device.png" alt="mobileimg" className="mobileimg" />
                    </div>
                    <div className="connectedright">
                        <h4 className="rightconnecthead">Enter your details <br />
                            and we will get back to you.</h4>
                        <p className="rightconnectpara">If you have any question, suggestion or need more information, please fill out the form below. We are happy to assist you and will get back to you as soon as possible.</p>
                        <input type="text" className="rightconnectinput" placeholder='Enter your name' />
                        <input type="text" className="rightconnectinput" placeholder='Enter your mobile phone' />
                        <textarea className='rightconnecttextarea' placeholder='Type your message'></textarea>
                        <p className="rightbottompara">By clicking {'<<submit >>'} you agree to our Privacy Policy and consent to us contacting yoy using the provided contact information.</p>
                        <button className="bluebtn">Submit</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="425" height="400" viewBox="0 0 425 400" fill="none" className='logoblue'>
                            <path opacity="0.7" d="M220.266 412L0 250.594V73.6216L220.383 236.315L533 0V183.41L220.266 412Z" fill="#DEE6FF" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Connected