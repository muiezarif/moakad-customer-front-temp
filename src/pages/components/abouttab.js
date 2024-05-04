import React from 'react'

const Abouttab = () => {
  return (
    <section className="abouttabmain">
        <h6 className="abouttabhead">
        About Clinic
        </h6>
        <p className="abouttabpara">
        Lorem ipsum dolor sit amet consectetur. Vulputate ipsum urna sit mus ultrissces maecenas. Iaculis tincidunt condimentum sed urna pellentesque in placerat  <span className="bluetext">Read more</span>
        </p>
        <h6 className="specialityhead">Specialties</h6>
        <div className="specialitymain">
            <div className="specialityinner">
                <div className="specialitytext">
                    <img src="\assets\importantimages\Check.svg" alt="tickimg" className="tickimg" />
                    <p className="specialitypara">Gynecology and obstetrics</p>
                </div>
                <div className="specialitytext">
                    <img src="\assets\importantimages\Check.svg" alt="tickimg" className="tickimg" />
                    <p className="specialitypara">Gynecology and obstetrics</p>
                </div>
                <div className="specialitytext">
                    <img src="\assets\importantimages\Check.svg" alt="tickimg" className="tickimg" />
                    <p className="specialitypara">Gynecology and obstetrics</p>
                </div>
            </div>
            <div className="specialityinner">
                <div className="specialitytext">
                    <img src="\assets\importantimages\Check.svg" alt="tickimg" className="tickimg" />
                    <p className="specialitypara">Gynecology and obstetrics</p>
                </div>
                <div className="specialitytext">
                    <img src="\assets\importantimages\Check.svg" alt="tickimg" className="tickimg" />
                    <p className="specialitypara">Gynecology and obstetrics</p>
                </div>
                <div className="specialitytext">
                    <img src="\assets\importantimages\Check.svg" alt="tickimg" className="tickimg" />
                    <p className="specialitypara">Gynecology and obstetrics</p>
                </div>
            </div>
        </div>
        <h6 className="locationhead">
        Location
        </h6>
        <div className="mapmain">
        <img src="\assets\dummyimages\map.png" alt="locationimg" className="locationimg img-fluid" />
        </div>
        <h6 className="contacthead">
        Contact Information
        </h6>
        <div className="numbermain">
            <div className="numberinner">
                <img src="\assets\dummyimages\countryimg.svg" alt="countryimg" className="countryimg" />
                <p className="numberpara">0510589789</p>
            </div>
            <div className="numberinner">
                <img src="\assets\dummyimages\countryimg.svg" alt="countryimg" className="countryimg" />
                <p className="numberpara">0510589789</p>
            </div>
            <div className="numberinner">
                <img src="\assets\dummyimages\countryimg.svg" alt="countryimg" className="countryimg" />
                <p className="numberpara">0510589789</p>
            </div>
        </div>
    </section>
  )
}

export default Abouttab