import React, { useState } from 'react';

const Doctorreview = () => {
    // Sample JSON data representing multiple doctor reviews
    const doctorReviews = [
        {
            id: 1,
            name: 'Majed Al Dossary',
            date: '2 days ago',
            rating: 4.5,
            review: 'Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.'
        },
        {
            id: 2,
            name: 'Majed Al Dossary',
            date: '2 days ago',
            rating: 4.5,
            review: 'Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.'
        },
        {
            id: 3,
            name: 'Majed Al Dossary',
            date: '2 days ago',
            rating: 4.5,
            review: 'Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.'
        },
        {
            id: 4,
            name: 'Majed Al Dossary',
            date: '2 days ago',
            rating: 4.5,
            review: 'Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.'
        },
        {
            id: 5,
            name: 'Majed Al Dossary',
            date: '2 days ago',
            rating: 4.5,
            review: 'Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.'
        },
        {
            id: 6,
            name: 'Majed Al Dossary',
            date: '2 days ago',
            rating: 4.5,
            review: 'Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.'
        },
        {
            id: 7,
            name: 'Majed Al Dossary',
            date: '2 days ago',
            rating: 4.5,
            review: 'Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.'
        },
        {
            id: 8,
            name: 'Majed Al Dossary',
            date: '2 days ago',
            rating: 4.5,
            review: 'Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.'
        },
        {
            id: 9,
            name: 'Majed Al Dossary',
            date: '2 days ago',
            rating: 4.5,
            review: 'Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.'
        },
    ];

    
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 5;

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = doctorReviews.slice(indexOfFirstReview, indexOfLastReview);

    const [transitionEnabled, setTransitionEnabled] = useState(false);
    const [nextClicked, setNextClicked] = useState(false);

 
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
        setNextClicked(true);
        setTransitionEnabled(true);
        setTimeout(() => setTransitionEnabled(false), 300);
     
    };

   
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
        setNextClicked(false);
        setTransitionEnabled(true);
        setTimeout(() => setTransitionEnabled(false), 300);
       
    };
    

    return (
        <section className="doctor-reviews" id='top'>
            <div className="main-heading">
                <h6>Doctor Reviews</h6>
                <a href="#" className='btn-sort'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5.83594 12.5007L10.0026 16.6673L14.1693 12.5007M5.83594 7.50065L10.0026 3.33398L14.1693 7.50065" stroke="#002EE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>Sort</a>
            </div>
            <div className="bottom-content">
                {currentReviews.map((review, index) => (
                    <div className={`single-review ${transitionEnabled ? 'fade-in' : ''}`} key={index}>
                        <div className="top-content">
                            <div className="left-profile">
                                <div className="profile">
                                    <img src="\assets\dummy\review-profile.png" alt="img" className='img-fluid' />
                                </div>
                                <div className="text">
                                    <h6>{review.name}</h6>
                                    <p>{review.date}</p>
                                </div>
                            </div>
                            <div className="inner-rating">
                                {[...Array(Math.floor(review.rating))].map((star, i) => (
                                    <img key={i} src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                ))}
                                <span>({review.rating})</span>
                            </div>
                        </div>
                        <p className="para">{review.review}</p>
                    </div>
                ))}
            </div>
            <div className="bottom-twice">
                <p>{`${indexOfFirstReview + 4} - ${doctorReviews.length}`}</p>
                <div className="left-buttons">
                    <button className={currentPage === 1 ? 'prev-btn opacityset' : 'prev-btn'} disabled={currentPage === 1} onClick={prevPage}><img src="\assets\doctorprofile\prev-btn.svg" alt="img" className='img-fluid' /></button>
                    <button className={indexOfLastReview >= doctorReviews.length ? "next-btn opacityset" : "next-btn"} disabled={indexOfLastReview >= doctorReviews.length} onClick={nextPage}><img src="\assets\doctorprofile\next-btn.svg" alt="img" className='img-fluid' /></button>
                </div>
            </div>
        </section>
    );
};

export default Doctorreview;
