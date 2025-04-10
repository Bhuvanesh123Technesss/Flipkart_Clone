import React from 'react'

import '../Components/UI/Footer.css'

export default function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="footer-content">
                <div className='flex gap-100'>
                    <p className='whitespace-nowrap'>Privacy Policy | Terms of Service</p>
                    <p className='whitespace-nowrap'>&copy; {new Date().getFullYear()} Flipkart Clone. All rights reserved.</p>
                    <p className='whitespace-nowrap'> Contact Us: support@flipkartclone.com</p>
                </div>
            </div>
        </footer>
    </div>
  )
}
