import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Firebase/firebase'


const Navbar = () => {

    return (
        <div className='navbar'>
            <div>
                <nav className='navbar__nav'>
                    <h3 className='nav__brand'>
                        <Link to='/'>
                        <i class="fas fa-film"></i>
                            ReactTV
                        </Link>
                    </h3>
                    <ui className='nav__links'>
                        <li className='links__link'>
                            <Link to ='/'>HOME <i class="fas fa-home"></i> </Link>
                        </li>
                        <li className='links__link'>
                            <Link to ='/library'>FAVORITES <i class="fas fa-heart"></i></Link>
                        </li>
                        <li>
                        <Link to='/'><button className='btn_logout' onClick = { () => auth.signOut() }><i class="fas fa-sign-out-alt"></i></button></Link>
                        </li>
                    </ui>
                </nav>
            </div>
        </div>
    )
}





export default Navbar
