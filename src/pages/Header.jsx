import React from 'react'

export default function Header() {
  return (
    <header>
      {/* <hr /> */}
      <section className="name-search">
        <h1 className="name">Violet Dawn</h1>
        <input type="search" />
      </section>
      <section className="contact-cart">
        <h4 className="contact">CONTACT INFO</h4>
        <div>SHOPPING CART"link to"</div>
      </section>
      {/* <hr /> */}
    </header>
  )
}
