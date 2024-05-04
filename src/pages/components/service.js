import React from 'react'
import Header from './header'
import Footer from './footer'
import Link from 'next/link'

const Ourservices = () => {
    return (
        <>
            <Header />
            <section className="ourservices">
                <div className="custom-container">
                    <div className="topclinic">
                        <div className="ourclinics">
                            <h4 className="clinichead">Our Services</h4>
                            <button className="filterbtn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M2.5 6.66797L12.5 6.66797M12.5 6.66797C12.5 8.04868 13.6193 9.16797 15 9.16797C16.3807 9.16797 17.5 8.04868 17.5 6.66797C17.5 5.28726 16.3807 4.16797 15 4.16797C13.6193 4.16797 12.5 5.28726 12.5 6.66797ZM7.5 13.3346L17.5 13.3346M7.5 13.3346C7.5 14.7153 6.38071 15.8346 5 15.8346C3.61929 15.8346 2.5 14.7153 2.5 13.3346C2.5 11.9539 3.61929 10.8346 5 10.8346C6.38071 10.8346 7.5 11.9539 7.5 13.3346Z" stroke="#0024B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Filters</span>

                            </button>
                        </div>
                        <p className="ourclinicspara">
                            Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas
                        </p>
                    </div>
                    <div className="servicescardsmain">
                        <div className="servicescardtop">
                           <Link href="/ournutritionist">
                           <div className="servicecard">
                                <div className="servicecardimg">
                                    <img src="\assets\servicesdummycards\cardone.png" alt="innerservicesimg" className="innerservicesimg" />
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
                                    <img src="\assets\servicesdummycards\cardtwo.png" alt="innerservicesimg" className="innerservicesimg" />
                                    <button className="servicebtn">Services</button>
                                    <button className="arrowbtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M5.33203 15L15.332 5M15.332 5H8.66536M15.332 5V11.6667" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="servicecardpara">Dentistry and orthodontics</p>
                            </div>
                            <div className="servicecard">
                                <div className="servicecardimg">
                                    <img src="\assets\servicesdummycards\cardthree.png" alt="innerservicesimg" className="innerservicesimg" />
                                    <button className="servicebtn">Services</button>
                                    <button className="arrowbtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M5.33203 15L15.332 5M15.332 5H8.66536M15.332 5V11.6667" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="servicecardpara">Cosmetology and dermatology</p>
                            </div>
                        </div>
                        <div className="servicescardmid">
                        <div className="servicecard">
                                <div className="servicecardimg">
                                    <img src="\assets\servicesdummycards\cardfour.png" alt="innerservicesimg" className="innerservicesimg" />
                                    <button className="servicebtn">Services</button>
                                    <button className="arrowbtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M5.33203 15L15.332 5M15.332 5H8.66536M15.332 5V11.6667" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="servicecardpara">Dentistry and orthodontics</p>
                            </div>
                            <div className="servicecard">
                                <div className="servicecardimg">
                                    <img src="\assets\servicesdummycards\cardfive.png" alt="innerservicesimg" className="innerservicesimg" />
                                    <button className="servicebtn">Services</button>
                                    <button className="arrowbtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M5.33203 15L15.332 5M15.332 5H8.66536M15.332 5V11.6667" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="servicecardpara">Cosmetology and dermatology</p>
                            </div>
                        </div>
                        <div className="servicescardbottom">
                            <div className="servicecardleft">
                            <div className="servicecard">
                                <div className="servicecardimg">
                                    <img src="\assets\servicesdummycards\cardsix.png" alt="innerservicesimg" className="innerservicesimg" />
                                    <button className="servicebtn">Services</button>
                                    <button className="arrowbtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M5.33203 15L15.332 5M15.332 5H8.66536M15.332 5V11.6667" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="servicecardpara">Cosmetology and dermatology</p>
                            </div>
                            <div className="servicecard">
                                <div className="servicecardimg">
                                    <img src="\assets\servicesdummycards\cardseven.png" alt="innerservicesimg" className="innerservicesimg" />
                                    <button className="servicebtn">Services</button>
                                    <button className="arrowbtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M5.33203 15L15.332 5M15.332 5H8.66536M15.332 5V11.6667" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="servicecardpara">Cosmetology and dermatology</p>
                            </div>
                            </div>
                            <div className="servicecard">
                                <div className="servicecardimg">
                                    <img src="\assets\servicesdummycards\cardeight.png" alt="innerservicesimg" className="innerservicesimg" />
                                    <button className="servicebtn">Services</button>
                                    <button className="arrowbtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M5.33203 15L15.332 5M15.332 5H8.66536M15.332 5V11.6667" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="servicecardpara">Cosmetology and dermatology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Ourservices