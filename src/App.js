import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Blogs from './views/Blogs';
import Health from './views/Health';
import Wealth from './views/Wealth';
import Wisdom from './views/Wisdom';

import Header from './components/Header';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <div className='App'>
        <div className='max-w-7xl min-h-screen mx-auto py-6 sm:px-6 lg:px-8'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route exact path='/blogs'>
              <Blogs />
            </Route>
            <Route path='/blogs/health'>
              <Health />
            </Route>
            <Route path='/blogs/wealth'>
              <Wealth />
            </Route>
            <Route path='/blogs/wisdom'>
              <Wisdom />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetail />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
