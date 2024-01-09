import React from 'react'
import './facility.css'
import nutritionist from '../../assets/facilities/NUTRITIONIST.webp'
import shower from '../../assets/facilities/shower.webp'
import steam from '../../assets/facilities/steam.webp'
import wifi from '../../assets/facilities/wifi1.webp'




const Facilities = () => {
    return (
        <>
            <div className='facility text-white ' id='facilities'>
                <div className="grid grid-cols-1 grid-rows-2 gap-0 sm:gap-5 p-10">
                    <div className='service-head flex justify-center items-center '>
                        <h1 className='font-bold text-4xl mt-0 sm:mt-10'>Our Facilities</h1>
                    </div>
                    <div className='facility-text'>
                        <h4 className='text-center text-pretty'>
                            The Gym Oasis fitness studio has a wide range of experience in delivering the best services that the fitness lifestyle needs. we have more than 5 years of experience and have 4 branches in Bangalore. our ultimate goal is to contribute the best services to the fitness community and make difference in people's lifestyles.

                            Come train with us!
                        </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4  gap-4">
                        <div>
                        <div className="card bg-gray-600 hover:bg-gray-700 transition transform hover:scale-105">
                                <img src={shower} alt="Avatar" loading='lazy' style={{ width: '100%' }} />
                                <div className="container">
                                    <h4><b>Shower</b></h4>
                                    <p>Gym Oasis</p>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="card bg-gray-600 hover:bg-gray-700 transition transform hover:scale-105">
                                <img src={wifi} alt="Avatar" loading='lazy' style={{ width: '100%' }} />
                                <div className="container">
                                    <h4><b>Free Wifi</b></h4>
                                    <p>Gym Oasis</p>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="card bg-gray-600 hover:bg-gray-700 transition transform hover:scale-105">
                                <img src={steam} alt="Avatar" loading='lazy' style={{ width: '100%' }} />
                                <div className="container">
                                    <h4><b>Steam Bath</b></h4>
                                    <p>Gym Oasis</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-gray-600 hover:bg-gray-700 transition transform hover:scale-105">
                                <img src={nutritionist} alt="Avatar" loading='lazy' style={{ width: '100%' }} />
                                <div className="container">
                                    <h4 className="text-white"><b>Nutritionist</b></h4>
                                    <p className="text-white">Gym Oasis</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Facilities