import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './branches.css';
import img1 from '../../assets/branches/img1.webp';
import img2 from '../../assets/branches/img-2.webp';
import img3 from '../../assets/branches/img3.webp';
import img4 from '../../assets/branches/img4.webp';
import man from '../../assets/branches/man.webp';
import women from '../../assets/branches/women.webp';


const gyms = [
    {
        id: 1,
        name: 'Gym Oasis',
        image: img1,
        address: '123 Main Street, Cityville',
    },
    {
        id: 2,
        name: 'Gym Oasis',
        image: img2,
        address: '456 Park Avenue, Townsville',
    },
    {
        id: 3,
        name: 'Gym Oasis',
        image: img3,
        address: '789 Fitness Street, Workout City',
    },
    {
        id: 4,
        name: 'Gym Oasis',
        image: img4,
        address: '789 Fitness Street, Workout City',
    },
    {
        id: 5,
        name: 'Gym Oasis',
        image: img4,
        address: '789 Fitness Street, Workout City',
    },
    {
        id: 6,
        name: 'Gym Oasis',
        image: img2,
        address: '789 Fitness Street, Workout City',
    },
];

const Branches = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='branches w-full text-white' id='branches'>
            <div className='branch-head flex justify-center'>
                <h3 className='font-bold text-4xl mt-10'>Our Branches</h3>
            </div>
            <div className='carousel-container'>
                <Slider {...settings}>
                    {gyms.map((gym) => (
                        <div key={gym.id}  className='gym-slide  p-2'>
                            <img src={gym.image} loading='lazy' alt={gym.name} />
                            <div className='gym-info'>
                                <h4 className='font-bold text-xl'>{gym.name}</h4>
                                <p>{gym.address}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* content */}

            <div className="grid grid-cols-1 sm:grid-cols-2  gap-1">
                <div className="col-span-2 sm:col-span-1">
                    <img src={man} alt='man' />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <div className='text-1 p-10'>
                        <h1 className='text-3xl sm:text-5xl font-bold mb-4 mt-0 sm:mt-20'>The Zest Experience</h1>
                        <h4 className='text-base sm:text-lg font-normal mb-6'>
                            The Gym Oasis fitness studio has a wide range of experience in delivering the best services that the fitness lifestyle needs. We have more than 5 years of experience and have 4 branches in Bangalore. Our ultimate goal is to contribute the best services to the fitness community and make a difference in people's lifestyles.
                        </h4>
                    </div>

                </div>
                <div className="col-span-2 sm:col-span-1 ">
                    <div className='text-2 p-10'>
                        <h1 className='text-3xl sm:text-5xl font-bold mb-4 mt-0 sm:mt-20'>
                            Fitness Is for Everyone</h1>
                        <h4 className='text-base sm:text-lg font-normal mb-6'>
                            The Gym Oasis Fitness Studio is a 24/7, a multi-level facility that houses an expansive selection of equipment, the latest in group exercise classes, and resources for a complete wellness experience. We provide a friendly, welcoming atmosphere for all members of all fitness levels from beginners to PRO athletes.  Whether your passion is, cardio, weight training, bodybuilding, powerlifting, CrossFit, or functional training; we have all the equipment and necessary machines you need for results.

                            Come train with us!
                        </h4>
                        <div className='flex justify-center'>
                        <button className='bg-pink-500 h-10 py-3 px-3 flex justify-center items-center hover:text-white'>JOIN NOW</button>
                        </div>
                       
                    </div>

                </div>
                <div className="col-span-2 sm:col-span-1 ">
                    <img src={women} alt='' />
                </div>
            </div>




        </div>
    );
};

export default Branches;
