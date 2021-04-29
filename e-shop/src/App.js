import React from 'react';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import {Route, Switch, Redirect} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user-actions'
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null

  //called once when the app was just rendered
  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        }); 
      } else {
        setCurrentUser(userAuth);
      }
      

      // console.log("logged user is: ", user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        {/* <Header currentUser={this.state.currentUser}/> */}
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route 
            exact 
            path='/signin' 
            render={() => 
              this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
