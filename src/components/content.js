import React from 'react'
import '../scss/content.scss'
import phone1 from '../assets/PhoneStairsBottom.png'
import phone2 from '../assets/PhoneStairsMiddle.png'
import phone3 from '../assets/PhoneStairsTop.png'

export default function content() {

  
  return (
      <div>
          <div className="content">
              <div className="content-left">
                <h1>The newest features and updates.</h1>
                <p>Discover what’s new on Android, with better cross-device messaging, upgrades to Portrait blur in Google Photos, Highlights on Google TV mobile, and more.</p>
                <button>LEARN MORE</button>
              </div>
              <div className="content-right">
                <div id="test">Hello</div>
                <div className="circle blue"></div>
                <img id="phone-1" src={ phone1 } alt="" />
                <div className="circle red"></div>
                <img id="phone-2" src={ phone2 } alt="" />
                <div className="circle green"></div>
                <img id="phone-3" src={ phone3 } alt="" />
              </div>
          </div>
      </div>
  )
}
