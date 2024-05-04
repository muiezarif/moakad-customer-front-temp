import React from 'react'
import Header from './header'
import Footer from './footer'
import Link from 'next/link'


const clinics = () => {
    return (
        <>
            <Header />
            <section className="clinicsmain">
                <div className="custom-container">
                    <div className="topclinic">
                        <div className="ourclinics">
                            <h4 className="clinichead">Our Clinics</h4>
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
                    <div className="clinicscardmain">
                        <Link href="/clinicprofile"><div className="cliniccard">
                            <div className="cliniccardimg">
                                <img src="\assets\dummyimages\clinic.png" alt="innerclinicimg" className="innerclinicimg" />
                            </div>
                            <h6 className="cliniccardhead">
                                Al-Rahma Central Hospital
                            </h6>
                            <p className="clinicbluepara">18 Specialty - 77 Doctor</p>
                            <div className="raitingmain">
                                <div className="raitingstars">
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                </div>
                                <p className="raitingpara">(4.5)</p>
                            </div>
                        </div></Link>
                        <div className="cliniccard">
                            <div className="cliniccardimg">
                                <img src="\assets\dummyimages\clinic.png" alt="innerclinicimg" className="innerclinicimg" />
                            </div>
                            <h6 className="cliniccardhead">
                                Al-Rahma Central Hospital
                            </h6>
                            <p className="clinicbluepara">18 Specialty - 77 Doctor</p>
                            <div className="raitingmain">
                                <div className="raitingstars">
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                </div>
                                <p className="raitingpara">(4.5)</p>
                            </div>
                        </div>
                        <div className="cliniccard">
                            <div className="cliniccardimg">
                                <img src="\assets\dummyimages\clinic.png" alt="innerclinicimg" className="innerclinicimg" />
                            </div>
                            <h6 className="cliniccardhead">
                                Al-Rahma Central Hospital
                            </h6>
                            <p className="clinicbluepara">18 Specialty - 77 Doctor</p>
                            <div className="raitingmain">
                                <div className="raitingstars">
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                </div>
                                <p className="raitingpara">(4.5)</p>
                            </div>
                        </div>
                        <div className="cliniccard">
                            <div className="cliniccardimg">
                                <img src="\assets\dummyimages\clinic.png" alt="innerclinicimg" className="innerclinicimg" />
                            </div>
                            <h6 className="cliniccardhead">
                                Al-Rahma Central Hospital
                            </h6>
                            <p className="clinicbluepara">18 Specialty - 77 Doctor</p>
                            <div className="raitingmain">
                                <div className="raitingstars">
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                </div>
                                <p className="raitingpara">(4.5)</p>
                            </div>
                        </div>
                        <div className="cliniccard">
                            <div className="cliniccardimg">
                                <img src="\assets\dummyimages\clinic.png" alt="innerclinicimg" className="innerclinicimg" />
                            </div>
                            <h6 className="cliniccardhead">
                                Al-Rahma Central Hospital
                            </h6>
                            <p className="clinicbluepara">18 Specialty - 77 Doctor</p>
                            <div className="raitingmain">
                                <div className="raitingstars">
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                </div>
                                <p className="raitingpara">(4.5)</p>
                            </div>
                        </div>
                        <div className="cliniccard">
                            <div className="cliniccardimg">
                                <img src="\assets\dummyimages\clinic.png" alt="innerclinicimg" className="innerclinicimg" />
                            </div>
                            <h6 className="cliniccardhead">
                                Al-Rahma Central Hospital
                            </h6>
                            <p className="clinicbluepara">18 Specialty - 77 Doctor</p>
                            <div className="raitingmain">
                                <div className="raitingstars">
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                </div>
                                <p className="raitingpara">(4.5)</p>
                            </div>
                        </div>
                        <div className="cliniccard">
                            <div className="cliniccardimg">
                                <img src="\assets\dummyimages\clinic.png" alt="innerclinicimg" className="innerclinicimg" />
                            </div>
                            <h6 className="cliniccardhead">
                                Al-Rahma Central Hospital
                            </h6>
                            <p className="clinicbluepara">18 Specialty - 77 Doctor</p>
                            <div className="raitingmain">
                                <div className="raitingstars">
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                </div>
                                <p className="raitingpara">(4.5)</p>
                            </div>
                        </div>
                        <div className="cliniccard">
                            <div className="cliniccardimg">
                                <img src="\assets\dummyimages\clinic.png" alt="innerclinicimg" className="innerclinicimg" />
                            </div>
                            <h6 className="cliniccardhead">
                                Al-Rahma Central Hospital
                            </h6>
                            <p className="clinicbluepara">18 Specialty - 77 Doctor</p>
                            <div className="raitingmain">
                                <div className="raitingstars">
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                </div>
                                <p className="raitingpara">(4.5)</p>
                            </div>
                        </div>
                        <div className="cliniccard">
                            <div className="cliniccardimg">
                                <img src="\assets\dummyimages\clinic.png" alt="innerclinicimg" className="innerclinicimg" />
                            </div>
                            <h6 className="cliniccardhead">
                                Al-Rahma Central Hospital
                            </h6>
                            <p className="clinicbluepara">18 Specialty - 77 Doctor</p>
                            <div className="raitingmain">
                                <div className="raitingstars">
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                    <img src="\assets\importantimages\star.svg" alt="starimg" className="starimg" />
                                </div>
                                <p className="raitingpara">(4.5)</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default clinics