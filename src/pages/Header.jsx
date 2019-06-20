import React from 'react'

export default function Header() {
  return (
    <header>
      <hr />
      <div className="header-container">
        <section className="name-search">
          <h1 className="name">Violet Dawn</h1>
          <input type="search" />
        </section>
        <section className="contact-cart">
          <p className="contact">
            306 Jefferson Ave S<br />
            Oldsmar, FL 34677
            <br />
          </p>
          <div>SHOPPING CART"link to"</div>
        </section>
      </div>
      <hr />
    </header>
  )
}
