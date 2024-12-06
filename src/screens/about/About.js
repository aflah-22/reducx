import React from 'react';

const About = () => {
  return (
    <section className="about-section py-5 bg-light">
      <div className="container">
        <div className="row">
          {/* Heading */}
          <div className="col-12 text-center mb-4">
            <h2>About Our Redux</h2>
            <p className="lead">
              Your one-stop shop for everything you need.
            </p>
          </div>
        </div>

        <div className="row">
          {/* About Content */}
          <div className="col-md-6">
            <h4>Who We Are</h4>
            <p>
              We are a dedicated team of professionals with years of experience in providing high-quality products to our customers. 
              Our mission is to offer the best online shopping experience by delivering top-notch customer service and an extensive 
              range of products at competitive prices.
            </p>
          </div>

          {/* Image */}
          <div className="col-md-6">
            <img
              // src="https://via.placeholder.com/500x300?text=About+Us+Image"
              src="https://via.placeholder.com/500x300?text=About+Us+Image"
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <h4>Our Mission</h4>
            <p>
              To make online shopping easy, accessible, and affordable for everyone. We are committed to building a platform that
              allows our customers to find exactly what they need with just a few clicks, and have it delivered right to their doorstep.
            </p>
          </div>

          <div className="col-md-6">
            <h4>Our Vision</h4>
            <p>
              To become a leader in the e-commerce industry by continuously innovating and adapting to the changing needs of our customers. 
              We strive to create a seamless and enjoyable shopping experience while ensuring the highest level of customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
