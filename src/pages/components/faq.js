import React from 'react'
import { Accordion } from 'react-bootstrap'

const Faq = () => {
  return (
    <section className="faqsmain">
    <div className="custom-container">
        <div className="innerfaqs">
            <div className="faqsleft">
                <h4 className="faqshead">FAQs</h4>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What’s the best thing about Switzerland?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What’s the best thing about Switzerland?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What’s the best thing about Switzerland?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What’s the best thing about Switzerland?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>What’s the best thing about Switzerland?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>What’s the best thing about Switzerland?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="faqsright">
                <img src="\assets\faqmainimg.png" alt="faqrightimg" className="faqrightimg" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Faq