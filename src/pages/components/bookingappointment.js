import React from 'react'
import Header from './header'
import Footer from './footer'
import Doctorslist from './doctorslist'

const Bookingappointment = () => {
    return (
        <>
            <Header />
            <section className="bookingappointment">
                <div className="custom-container">
                    <div className="main-heading">
                        <h6>Booking Appointment</h6>
                        <p>Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus.</p>
                        <img src="\assets\booking\booking-bg.svg" alt="img" className='img-fluid booking-bg' />
                    </div>
                    <div className="filter-area">
                        <div className="left-side">
                            <div className="single-drop">
                                <div className="text">
                                    <h6>Showing doctors in: </h6>
                                </div>
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Riyadh <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9L12 15L18 9" stroke="#7A7A96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">...</a></li>
                                        <li><a class="dropdown-item" href="#">...</a></li>
                                        <li><a class="dropdown-item" href="#">...</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-drop">
                                <div className="text">
                                    <h6>Specialty </h6>
                                </div>
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Cardiology <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9L12 15L18 9" stroke="#7A7A96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">...</a></li>
                                        <li><a class="dropdown-item" href="#">...</a></li>
                                        <li><a class="dropdown-item" href="#">...</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-drop">
                                <div className="text">
                                    <h6>On </h6>
                                </div>
                                <div className="option-field">
                                    <input type="date" placeholder='19/1/2024' />
                                    <svg className='calendar-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8 2V5" stroke="#7A7A96" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 2V5" stroke="#7A7A96" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.5 9.08984H20.5" stroke="#7A7A96" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#7A7A96" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.6937 13.6992H15.7027" stroke="#7A7A96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.6937 16.6992H15.7027" stroke="#7A7A96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.9945 13.6992H12.0035" stroke="#7A7A96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.9945 16.6992H12.0035" stroke="#7A7A96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.29529 13.6992H8.30427" stroke="#7A7A96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.29529 16.6992H8.30427" stroke="#7A7A96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="apply-btn">
                            <a href="#">Apply</a>
                        </div>
                    </div>
                    <Doctorslist />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Bookingappointment
