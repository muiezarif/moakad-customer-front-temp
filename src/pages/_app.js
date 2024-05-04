import Head from "next/head"
import Script from "next/script"
import "@/styles/header.scss"
import "@/styles/app.scss"
import "@/styles/banner.scss"
import "@/styles/footer.scss"
import "@/styles/mission.scss"
import "@/styles/services.scss"
import "@/styles/faqs.scss"
import "@/styles/connected.scss"
import "@/styles/aboutus.scss"
import "@/styles/bookingappointment.scss"
import "@/styles/doctorslist.scss"
import "@/styles/clinicprofile.scss"
import "@/styles/abouttab.scss"
import "@/styles/clinics.scss"
import "@/styles/doctorprofile.scss"
import "@/styles/ourservices.scss"
import "@/styles/contactus.scss"

export default function App({ Component, pageProps }) {
  return <>
  <Head>
  <link href="https://db.onlinewebfonts.com/c/17241fb9c2ffb3ec11eba762e771435f?family=Suisse+Int%27l+Book" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />
  </Head>
  <Component {...pageProps} />
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></Script>
  <Script src="https://unpkg.com/react/umd/react.development.js"></Script>
  <Script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></Script>
</>
}