import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>    
            </LogoContainer> 
            <OptionsContainer>
                <OptionLink to='/shop'> SHOP </OptionLink>
                <OptionLink to='/shop'> CONTACT </OptionLink>
                {/* <Link className='options' to='/shop'> SHOP </Link> */}
                {
                    currentUser ? 
                    <OptionLink as='div' onClick={() => auth.signOut()} > SIGN OUT </OptionLink>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown/>
            }
        </HeaderContainer>
    )
}

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
