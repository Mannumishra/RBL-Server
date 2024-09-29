import React from 'react';
import './QuickLinks.css';
import doc1 from '../../Images/doc1.svg'
import doc2 from '../../Images/doc2.svg'
import doc3 from '../../Images/doc3.svg'
import doc4 from '../../Images/doc4.svg'
const QuickLinks = () => {
  const links = [
    { title: 'Digital Lending', icon: doc1, href: '#' },
    { title: 'Most Important Terms and Conditions', icon: doc2, href: '#' },
    { title: 'Vernacular Most Important Terms for Credit Cards', icon: doc2, href: '#' },
    { title: 'Cardmember Agreement', icon: doc3, href: '#' },
    { title: 'Vernacular Cardmember Agreement for Credit Cards', icon: doc3, href: '#' },
    { title: 'Redeem your Points', icon: doc4, href: '#' },
  ];

  return (
    <div className='pt-5 pb-5' style={{background:'#f4f5fc'}}>
      <div className="container mt-4">
        <h1 className="mb-5">Quick Links</h1>
        <div className="row">
          {links.map((link, index) => (
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4 d-flex" key={index}>
              <a href={link.href} className="quick-link card text-center py-4 w-100 h-100">
                <img className="quick-link-icon" src={link.icon} alt="" />
                <div className="quick-link-title mt-2">{link.title}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
