import React from 'react'
import { AiFillInstagram} from 'react-icons/ai';
import { IoLogoTiktok } from 'react-icons/io5'

const Footer = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="footer-container">
      <p>2022 CapycoStore All rights reserverd</p>
      <p className="icons">
        <button className="footer-icon" onClick={() => openInNewTab('https://www.tiktok.com/@capyplush.co')}>
          <IoLogoTiktok />
        </button>
        <button className="footer-icon">
          <AiFillInstagram />
        </button>
      </p>
    </div>
  )
}

export default Footer