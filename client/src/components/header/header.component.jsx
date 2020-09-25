import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'
import { openMenu, closeMenu, toggleMenu } from '../../redux/menu/menu.actions'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'
import { selectMenuOpen } from '../../redux/menu/menu.selectors'
import './header.styles.scss'

class Header extends React.Component {
  state = {
    isMenuOpen: false
  }

  render() {
    const breakpoints = {
      mobile: 800
    }
    const { currentUser, hidden, signOutStart } = this.props
    const { isMenuOpen } = this.state

    return (
      <div className='header-container'>
        <div className='logo-container'>
          <h1
            className='header-title'
            style={{
              fontWeight: 'lighter',
              fontSize: '84px',
              marginTop: '250px',
              marginLeft: '20px'
            }}>
            Simply Beautiful
          </h1>
          <p className='header-subtitle'>FLORAL ARRANGEMENTS</p>
        </div>
        <div className='info-container'>
          <div className='info'>
            <i id='fontawesome-icon' className='fas fa-crosshairs'></i> 1234
            Main Street, San Francisco, CA 94116
          </div>

          <div className='info'>
            {' '}
            <i id='fontawesome-icon' className='fas fa-phone'></i> (xxx)
            xxx-xxxx
          </div>

          <div className='info'>
            <i id='fontawesome-icon' className='fas fa-envelope-open'></i>{' '}
            flowers@shoppingsite.com
          </div>
        </div>
        <div className='options-container' isOpen={isMenuOpen}>
          <Link className='option-link' to='/shop'>
            <p>HOME</p>
          </Link>
          <Link className='option-link' to='/shop'>
            <p>SHOP</p>
          </Link>
          <Link className='option-link' to='/contact'>
            <p>CONTACT</p>
          </Link>
          {currentUser ? (
            <Link className='option-link' as='div' onClick={signOutStart}>
              <p>SIGN OUT</p>
            </Link>
          ) : (
            <Link className='option-link' to='/signin'>
              <p>SIGN IN</p>
            </Link>
          )}

          <CartIcon />
        </div>

        {window.innerWidth < breakpoints.mobile ? (
          <div className='desktop-cart-icon'>
            <CartIcon />
          </div>
        ) : (
          <div className='desktop-cart-icon'>
            <CartIcon />
          </div>
        )}

        <div className='hamburger' onClick={this.openMenu}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  isMenuOpen: selectMenuOpen
})

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),

  closeMenu: () => dispatch(closeMenu()),
  openMenu: () => dispatch(openMenu()),
  toggleMenu: () => dispatch(toggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
