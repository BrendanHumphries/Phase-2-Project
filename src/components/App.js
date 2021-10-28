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
  const [cartData, setCartData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    comments: [],
    price: 0
  })

  useEffect(() => {
      fetch('http://localhost:4000/meals')
      .then(resp => resp.json())
      .then(data => {
        setMealsData(data);
      })
  }, []);

  function handleAddToCart(meal) {
    setCartData([...cartData, meal]);
  }

  function handleRemoveFromCart(meal) {
    setCartData(cartData.filter(item => item.id !== meal.id));
  }

  function handleCommentSubmit(event, comment, meal) {
    event.preventDefault();
    fetch(`http://localhost:4000/meals/${meal.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...meal, comments:[...meal.comments, comment]})
    })
    .then(resp => resp.json())
    .then(data => {
      const index = mealsData.findIndex(item => item.id === data.id);
      const mealsDataCopy = [...mealsData];
      mealsDataCopy[index] = data;
      setMealsData(mealsDataCopy);
    })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:4000/meals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => {
      setMealsData([...mealsData, data]);
      setFormData({
        name: '',
        description: '',
        image: '',
        comments: [],
        price: 0
      })
    })
  }
  
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route path='/meals'>
            <Meals mealsData={mealsData} handleAddToCart={handleAddToCart} handleCommentSubmit={handleCommentSubmit}/>
          </Route>
          <Route path='/cart'>
            <Cart cartData={cartData} setCartData={setCartData} handleRemoveFromCart={handleRemoveFromCart}/>
          </Route>
          <Route path='/form'>
            <Form formData={formData} setFormData={setFormData} handleFormSubmit={handleFormSubmit}/>
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