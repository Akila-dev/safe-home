import React from 'react'

export default function ContactUsComp() {
    return (
        <div className=''>
            <h4 style={{ color: "#8D4000" }}>Contact Us</h4>
            <p style={{ color: "#1A374D" }}>
                You can reach us via our phone numbers, social media profiles, email etc.
            </p>

            <div className='mt-5 contact-us-comp'>
                <div className="card rounded-4 p-4 mt-4">
                    <div className="row">
                        <div className="col-md-1">
                            <i className='ri-map-pin-2-line' />
                        </div>
                        <div className="col-md-10 ps-4">
                            <p className="text-secondary mb-0">
                                Lorem ipsum dolor sit amet consectetur. Faucibus lectus non hendrerit
                                tellus. Fermentum quis egestas aliquet non placerat tincidunt ac nisl
                                sagittis. Massa ultricies libero ante tempor. Sagittis odio quisque
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card rounded-4 p-4 mt-4">
                    <div className="row">
                        <div className="col-md-1">
                            <i className='ri-mail-line' />
                        </div>
                        <div className="col-md-10 ps-4">
                            <p className="text-secondary mb-0">
                                Lorem ipsum dolor sit amet consectetur. Faucibus lectus non hendrerit
                                tellus. Fermentum quis egestas aliquet non placerat tincidunt ac nisl
                                sagittis. Massa ultricies libero ante tempor. Sagittis odio quisque
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card rounded-4 p-4 mt-4">
                    <div className="row">
                        <div className="col-md-1">
                            <i className='ri-phone-line' />
                        </div>
                        <div className="col-md-10 ps-4">
                            <p className="text-secondary mb-0">
                                Lorem ipsum dolor sit amet consectetur. Faucibus lectus non hendrerit
                                tellus. Fermentum quis egestas aliquet non placerat tincidunt ac nisl
                                sagittis. Massa ultricies libero ante tempor. Sagittis odio quisque
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card rounded-4 p-4 mt-4">
                <div className='text-center'>
                    <div className='mb-3'>
                        <i className="ri-twitter-line ri-xl me-3"/>
                        <i className="ri-instagram-line ri-xl me-3"/>
                        <i className="ri-facebook-line ri-xl me-3"/>
                        <i className="ri-linkedin-line ri-xl me-3"/>
                    </div>
                    <p className="text-secondary mb-0">
                        Lorem ipsum dolor sit amet consectetur. Faucibus lectus non hendrerit
                        tellus. Fermentum quis egestas aliquet non placerat tincidunt ac nisl
                        sagittis. Massa ultricies libero ante tempor. Sagittis odio quisque
                    </p>
                </div>
            </div>
        </div>
    )
}
