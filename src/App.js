import './App.css';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import PaymentOption from './Pages/PaymentOption'
import MenuAppBar from './Components/ProfileBar';
import ThankYou from './Pages/ThankYou';
import { Hidden } from '@material-ui/core';
import DeskMenuAppBar from './Components/Homepage/Appbar';
import DeskCenteredTabs from './Components/Homepage/Tabs';

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}

      <header className="App-header">
      <Hidden only={['md', 'lg', 'xl']}>
      <MenuAppBar/>
      
        </Hidden>

        <Hidden only={['sm', 'xs']}>
      <DeskMenuAppBar/>
      <DeskCenteredTabs/>
        </Hidden>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/PaymentOption'}  > <PaymentOption/> </Route>
            <Route path={process.env.PUBLIC_URL + '/ThankYou'}  > <ThankYou/> </Route>
          </Switch>
    </div>
  );
  }

export default App;