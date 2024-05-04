import React from 'react'
import Header from './header'
import Footer from './footer'
import Doctorslist from './doctorslist'

const Ournutritionist = () => {
    return (
        <>
            <Header />
            <section className="bookingappointment our-specialists">
                <div className="custom-container">
                    <div className="main-heading">
                        <div className="twice-parent">
                            <h6>Our Nutritionists</h6>
                            <a href="#" className='btn-filter'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 6.66602L12.5 6.66602M12.5 6.66602C12.5 8.04673 13.6193 9.16602 15 9.16602C16.3807 9.16602 17.5 8.04673 17.5 6.66602C17.5 5.2853 16.3807 4.16602 15 4.16602C13.6193 4.16602 12.5 5.2853 12.5 6.66602ZM7.5 13.3327L17.5 13.3327M7.5 13.3327C7.5 14.7134 6.38071 15.8327 5 15.8327C3.61929 15.8327 2.5 14.7134 2.5 13.3327C2.5 11.952 3.61929 10.8327 5 10.8327C6.38071 10.8327 7.5 11.952 7.5 13.3327Z" stroke="#0024B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>Filters</a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas</p>
                    </div>
                    <Doctorslist />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Ournutritionist
