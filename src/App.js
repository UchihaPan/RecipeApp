import './App.css'
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Search from './pages/Search';
import Create from './pages/Create';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector'

import { BrowserRouter as Router, Route, Link, Switch} 
        from "react-router-dom";

        import useTheme from './hooks/useTheme'
function App() {
  const { color ,thor} = useTheme()
  console.log(color);

  return (
    <div className="App">
    <Router>
    <Navbar/>
    <ThemeSelector/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/create'>
          <Create/>
        </Route>
        <Route exact path='/search'>
          <Search/>
        </Route>
        <Route exact path='/recipe/:id'>
          <Recipe/>
        </Route>
      </Switch>
    </Router>

      
    </div>
  );
}

export default App
