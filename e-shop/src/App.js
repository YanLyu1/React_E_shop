import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import {Route, Switch} from 'react-router-dom'

const HastsPage = () => {
  <div>
    <h1> Hats page</h1>
  </div>
}

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
