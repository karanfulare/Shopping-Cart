import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/app';








class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading:true
    }
    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db
      .collection("products")
      // .where("price", "==", 999)
      // .where("title", "==", "Mug")
      .orderBy("price", "desc")
      .onSnapshot(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }
  handelIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products: products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty: products[index].qty +1
    })
    .then(()=>{
      console.log('updated Successfully');
    })
    .catch((error)=>{
      console.log('error on update',error);
    })
  }

  handelDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    // products[index].qty -= 1;

    // this.setState({
    //   products: products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
        
    docRef
    .update({
      qty:products[index].qty -1
    })
    .then(()=>{
      console.log('updated');
    })
    .catch((error)=>{
      console.log('error on decrease', error);
    })

  }
  handelDelete = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id); // [{}]
    // this.setState({
    //   products: items
    // })
    const docRef = this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(()=>{
      console.log('deleted');
    })
    .catch((error)=>{
      console.log('error on decrease', error);
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
      if(product.qty > 0){
      cartTotal = cartTotal + product.qty * product.price ;
      }
      return '';
    });
    return cartTotal;
  }

  addProduct=()=>{
    this.db
    .collection('products')
    .add({
      img:'',
      price:999,
      qty:4,
      title: 'phone'
    })
    .then((docRef)=>{
console.log('product added',docRef);
    })
    .catch((error)=>{
      console.log('error',error);
    })
  }
    render () {
      const { products, loading } = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <button onClick={this.addProduct}>Add a Product</button>
      <Cart 
      products ={products}
      key={products.id}
      onIncreaseQuantity ={this.handelIncreaseQuantity}
      onDecreaseQuantity = {this.handelDecreaseQuantity}
      onDelete = {this.handelDelete}/>
      {loading && <h1>Loading Products....</h1>}
      <div style={{fontSize:20 , padding:10 }}>Total : {this.getTotalPrice()}</div>
    </div>
  );
}
  
}

export default App;
