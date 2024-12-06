import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#fff' }} className="py-4">
      <div className="container">
        <div className="row">
          {/* Column 1: About */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are an e-commerce platform dedicated to providing the best products and services.
              Shop with us for a great experience.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="/products" className="text-light">Shop</a></li>
              <li><a href="about" className="text-light">About Us</a></li>
              <li><a href="contact" className="text-light">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p><i className="bi bi-envelope"></i> support@ecommerce.com</p>
            <p><i className="bi bi-telephone"></i> +123 456 789</p>
            <p><i className="bi bi-geo-alt"></i> 123 Main Street, Anytown</p>
          </div>
        </div>

        <hr className="my-3" />

        {/* Footer bottom */}
        <div className="text-center">
          <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
