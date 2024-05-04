/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
    const router = useRouter();
    return (
        <>
            <section className='main-navbar'>
                <div className="custom-container">
                    <Navbar expand="xl">
                        <Navbar.Brand href="/">
                            <img src="\Logo.svg" alt="logoimg" className="logoimg img-fluid" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className="navbarinner">
                                <Nav>
                                    <Link href="/">
                                        <p className={router.pathname === "/" ? "activelink" : ""}>Home</p>
                                    </Link>
                                    <Link href="/clinics">
                                        <p className={router.pathname === "/components/clinics" || router.pathname === "/components/clinicprofile" ? "activelink" : ""}>Clinics</p>
                                    </Link>
                                    <Link href="/doctors">
                                        <p className={router.pathname === "/components/doctors" || router.pathname === "/components/specialistsdetail" || router.pathname === "/components/doctorprofile" ? "activelink" : ""}>Doctors</p>
                                    </Link>
                                    <Link href="/service">
                                        <p className={router.pathname === "/components/service" || router.pathname === "/components/ournutritionist" ? "activelink" : ""}>Service</p>
                                    </Link>
                                    <Link href="/contact">
                                        <p className={router.pathname === "/components/contact" ? "activelink" : ""}>Contact Us</p>
                                    </Link>
                                </Nav>
                                <div className="navbarright">
                                    <div className="navbarinputmain">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='searchimg'>
                                            <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="#7A7A96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <input type="search" className="navinput" placeholder='Find a Doctor/Service' />
                                    </div>
                                    <button className="languagebtn">
                                    <img src="\assets\dummyimages\en-img.svg" alt="countryimg" className="countryimg" />
                                        En
                                    </button>
                                </div>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </section>
        </>
    )
}

export default Header
