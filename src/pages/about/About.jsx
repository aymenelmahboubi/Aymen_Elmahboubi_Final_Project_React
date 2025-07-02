import React from 'react';
import images from '../../constants/images';


const About = () => {
    return (
        <>
            <div
                className="w-full h-[30vh] bg-[url('/src/assets/images/banner.webp')] flex justify-center items-center">
                <h1 className='text-4xl font-bold text-amber-50'>ABOUT</h1>
            </div>

            <div className='flex flex-col lg:flex-row p-5 lg:p-5 gap-3 lg:gap-10 items-center justify-center overflow-hidden max-w-7xl mx-auto'>
                <div className='w-full lg:w-[35vw] h-64 sm:h-80 lg:h-[35vw] p-4 lg:p-10 flex items-center justify-center'>
                    <img
                        src={images.shopy4}
                        alt="Our story illustration"
                        className='w-full h-full object-contain'
                    />
                </div>

              
            </div>

        </>
    );
};

export default About;