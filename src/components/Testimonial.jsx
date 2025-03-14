import React from 'react';
import { testimonials } from '../constants';
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


const Testimonial = () => {
    return (
        <div className='mt-20 tracking-wider'>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>
                What People are saying
            </h2>
            <div className='flex flex-wrap justify-center'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                        <div className='p-6 border border-neutral-800 rounded-md bg-neutral-900 font-thin'>
                            <p className='ml'>
                                {testimonial.text}
                            </p>
                            <div className='flex mt-8 items-start '>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.user}
                                    className='w-12 h-12 rounded-full border border-neutral-300'
                                />
                                <div className='mx-5'>
                                    <h6>
                                        {testimonial.user }
                                    </h6>
                                    <span className='text-sm font-normal italic text-neutral-600'>
                                        {testimonial.company}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial
