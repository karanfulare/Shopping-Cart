
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9sZXh8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
          id: 3
        }
      ]
    }

  }
  handelIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products
    })
  }
  handelDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products: products
    })
  }
  handelDelete = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]
    this.setState({
      products: items
    })
  }
  getCartCount =()=> {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }
  getTotalPrice=()=>{
    const {products}= this.state;

    let cartTotal = 0;

    products.map((product)=>{
      cartTotal = cartTotal + product.qty * product.price ;
    });
    return cartTotal;
  }
    render () {
      const { products } = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
      products ={products}
      key={products.id}
      onIncreaseQuantity ={this.handelIncreaseQuantity}
      onDecreaseQuantity = {this.handelDecreaseQuantity}
      onDelete = {this.handelDelete}/>
      <div style={{fontSize:20 , padding:10 }}>Total : {this.getTotalPrice()}</div>
    </div>
  );
}
  
}

export default App;
