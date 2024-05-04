import Link from 'next/link'
import React from 'react'

const Services = () => {
    return (
        <section className="servicesmain">
            <div className="custom-container">
                <div className="innerservices">
                    <Link href="/service" className="servicearrowbtn">
                        <span className="innerbtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M5 15L15 5M15 5H8.33333M15 5V11.6667" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </Link>
                    <div className="servicescontent">
                        <h4 className="serviceshead">Explore our services</h4>
                        <div className="servicesparas">
                            <p className="servicesparaleft">
                                The clinic provides services in the following areas: gynecology, therapy, urology, neurology, gastroenterology, oncology, endocrinology, cardiology and many others
                            </p>
                            <p className="servicespararight">
                                Explore the diversity of medical services we offer at our clinic, No matter your medical need, we’re here to provide you with high-quality care and a personalized approach.
                            </p>
                        </div>
                        <div className="servicescardsmain">
                            <Link href="/service">
                            <div className="servicecard">
                                <div className="servicecardimg">
                                    <img src="\assets\dummyimages\serviceone.png" alt="innerservicesimg" className="innerservicesimg" />
                                    <button className="servicebtn">Services</button>
                                    <button className="arrowbtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M5.33203 15L15.332 5M15.332 5H8.66536M15.332 5V11.6667" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="servicecardpara">Gynecology and obstetrics</p>
                            </div>
                            </Link>
                            <div className="servicecard">
                                <div className="servicecardimg">
                                    <img src="\assets\dummyimages\servicetwo.png" alt="innerservicesimg" className="innerservicesimg" />
                                    <button className="servicebtn">Services</button>
                                    <button className="arrowbtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M5.33203 15L15.332 5M15.332 5H8.66536M15.332 5V11.6667" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="servicecardpara">Gynecology and obstetrics</p>
                            </div>
                            <div className="servicecard">
                                <div className="servicecardimg">
                                    <img src="\assets\dummyimages\servicethree.png" alt="innerservicesimg" className="innerservicesimg" />
                                    <button className="servicebtn">Services</button>
                                    <button className="arrowbtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M5.33203 15L15.332 5M15.332 5H8.66536M15.332 5V11.6667" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="servicecardpara">Gynecology and obstetrics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services