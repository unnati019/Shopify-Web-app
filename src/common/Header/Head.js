import React from 'react';

const Head = () => {
  return (
    <>
       <section className="head">
          <div className="container d_flex">
            <div className="left row">
              <i className="fa fa-phone"></i>
              <label>+880 123 4577</label>
              <i className="fa fa-envelope"></i>
              <label>Shopify@gmail.com</label>
            </div>
            <div className="right row RText">
                <label>Theme FAQ's</label>
                <label>Need Help</label>
                <span>🏳️</span>
                <label htmlFor=''>EN</label>
                <span>🏳️</span>
                <label htmlFor=''>IND</label>
            </div>
          </div>
       </section>
    </>
  )
}

export default Head;