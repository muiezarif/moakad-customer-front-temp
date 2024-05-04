import Link from "next/link";
import React from "react";

const Banner = () => {

  return (
    <>
      <section className='main-banner'>
        <div className="custom-container">
          <div className="innerbanner">
            <div className="bannerleft">
              <h3 className="bannerhead">
                Innovative technology
                and caring healthcare <br /> <span className="boldhead">
                  Your health is our priority
                </span>
              </h3>
              <div className="bannerbtns">
                <button className="innerbtn btnone">
                  Diagnostic center
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 13H18.586L13.293 18.293C13.1984 18.3855 13.1232 18.4958 13.0715 18.6176C13.0199 18.7393 12.993 18.8701 12.9922 19.0024C12.9915 19.1347 13.017 19.2658 13.0673 19.3881C13.1176 19.5104 13.1916 19.6216 13.2852 19.7151C13.3787 19.8086 13.4899 19.8826 13.6122 19.9329C13.7345 19.9832 13.8656 20.0086 13.9979 20.0079C14.1302 20.0071 14.261 19.9802 14.3827 19.9285C14.5045 19.8769 14.6148 19.8016 14.7072 19.707L21.7073 12.707C21.8947 12.5195 22 12.2652 22 12C22 11.7348 21.8947 11.4805 21.7073 11.293L14.7072 4.293C14.6145 4.19998 14.5042 4.12622 14.3829 4.07593C14.2615 4.02565 14.1314 3.99985 14 4C13.8022 4.00004 13.609 4.05871 13.4445 4.1686C13.2801 4.27848 13.152 4.43465 13.0763 4.61735C13.0007 4.80005 12.9808 5.00108 13.0194 5.19503C13.058 5.38899 13.1532 5.56715 13.293 5.707L18.586 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13Z" fill="#12215C" />
                  </svg>
                </button>
                <button className="innerbtn btntwo">
                  Surgery department
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 13H18.586L13.293 18.293C13.1984 18.3855 13.1232 18.4958 13.0715 18.6176C13.0199 18.7393 12.993 18.8701 12.9922 19.0024C12.9915 19.1347 13.017 19.2658 13.0673 19.3881C13.1176 19.5104 13.1916 19.6216 13.2852 19.7151C13.3787 19.8086 13.4899 19.8826 13.6122 19.9329C13.7345 19.9832 13.8656 20.0086 13.9979 20.0079C14.1302 20.0071 14.261 19.9802 14.3827 19.9285C14.5045 19.8769 14.6148 19.8016 14.7072 19.707L21.7073 12.707C21.8947 12.5195 22 12.2652 22 12C22 11.7348 21.8947 11.4805 21.7073 11.293L14.7072 4.293C14.6145 4.19998 14.5042 4.12622 14.3829 4.07593C14.2615 4.02565 14.1314 3.99985 14 4C13.8022 4.00004 13.609 4.05871 13.4445 4.1686C13.2801 4.27848 13.152 4.43465 13.0763 4.61735C13.0007 4.80005 12.9808 5.00108 13.0194 5.19503C13.058 5.38899 13.1532 5.56715 13.293 5.707L18.586 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13Z" fill="#12215C" />
                  </svg>
                </button>
                <button className="innerbtn btnthree">
                  Pediatrics
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 13H18.586L13.293 18.293C13.1984 18.3855 13.1232 18.4958 13.0715 18.6176C13.0199 18.7393 12.993 18.8701 12.9922 19.0024C12.9915 19.1347 13.017 19.2658 13.0673 19.3881C13.1176 19.5104 13.1916 19.6216 13.2852 19.7151C13.3787 19.8086 13.4899 19.8826 13.6122 19.9329C13.7345 19.9832 13.8656 20.0086 13.9979 20.0079C14.1302 20.0071 14.261 19.9802 14.3827 19.9285C14.5045 19.8769 14.6148 19.8016 14.7072 19.707L21.7073 12.707C21.8947 12.5195 22 12.2652 22 12C22 11.7348 21.8947 11.4805 21.7073 11.293L14.7072 4.293C14.6145 4.19998 14.5042 4.12622 14.3829 4.07593C14.2615 4.02565 14.1314 3.99985 14 4C13.8022 4.00004 13.609 4.05871 13.4445 4.1686C13.2801 4.27848 13.152 4.43465 13.0763 4.61735C13.0007 4.80005 12.9808 5.00108 13.0194 5.19503C13.058 5.38899 13.1532 5.56715 13.293 5.707L18.586 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13Z" fill="#12215C" />
                  </svg>
                </button>
                <button className="innerbtn btnfour">
                  Dental care
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 13H18.586L13.293 18.293C13.1984 18.3855 13.1232 18.4958 13.0715 18.6176C13.0199 18.7393 12.993 18.8701 12.9922 19.0024C12.9915 19.1347 13.017 19.2658 13.0673 19.3881C13.1176 19.5104 13.1916 19.6216 13.2852 19.7151C13.3787 19.8086 13.4899 19.8826 13.6122 19.9329C13.7345 19.9832 13.8656 20.0086 13.9979 20.0079C14.1302 20.0071 14.261 19.9802 14.3827 19.9285C14.5045 19.8769 14.6148 19.8016 14.7072 19.707L21.7073 12.707C21.8947 12.5195 22 12.2652 22 12C22 11.7348 21.8947 11.4805 21.7073 11.293L14.7072 4.293C14.6145 4.19998 14.5042 4.12622 14.3829 4.07593C14.2615 4.02565 14.1314 3.99985 14 4C13.8022 4.00004 13.609 4.05871 13.4445 4.1686C13.2801 4.27848 13.152 4.43465 13.0763 4.61735C13.0007 4.80005 12.9808 5.00108 13.0194 5.19503C13.058 5.38899 13.1532 5.56715 13.293 5.707L18.586 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13Z" fill="#12215C" />
                  </svg>
                </button>
                <button className="innerbtn btnfive">
                  Labs
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 13H18.586L13.293 18.293C13.1984 18.3855 13.1232 18.4958 13.0715 18.6176C13.0199 18.7393 12.993 18.8701 12.9922 19.0024C12.9915 19.1347 13.017 19.2658 13.0673 19.3881C13.1176 19.5104 13.1916 19.6216 13.2852 19.7151C13.3787 19.8086 13.4899 19.8826 13.6122 19.9329C13.7345 19.9832 13.8656 20.0086 13.9979 20.0079C14.1302 20.0071 14.261 19.9802 14.3827 19.9285C14.5045 19.8769 14.6148 19.8016 14.7072 19.707L21.7073 12.707C21.8947 12.5195 22 12.2652 22 12C22 11.7348 21.8947 11.4805 21.7073 11.293L14.7072 4.293C14.6145 4.19998 14.5042 4.12622 14.3829 4.07593C14.2615 4.02565 14.1314 3.99985 14 4C13.8022 4.00004 13.609 4.05871 13.4445 4.1686C13.2801 4.27848 13.152 4.43465 13.0763 4.61735C13.0007 4.80005 12.9808 5.00108 13.0194 5.19503C13.058 5.38899 13.1532 5.56715 13.293 5.707L18.586 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13Z" fill="#12215C" />
                  </svg>
                </button>
              </div>
              <Link href="/bookingappointment" className="bluebtn">
                Book your appointment now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 18L18 6M18 6H10M18 6V14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="bannerright">
              <img src="\assets\bannermainimg.png" alt="innerbannerimg" className="innerbannerimg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
