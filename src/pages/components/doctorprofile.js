import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Doctorreview from './doctorreview';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';

const Doctorprofile = () => {
    const availableTimes = [
        { day: 'Sat', date: '20 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '20 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '20 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '20 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '20 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '20 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },

        { day: 'Sat', date: '05 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '05 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '05 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '05 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '05 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '05 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },

        { day: 'Sat', date: '10 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '10 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '10 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '10 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '10 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
        { day: 'Sat', date: '10 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    ];

    const cardsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(false);
    const [nextClicked, setNextClicked] = useState(false);

    const handleClickNext = () => {
        setCurrentPage(prevPage => prevPage + 1);
        setNextClicked(true);
        setTransitionEnabled(true);
        setTimeout(() => setTransitionEnabled(false), 300);
    };

    const handleClickPrev = () => {
        setCurrentPage(prevPage => prevPage - 1);
        setNextClicked(false);
        setTransitionEnabled(true);
        setTimeout(() => setTransitionEnabled(false), 300);
    };

    const totalPages = Math.ceil(availableTimes.length / cardsPerPage);
    const displayedTimes = availableTimes.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <>
            <Header />
            <section className="doctor-profile">
                <div className="custom-container" >
                    <div className="doctor-profile-detail">
                        <img src="\assets\doctorprofile\doctor-detail-bglogo.svg" alt="img" className='img-fluid doctor-detail-bglogo' />
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item firstchild"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M6.66667 14.1663H13.3333M9.18141 2.30297L3.52949 6.6989C3.15168 6.99276 2.96278 7.13968 2.82669 7.32368C2.70614 7.48667 2.61633 7.67029 2.56169 7.86551C2.5 8.0859 2.5 8.32521 2.5 8.80384V14.833C2.5 15.7664 2.5 16.2331 2.68166 16.5896C2.84144 16.9032 3.09641 17.1582 3.41002 17.318C3.76654 17.4996 4.23325 17.4996 5.16667 17.4996H14.8333C15.7668 17.4996 16.2335 17.4996 16.59 17.318C16.9036 17.1582 17.1586 16.9032 17.3183 16.5896C17.5 16.2331 17.5 15.7664 17.5 14.833V8.80384C17.5 8.32521 17.5 8.0859 17.4383 7.86551C17.3837 7.67029 17.2939 7.48667 17.1733 7.32368C17.0372 7.13968 16.8483 6.99276 16.4705 6.69891L10.8186 2.30297C10.5258 2.07526 10.3794 1.9614 10.2178 1.91763C10.0752 1.87902 9.92484 1.87902 9.78221 1.91763C9.62057 1.9614 9.47418 2.07526 9.18141 2.30297Z" stroke="#8F8FA6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></a></li>
                                <li class="breadcrumb-item"><a href="#">Booking appointment</a></li>
                                <li class="breadcrumb-item"><a href="#">Dr. Mohamed Farahat</a> </li>
                            </ol>
                        </nav>
                        <div className="parent">
                            <div className="doctor-profile-img">
                                <img src="\assets\dummy\profile.png" alt="img" className='img-fluid' />
                            </div>
                            <div className="right-side-content">
                                <p className="experience-text">10 years of experience</p>
                                <div className="doctor-detail">
                                    <div className="inner-left">
                                        <h6 className='title-name'>Dr. Mohamed Farahat</h6>
                                        <p className='sub-title'>Gynecology and obstetrics specialist </p>
                                        <div className="hospital-info">
                                            <div className="logo-img">
                                                <img src="\assets\doctorprofile\hospitallogo.svg" alt="img" className='img-fluid' />
                                            </div>
                                            <div className="text">
                                                <h6>Al-Shefaa hospital (Yarmouk)</h6>
                                                <p>Imam abdullah bin saud bin abdulaziz road</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mobile-div-show d-none">
                                        <div className="rate-text">
                                            <h6>$120 / Hour</h6>
                                        </div>
                                        <div className="mobile-rating">
                                            <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                            <span>(4.5)</span>
                                        </div>
                                    </div>
                                    <div className="inner-rating">
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <span>(4.5)</span>
                                    </div>
                                </div>
                                <div className="bottom-info">
                                    <div className="left-side">
                                        <div className="inner-sr">
                                            <img src="\assets\doctorprofile\sr-icon.svg" alt="img" className='img-fluid' />
                                            <p>100 SR</p>
                                        </div>
                                        <div className="waiting-time inner-sr">
                                            <img src="\assets\doctorprofile\time-icon.svg" alt="img" className='img-fluid' />
                                            <p>Waiting time : 20 minutes</p>
                                        </div>
                                    </div>
                                    <Link href="/specialistsdetail" className='main-profile-btn'>View main profile <img src="\assets\doctorprofile\arrow-right.svg" alt="img" className='img-fluid' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-parent d-none">
                            <div className="hospital-info">
                                <div className="logo-img">
                                    <img src="\assets\doctorprofile\hospitallogo.svg" alt="img" className='img-fluid' />
                                </div>
                                <div className="text">
                                    <h6>Al-Shefaa hospital (Yarmouk)</h6>
                                    <p>Imam abdullah bin saud bin abdulaziz road</p>
                                </div>
                            </div>
                            <div className="bottom-info">
                                    <div className="left-side">
                                        <div className="inner-sr">
                                            <img src="\assets\doctorprofile\sr-icon.svg" alt="img" className='img-fluid' />
                                            <p>100 SR</p>
                                        </div>
                                        <div className="waiting-time inner-sr">
                                            <img src="\assets\doctorprofile\time-icon.svg" alt="img" className='img-fluid' />
                                            <p>Waiting time : 20 minutes</p>
                                        </div>
                                    </div>
                                </div>
                                <a onClick={handleShow} className='btn-appointment'>Book appointment</a>
                        </div>
                    </div>
                    <div className="available-time">
                        <div className="main-heading">
                            <h6>Available Time</h6>
                        </div>
                        <div className="parent-cards" >
                            {displayedTimes.map((time, index) => (
                                <div className={`single-card ${transitionEnabled ? 'fade-in' : ''}`} key={index}>
                                    <div className={`upper-div ${transitionEnabled ? 'fade-in' : ''}`}>
                                        <h6>{time.day}</h6>
                                        <span>|</span>
                                        <h6>{time.date}</h6>
                                    </div>
                                    <div className={`bottom-div ${transitionEnabled ? 'fade-in' : ''}`}>
                                        {time.times.map((t, idx) => (
                                            <div className="time-text" key={idx}>
                                                <h6>{t}</h6>
                                            </div>
                                        ))}
                                        <a href="#" className="btn-next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <path d="M9.66406 18L15.6641 12L9.66406 6" stroke="#12215C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bottom-twice">
                            <div className="left-buttons">
                                <button className={currentPage === 0 ? 'prev-btn opacityset' : 'prev-btn'} onClick={handleClickPrev} disabled={currentPage === 0}><img src="\assets\doctorprofile\prev-btn.svg" alt="img" className='img-fluid' /></button>
                                <button className={currentPage === totalPages - 1 ? 'next-btn opacityset' : 'next-btn'} onClick={handleClickNext} disabled={currentPage === totalPages - 1}><img src="\assets\doctorprofile\next-btn.svg" alt="img" className='img-fluid' /></button>
                            </div>
                            <a onClick={handleShow} className='btn-appointment'>Book appointment</a>
                        </div>
                    </div>
                    <Doctorreview />
                </div>
            </section>
            <Footer />


            <Modal className='appointment-modal' show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <div className="parent">
                        <div className="doctor-profile-img">
                            <img src="\assets\dummy\profile.png" alt="img" className='img-fluid' />
                        </div>
                        <div className="right-side-content">
                            <div className="doctor-detail">
                                <div className="inner-left">
                                    <h6 className='title-name'>Dr. Mohamed Farahat</h6>
                                    <p className='sub-title'>Gynecology and obstetrics specialist </p>
                                    <div className="mobile-div-show d-none">
                                        <div className="rate-text">
                                            <h6>$120 / Hour</h6>
                                        </div>
                                        <div className="mobile-rating">
                                            <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                            <span>(4.5)</span>
                                        </div>
                                    </div>
                                    <div className="inner-rating">
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="hospital-info">
                                    <div className="logo-img">
                                        <img src="\assets\doctorprofile\hospitallogo.svg" alt="img" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-info">
                                <div className="left-side">
                                    <div className="inner-sr">
                                        <img src="\assets\doctorprofile\sr-icon.svg" alt="img" className='img-fluid' />
                                        <p>100 SR</p>
                                    </div>
                                    <div className="waiting-time inner-sr">
                                        <img src="\assets\doctorprofile\time-icon.svg" alt="img" className='img-fluid' />
                                        <p>Waiting time : 20 minutes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-parent d-none">
                            <div className="hospital-info">
                                <div className="logo-img">
                                    <img src="\assets\doctorprofile\hospitallogo.svg" alt="img" className='img-fluid' />
                                </div>
                                <div className="text">
                                    <h6>Al-Shefaa hospital (Yarmouk)</h6>
                                    <p>Imam abdullah bin saud bin abdulaziz road</p>
                                </div>
                            </div>
                            <div className="bottom-info">
                                    <div className="left-side">
                                        <div className="inner-sr">
                                            <img src="\assets\doctorprofile\sr-icon.svg" alt="img" className='img-fluid' />
                                            <p>100 SR</p>
                                        </div>
                                        <div className="waiting-time inner-sr">
                                            <img src="\assets\doctorprofile\time-icon.svg" alt="img" className='img-fluid' />
                                            <p>Waiting time : 20 minutes</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    <div className="bottom-fields">
                        <div className="option-field">
                            <label>Patient Name</label>
                            <div className="inner-field">
                                <input type="text" placeholder='Enter full name' />
                                <svg className='abs-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.9979 15C8.82782 15 6.0087 16.5306 4.21389 18.906C3.8276 19.4172 3.63446 19.6728 3.64078 20.0183C3.64566 20.2852 3.81326 20.6219 4.02326 20.7867C4.29508 21 4.67177 21 5.42513 21H18.5707C19.324 21 19.7007 21 19.9725 20.7867C20.1825 20.6219 20.3501 20.2852 20.355 20.0183C20.3613 19.6728 20.1682 19.4172 19.7819 18.906C17.9871 16.5306 15.168 15 11.9979 15Z" stroke="#A3A3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.9979 12C14.4832 12 16.4979 9.98528 16.4979 7.5C16.4979 5.01472 14.4832 3 11.9979 3C9.51262 3 7.4979 5.01472 7.4979 7.5C7.4979 9.98528 9.51262 12 11.9979 12Z" stroke="#A3A3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="option-field">
                            <label>Mobile Number</label>
                            <div className="inner-field">
                                <input type="number" placeholder='+966' style={{ paddingLeft: "50px" }} />
                                <img src="\assets\dummy\saudia-icon.svg" alt="img" className='img-fluid abs-icon' />
                            </div>
                        </div>
                        <div className="option-field">
                            <label>Insurance</label>
                            <div className="inner-field">
                                <input type="text" placeholder='Select insurance company' />
                                <svg className='abs-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z" stroke="#A3A3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="twice-btns">
                        <a onClick={() => {
                            handleClose();
                            handleShow1();
                        }} className='btn-next'>Next</a>
                        <a onClick={handleClose} className='btn-cancel'>Cancel</a>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className='appointment-modal' show={show1} onHide={handleClose1} centered>
                <Modal.Body>
                    <div className="parent">
                        <div className="doctor-profile-img">
                            <img src="\assets\dummy\profile.png" alt="img" className='img-fluid' />
                        </div>
                        <div className="right-side-content">
                            <div className="doctor-detail">
                                <div className="inner-left">
                                    <h6 className='title-name'>Dr. Mohamed Farahat</h6>
                                    <p className='sub-title'>Gynecology and obstetrics specialist </p>
                                    <div className="mobile-div-show d-none">
                                        <div className="rate-text">
                                            <h6>$120 / Hour</h6>
                                        </div>
                                        <div className="mobile-rating">
                                            <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                            <span>(4.5)</span>
                                        </div>
                                    </div>
                                    <div className="inner-rating">
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                        <img src="\assets\doctorprofile\start.svg" alt="img" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="hospital-info">
                                    <div className="logo-img">
                                        <img src="\assets\doctorprofile\hospitallogo.svg" alt="img" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-info">
                                <div className="left-side">
                                    <div className="inner-sr">
                                        <img src="\assets\doctorprofile\sr-icon.svg" alt="img" className='img-fluid' />
                                        <p>100 SR</p>
                                    </div>
                                    <div className="waiting-time inner-sr">
                                        <img src="\assets\doctorprofile\time-icon.svg" alt="img" className='img-fluid' />
                                        <p>Waiting time : 20 minutes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-parent d-none">
                            <div className="hospital-info">
                                <div className="logo-img">
                                    <img src="\assets\doctorprofile\hospitallogo.svg" alt="img" className='img-fluid' />
                                </div>
                                <div className="text">
                                    <h6>Al-Shefaa hospital (Yarmouk)</h6>
                                    <p>Imam abdullah bin saud bin abdulaziz road</p>
                                </div>
                            </div>
                            <div className="bottom-info">
                                    <div className="left-side">
                                        <div className="inner-sr">
                                            <img src="\assets\doctorprofile\sr-icon.svg" alt="img" className='img-fluid' />
                                            <p>100 SR</p>
                                        </div>
                                        <div className="waiting-time inner-sr">
                                            <img src="\assets\doctorprofile\time-icon.svg" alt="img" className='img-fluid' />
                                            <p>Waiting time : 20 minutes</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    <div className="reservation-confirm">
                        <h6 className="main-heading">Reservation Confirmation</h6>
                        <div className="bottom-text-fields">
                            <div className="text">
                                <h6>Patient Name</h6>
                                <span>|</span>
                                <h5>Ahmed Mohamed Hamed</h5>
                            </div>
                            <div className="text">
                                <h6>Mobile Number</h6>
                                <span>|</span>
                                <h5>0510589789</h5>
                            </div>
                            <div className="text">
                                <h6>Appointment Date</h6>
                                <span>|</span>
                                <h5>Sat, 20 / 1 / 2024    3:00 PM</h5>
                            </div>
                        </div>
                    </div>
                    <div className="twice-btns">
                        <a onClick={() => {
                            handleClose1();
                            handleShow2();
                        }} className='btn-next'>Confirm</a>
                        <a onClick={handleClose1} className='btn-cancel'>Cancel</a>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className='appointment-modal' show={show2} onHide={handleClose2} centered>
                <Modal.Body>
                    <div className="success-modal">
                        <img src="\assets\doctorprofile\success.svg" alt="img" className='img-fluid' />
                        <h6>Your appointment is booked successfully</h6>
                        <p>Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phase</p>
                        <a onClick={handleClose2} className='btn-done'>Done</a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Doctorprofile;
