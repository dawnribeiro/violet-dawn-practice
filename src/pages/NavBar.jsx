import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <section>
      <ul className="flowers-menu">
        <li>
          <Link to="/roses">Roses</Link>
        </li>
        <li>
          <Link to="/lilies">Lilies</Link>
        </li>
        <li>
          <Link to="/tulips">Tulips</Link>
        </li>
        <li>
          <Link to="/sunflowers">Sunflowers</Link>
        </li>
        <li>
          <Link to="/carnations">Carnations</Link>
        </li>
      </ul>
    </section>
  )
}
