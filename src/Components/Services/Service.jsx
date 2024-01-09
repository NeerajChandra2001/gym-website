import React from 'react';
import './service.css';
import general from '../../assets/service/general.webp'
import personal from '../../assets/service/personal.webp'
import group from '../../assets/service/group.webp'
import hiit from '../../assets/service/hiit.webp'


const Service = () => {
  return (
    <>
      <div className='service text-white' id='service'>
        <div className="grid grid-cols-1 grid-rows-2 gap-0 sm:gap-5 p-10">
          <div className='service-head flex justify-center items-center '>
            <h1 className='font-bold text-4xl mt-0 sm:mt-10'>Our Services</h1>
          </div>
          <div className='service-text'>
            <h4 className='text-center text-pretty'>
              The Zest Fitness Studio is a 24/7, a multi-level facility that houses an expansive selection of equipment, the latest in group exercise classes, and resources for a complete wellness experience. We provide a friendly, welcoming atmosphere for all members of all fitness levels from beginners to PRO athletes. Whether your passion is cardio, weight training, bodybuilding, powerlifting, CrossFit, or functional training; we have all the equipment and necessary machines you need for results.

              Come train with us!
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4  gap-4">
            <div>
              <div className="card bg-gray-600">
                <img src={general} alt="Avatar" loading='lazy' style={{ width: '100%' }} />
                <div className="container">
                  <h4><b>General Training</b></h4>
                  <p>Gym Oasis</p>
                </div>
              </div>
            </div>
            <div>
            <div className="card bg-gray-600">
                <img src={personal} alt="Avatar" loading='lazy' style={{ width: '100%' }} />
                <div className="container">
                  <h4><b>Personal Training</b></h4>
                  <p>Gym Oasis</p>
                </div>
              </div>
            </div>
            <div>
            <div className="card bg-gray-600">
                <img src={group} alt="Avatar" loading='lazy' style={{ width: '100%' }} />
                <div className="container">
                  <h4><b>Group Training</b></h4>
                  <p>Gym Oasis</p>
                </div>
              </div>
            </div>
            <div>
            <div className="card bg-gray-600">
                <img src={hiit} alt="Avatar" loading='lazy' style={{ width: '100%' }} />
                <div className="container">
                  <h4><b>HIIT Training</b></h4>
                  <p>Gym Oasis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
