import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section text-white text-center py-5" style={{ backgroundColor: '#333' }}>
        <div className="container">
          <h1>Welcome to Our Redux Store</h1>
          <p>Shop the latest products and exclusive deals</p>
          <a href="/products" className="btn btn-primary mt-3">Shop Now</a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row">
            {/* Product 1 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                   src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg?text=Product+1"
                   style={{ height: '200px', objectFit: 'contain' }}
                  
                  className="card-img-top"
                  alt="Product 1"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{height:'80px'}}>Mens Casual Premium Slim Fit T-Shirts </h5>
                  <p className="card-text">$29.99</p>
                  <p className='discription' style={{height: '150px'}} >Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                 
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg?text=product+2"
                  style={{ height: '200px', objectFit: 'contain' }}
                  className="card-img-top"
                  alt="Product 2"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{height:'80px'}}>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
                  <p className="card-text">$39.99</p>
                  <p className='discription' style={{height: '150px'}}>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                  <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg?text=Product+3"
                  style={{ height: '200px', objectFit: 'contain' }}
                  className="card-img-top"
                  alt="Product 3"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{height:'80px'}}>Mens Cotton Jacket</h5>
                  <p className="card-text">$49.99</p>
                  <p className='discription' style={{height:'150px'}}>great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.</p>
                  <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="promotion-section text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2>Exclusive Discounts</h2>
          <p>Sign up now and get 10% off on your first order</p>
          <a href="/contact" className="btn btn-outline-success mt-3">Sign Up Now</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
