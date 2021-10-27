import {useState, useEffect} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "./Header";
import Cart from "./Cart";
import Meals from "./Meals";
import Form from "./Form";
import NavBar from "./NavBar";
import About from './About';

function App() {
  const [mealsData, setMealsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/meals')
        .then(resp => resp.json())
        .then(data => {
          setMealsData(data);
        })
    }, []);
  
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route path='/meals'>
            <Meals mealsData={mealsData}/>
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/form'>
            <Form />
          </Route>
          <Route path='/'>
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;