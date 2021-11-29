import React from 'react'
import video from '../videos/home.mp4'
import './Home.css'
function Home() {
    return (
        <>
        <div className="containor">
           
            <video className='videoTag' autoPlay loop muted>
               <source src={video} type='video/mp4' />
           </video>

          <div className="content">
              <h1>
                  Get All products at one place
              </h1>
              <p>
                  We deal in all the necessory products of daily life
              </p>
              <button type="button" className="btn btn-outline-secondary">Shop Now</button>
          </div>

          <button type="button" className="btn btn-outline-secondary">Shop Now</button>
            
        </div>
        </>
    )
}

export default Home