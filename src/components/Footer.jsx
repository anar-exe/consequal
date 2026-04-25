import React from 'react';
import { siteConfig, socialLinks, contactInfo } from '../data/content';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2>{siteConfig.brandName}</h2>
          <p>{siteConfig.brandTagline}</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Socials</h4>
            <ul>
              {socialLinks.map(link => (
                <li key={link.id}><a href={link.url} target="_blank" rel="noreferrer">{link.platform}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="link-group">
            <h4>Contact</h4>
            <ul>
              {contactInfo.map(info => (
                <li key={info.id}><a href={info.url}>{info.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {siteConfig.copyrightYear} {siteConfig.brandName} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
