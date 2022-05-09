import React from 'react'
import '../scss/content.scss'

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
                <div className="circle blue"></div>
                <div className="circle red"></div>
                <div className="circle green"></div>
              </div>
          </div>
      </div>
  )
}
