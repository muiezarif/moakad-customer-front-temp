import Link from 'next/link';
import React, { useState } from 'react';

const doctorsData = [
    { id: 1, name: 'Dr. Nouf Ahmed', specialty: 'Urologist', image: '/assets/dummy/1.png' },
    { id: 2, name: 'Dr. Mostafa Saud', specialty: 'Urologist', image: '/assets/dummy/2.png' },
    { id: 3, name: 'Dr. Mohamed Nawaf', specialty: 'Urologist', image: '/assets/dummy/3.png' },
    { id: 4, name: 'Dr. Natheer Alsrour', specialty: 'Urologist', image: '/assets/dummy/4.png' },
    { id: 5, name: 'Dr. Mena Ahmed', specialty: 'Urologist', image: '/assets/dummy/5.png' },
    { id: 6, name: 'Dr. Raheem Emad', specialty: 'Urologist', image: '/assets/dummy/6.png' },
    { id: 7, name: 'Dr. Nouf Saud', specialty: 'Urologist', image: '/assets/dummy/7.png' },
    { id: 8, name: 'Dr. Ahmed Abdullah', specialty: 'Urologist', image: '/assets/dummy/8.png' },
    { id: 9, name: 'Dr. Nader Alsayed', specialty: 'Urologist', image: '/assets/dummy/9.png' },
    { id: 6, name: 'Dr. Raheem Emad', specialty: 'Urologist', image: '/assets/dummy/6.png' },
    { id: 7, name: 'Dr. Nouf Saud', specialty: 'Urologist', image: '/assets/dummy/7.png' },
    { id: 8, name: 'Dr. Ahmed Abdullah', specialty: 'Urologist', image: '/assets/dummy/8.png' },
    { id: 9, name: 'Dr. Nader Alsayed', specialty: 'Urologist', image: '/assets/dummy/9.png' },
    { id: 1, name: 'Dr. Nouf Ahmed', specialty: 'Urologist', image: '/assets/dummy/1.png' },
    { id: 2, name: 'Dr. Mostafa Saud', specialty: 'Urologist', image: '/assets/dummy/2.png' },
    { id: 3, name: 'Dr. Mohamed Nawaf', specialty: 'Urologist', image: '/assets/dummy/3.png' },
    { id: 4, name: 'Dr. Natheer Alsrour', specialty: 'Urologist', image: '/assets/dummy/4.png' },
    { id: 5, name: 'Dr. Mena Ahmed', specialty: 'Urologist', image: '/assets/dummy/5.png' },
    { id: 3, name: 'Dr. Mohamed Nawaf', specialty: 'Urologist', image: '/assets/dummy/3.png' },
    { id: 4, name: 'Dr. Natheer Alsrour', specialty: 'Urologist', image: '/assets/dummy/4.png' },
    { id: 5, name: 'Dr. Mena Ahmed', specialty: 'Urologist', image: '/assets/dummy/5.png' },
    { id: 6, name: 'Dr. Raheem Emad', specialty: 'Urologist', image: '/assets/dummy/6.png' },
    { id: 7, name: 'Dr. Nouf Saud', specialty: 'Urologist', image: '/assets/dummy/7.png' },
    { id: 8, name: 'Dr. Ahmed Abdullah', specialty: 'Urologist', image: '/assets/dummy/8.png' },
    { id: 1, name: 'Dr. Nouf Ahmed', specialty: 'Urologist', image: '/assets/dummy/1.png' },
    { id: 2, name: 'Dr. Mostafa Saud', specialty: 'Urologist', image: '/assets/dummy/2.png' },
    { id: 9, name: 'Dr. Nader Alsayed', specialty: 'Urologist', image: '/assets/dummy/9.png' },
];

const Doctorslist = () => {
    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 9;
    const delay = 200; // Delay in milliseconds

    const handlePrevClick = () => {
        const newIndex = Math.max(startIndex - cardsPerPage, 0);
        setStartIndex(newIndex);
        scrollToTop();
    };

    const handleNextClick = () => {
        const newIndex = Math.min(startIndex + cardsPerPage, doctorsData.length - 1);
        setStartIndex(newIndex);
        scrollToTop();
    };

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, delay);
    };

    const visibleDoctors = doctorsData.slice(startIndex, startIndex + cardsPerPage);

    return (
        <>
            <section className="doctorslist">
                <div className="parent-cards">
                    {visibleDoctors.map(doctor => (
                        <Link href="/doctorprofile" key={doctor.id}>
                            <div className="single-card" >
                                <img src="/assets/booking/card-bg-logo.svg" alt="img" className="img-fluid card-bg-logo" />
                                <img src="/assets/booking/card-link.svg" alt="img" className="img-fluid card-link" />
                                <div className="bg-img">
                                    <img src={doctor.image} alt="img" className="img-fluid doctor-img" />
                                </div>
                                <div className="doctor-profile">
                                    <div className="inner-text">
                                        <h6>{doctor.name}</h6>
                                        <p>{doctor.specialty}</p>
                                    </div>
                                    <div className="hos-logo">
                                        <img src="/assets/booking/hospital-icon.svg" alt="img" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="bottom-twice">
                    <p>{`${startIndex + 1} - ${Math.min(startIndex + cardsPerPage, doctorsData.length)} of ${doctorsData.length}`}</p>
                    <div className="left-buttons">
                        <button className={startIndex === 0 ? "prev-btn opacityset" : "prev-btn"} onClick={handlePrevClick} disabled={startIndex === 0}>
                            <img src="/assets/doctorprofile/prev-btn.svg" alt="img" className="img-fluid" />
                        </button>
                        <button className={startIndex + cardsPerPage >= doctorsData.length ? "next-btn opacityset" : "next-btn"} onClick={handleNextClick} disabled={startIndex + cardsPerPage >= doctorsData.length}>
                            <img src="/assets/doctorprofile/next-btn.svg" alt="img" className="img-fluid" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Doctorslist;
