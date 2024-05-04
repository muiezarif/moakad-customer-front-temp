import React, { useState } from 'react'
import Header from './header'
import Footer from './footer'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Abouttab from './abouttab';
import Doctorslist from './doctorslist';
import Doctorreview from './doctorreview';
import Link from 'next/link';
import Ourserviceslist from './ourserviceslist';

const Clinicprofile = () => {
    const [key, setKey] = useState('About');
    return (
        <>
            <Header />
            <section className="clinicprofile">
                <div className="custom-container">
                    <div className="clinicprofiletop">
                        <div className="topaddress">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M6.66667 14.1682H13.3333M9.18141 2.30492L3.52949 6.70086C3.15168 6.99471 2.96278 7.14163 2.82669 7.32563C2.70614 7.48862 2.61633 7.67224 2.56169 7.86746C2.5 8.08785 2.5 8.32717 2.5 8.8058V14.8349C2.5 15.7683 2.5 16.235 2.68166 16.5916C2.84144 16.9052 3.09641 17.1601 3.41002 17.3199C3.76654 17.5016 4.23325 17.5016 5.16667 17.5016H14.8333C15.7668 17.5016 16.2335 17.5016 16.59 17.3199C16.9036 17.1601 17.1586 16.9052 17.3183 16.5916C17.5 16.235 17.5 15.7683 17.5 14.8349V8.8058C17.5 8.32717 17.5 8.08785 17.4383 7.86746C17.3837 7.67224 17.2939 7.48862 17.1733 7.32563C17.0372 7.14163 16.8483 6.99471 16.4705 6.70086L10.8186 2.30492C10.5258 2.07721 10.3794 1.96335 10.2178 1.91959C10.0752 1.88097 9.92484 1.88097 9.78221 1.91959C9.62057 1.96335 9.47418 2.07721 9.18141 2.30492Z" stroke="#8F8FA6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="topaddresspara">
                                Clinics
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="topaddresspara">
                                Al-Rahma Hospital
                            </p>
                        </div>
                        <div className="bookmain">
                            <div className="bookmainleft">
                                <div className="bookleftimg">
                                    <img src="\assets\dummyimages\clinic.png" alt="bookleftimginner" className="bookleftimginner" />
                                </div>
                                <div className="booklefttexts">
                                    <h4 className="booklefthead">Al-Rahma Central Hospital</h4>
                                    <p className="bookleftbluepara">18 Specialty - 77 Doctor</p>
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
                            <button onClick={() => {
                                setKey("Doctors");
                            }}  className="bluebtn">
                                Book appointment
                            </button>
                        </div>
                    </div>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="clinicaltabs"
                    >
                        <Tab eventKey="About" title="About">
                            <Abouttab />
                        </Tab>
                        <Tab eventKey="Doctors" title="Doctors">
                            <Doctorslist />
                        </Tab>
                        <Tab eventKey="Services" title="Services">
                            <Ourserviceslist />
                        </Tab>
                        <Tab eventKey="Reviews" title="Reviews">
                            <Doctorreview />
                        </Tab>
                    </Tabs>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Clinicprofile