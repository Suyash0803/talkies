
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
// import Header from './components/Header'
import Header from './components/Header';
import Homepage from './home/Homepage';
import SinglePage from './components/watch/SinglePage';
import Footer from './components/footer/Footer';
import Aboutpage from './About/Aboutpage';
import Pricing from './pricing/Pricing';
import Movies from './Movies/Movies';
import Form from './Form/Form';
import Login from './Login/Login';
function App() {
  return (
   <>
   <Router>
   <Header/>
    <Switch>
       <Route to exact path='/' component={Homepage}/>
       <Route to exact path='/singlePage/:id' component={SinglePage}/>
       <Route to exact path='/about' component={Aboutpage}/>
        <Route to exact path='/subs' component={Pricing}/>
        <Route to exact path='/movies' component={Movies}/>
        <Route to exact path='/login' component={Form}/>
        <Route to exact path='/Login' component={Login}/>
    </Switch>
    <Footer/>
   </Router>
   </>
  );
}

export default App;
