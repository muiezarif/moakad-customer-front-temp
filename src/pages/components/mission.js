import React from 'react'

const Mission = () => {
    return (
        <section className="mainmission">
            <div className="custom-container">
                <div className="innermission">
                    <div className="missioncardleft">
                        <img src="\assets\importantimages\cardlogoshade.png" alt="missioncardleftlogo" className="missioncardleftlogo" />
                        <h4 className="missioncardlefthead">60K+</h4>
                        <p className="missioncardleftpara"><span className="boldpara">Regular customers</span> use the services of our clinics</p>
                        <div className="missioncardleftimages">
                            <div className="missioncardimg imgone">
                                <img src="\assets\dummyimages\cardone.svg" alt="innercardimg" className="innercardimg" />
                            </div>
                            <div className="missioncardimg imgtwo">
                                <img src="\assets\dummyimages\cardtwo.svg" alt="innercardimg" className="innercardimg" />
                            </div>
                            <div className="missioncardimg imgthree">
                                <img src="\assets\dummyimages\cardthree.svg" alt="innercardimg" className="innercardimg" />
                            </div>
                            <div className="missioncardimg imgfour">
                                <img src="\assets\dummyimages\cardfour.svg" alt="innercardimg" className="innercardimg" />
                            </div>
                        </div>
                    </div>
                    <div className="missioncardright">
                        <h6 className="missioncardrighthead">Our mission</h6>
                        <p className="missioncardrightpara">We aim to provide high-quality and affordable healthcare services to ensure the well-being and health of every patient.</p>
                        <p className="missioncardrightpara">Our goal is to bring together qualified staff. advanced treatment methods, and a friendly, individualized approach to make healthcare accessible and understandable to all.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission