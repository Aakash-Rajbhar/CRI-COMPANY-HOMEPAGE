import React from 'react'
import './Machines.css'
import img3 from '../../assets/3.png'

const Machines = () => {
  return (
    <div className='machines'>
        <div className="wrapper">
            <div className="machines_section_heading">
                <h4>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h4>
            </div>
            <div className="machines_img">
                <img src={img3} alt="Pumps Image" />
            </div>
            <div className="machines_list">
                <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
            </div>
        </div>
    </div>
  )
}


export default Machines
