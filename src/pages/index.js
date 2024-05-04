import React from 'react'
import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import Mission from './components/mission';
import Services from './components/services';
import Faq from './components/faq';
import Connected from './components/connected';
import Aboutus from './components/aboutus';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Mission />
      <Services />
      <Aboutus />
      <Faq />
      <Connected />
      <Footer />
    </>
  )
}
