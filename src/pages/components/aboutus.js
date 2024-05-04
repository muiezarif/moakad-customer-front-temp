import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Aboutus = () => {
  const [index, setIndex] = useState(0);
  const totalItems = 12;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="aboutusmain">
      <div className="custom-container">
        <div className="innerabout">
          <div className="inneraboutmain">
            <button className="servicearrowbtn">
              <span className="innerbtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 15L15 5M15 5H8.33333M15 5V11.6667" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
            <h4 className="aboutushead">What clients are saying about us</h4>
            <p className="aboutuspara">Lorem ipsum dolor sit amet consectetur. Tortor sapien at lectus varius tristique eget aliquam. Sed eget lacus blandit egestas. A donec sagittis sit met consectetur. Tortor sapien at lectus varius volutpat.</p>
            <Carousel className='aboutuscarousel' slide={false} activeIndex={index} onSelect={handleSelect} interval={null} loop={false} wrap={false}>
              <Carousel.Item>
                <div className="aboutuscardsmain">
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="aboutuscardsmain">
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                   Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="aboutuscardsmain">
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                  Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="aboutuscardsmain">
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="aboutuscardsmain">
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                   Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="aboutuscardsmain">
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                  Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="aboutuscardsmain">
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="aboutuscardsmain">
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                   Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="aboutuscardsmain">
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                  Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="aboutuscardsmain">
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="aboutuscardsmain">
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                   Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="aboutuscardsmain">
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                      Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                  <div className="aboutcard">
                    <span className="aboutcardimg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M10.5015 14.7328L3 9.28894V3.32954L10.5076 8.80673L21.1507 0.845703V7.02649L10.5015 14.7328Z" fill="#F5F5FF" />
                        <path d="M24.5226 16.2619C24.6501 16.2615 24.7764 16.2861 24.8943 16.3342C25.0123 16.3823 25.1195 16.453 25.21 16.5423C25.3004 16.6315 25.3723 16.7376 25.4214 16.8545C25.4706 16.9713 25.4961 17.0967 25.4965 17.2233V19.2856C25.4965 19.7982 25.2917 20.2899 24.9271 20.6527C24.5624 21.0155 24.0678 21.2197 23.5517 21.2205H16.4563C16.3285 21.2205 16.202 21.2456 16.084 21.2942C15.966 21.3429 15.8588 21.4142 15.7687 21.5041C15.6785 21.5939 15.607 21.7006 15.5584 21.818C15.5098 21.9353 15.485 22.0611 15.4854 22.188V30.1914C15.4854 30.3184 15.4602 30.444 15.4112 30.5612C15.3622 30.6784 15.2904 30.7849 15.1999 30.8745C15.1094 30.9641 15.0021 31.035 14.8839 31.0833C14.7658 31.1316 14.6392 31.1563 14.5114 31.1559H12.4323C11.9162 31.1559 11.4212 30.9524 11.056 30.5902C10.6908 30.228 10.4852 29.7366 10.4844 29.224V17.2233C10.4844 16.9667 10.587 16.7207 10.7696 16.5392C10.9523 16.3578 11.2 16.2559 11.4583 16.2559L24.5226 16.2619Z" fill="#F5F5FF" />
                        <path d="M7.868 16.2589C8.12526 16.2589 8.37206 16.36 8.55453 16.5401C8.73701 16.7202 8.84033 16.9647 8.84195 17.2203V19.2826C8.84195 19.7957 8.63672 20.2879 8.27142 20.6508C7.90612 21.0136 7.41067 21.2175 6.89406 21.2175H1.47785C1.22007 21.2175 0.972806 21.116 0.790244 20.9352C0.607682 20.7544 0.504714 20.5091 0.503906 20.2531L0.503906 18.1908C0.503906 17.6776 0.709129 17.1854 1.07443 16.8226C1.43973 16.4597 1.93518 16.2559 2.45179 16.2559L7.868 16.2589Z" fill="#F5F5FF" />
                      </svg>
                    </span>
                    <p className="aboutcardpara">
                  Vehicula in a egestas consectetur cras. Nulla phasellus dsssduis nulla justo ac viverra in ullamcorper senectus. Aliquet sit s
                    </p>
                    <div className="patientimg">
                      <img src="\assets\dummyimages\cardone.svg" alt="patientinnerimg" className="patientinnerimg" />
                    </div>
                    <p className="patientname">Hana Mohamed</p>
                    <img src="\assets\importantimages\patientcardbg.svg" alt="backgroundcardimg" className="backgroundcardimg" />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
            <p className='itemspara'>{index + 1} - {totalItems}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus