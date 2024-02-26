import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="wrapper">
            <div className="footer_text">
                <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                <p>CHEMICALS & PROCESS | POWER | WATER & WATER WASTE | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | <br/> PETEROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTAL </p>
            </div>
            <div className="footer_links">
                <ul>

                    <li><i class="fa-solid fa-phone"></i> Toll free <span>1800 200 1234</span></li>

                    <li><a href="#"><i class="fa-brands fa-facebook"></i> www.facebook.com/cripumps</a></li>

                    <li><a href="3"><i class="fa-solid fa-globe"></i>www.cirgroups.com</a></li>

                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
