import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerLists">
        <ul className="footerList">
          <li className="footerListItem">Destinations</li>
          <li className="footerListItem">Accommodations</li>
          <li className="footerListItem">Travel Guides</li>
          <li className="footerListItem">Articles</li>
          <li className="footerListItem">Deals</li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Homes</li>
          <li className="footerListItem">Apartments</li>
          <li className="footerListItem">Resorts</li>
          <li className="footerListItem">Villas</li>
          <li className="footerListItem">Hostels</li>
          <li className="footerListItem">Guest Houses</li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Reviews</li>
          <li className="footerListItem">Travel Communities</li>
          <li className="footerListItem">Seasonal Deals</li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Car Rentals</li>
          <li className="footerListItem">Flight Finder</li>
          <li className="footerListItem">Restaurant Reservations</li>
          <li className="footerListItem">Travel Agents</li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">Customer Service</li>
          <li className="footerListItem">Partner Help</li>
          <li className="footerListItem">Careers</li>
          <li className="footerListItem">Press Center</li>
          <li className="footerListItem">Safety Resources</li>
          <li className="footerListItem">Investor Relations</li>
          <li className="footerListItem">Terms & Conditions</li>
        </ul>
      </div>
      <div className="footerText">© {new Date().getFullYear()} BookingApp. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
