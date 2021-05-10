import React from "react";
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from "firebase";
import "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
    this.db = firebase.firestore();
  }
  componentDidMount(){
    this.db
      .collection("products")
      .orderBy('price')
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });

        this.setState({
          products,
          loading: false,
        });
      });
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(docRef => console.log('Updated Successfully'))
      .catch(err => console.log("Error : ", err))
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty < 1)
      return;
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(docRef => console.log('Updated Successfully'))
      .catch(err => console.log("Error : ", err))
  };

  handleDeleteProduct = (id) => {

    const docRef = this.db.collection("products").doc(id);
    docRef
      .delete()
      .then((docRef) => console.log("Deleted Successfully"))
      .catch((err) => console.log("Error : ", err));
  };

  getProductCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  }

  getTotalPrice = () => {
    const { products } = this.state;
    let price = 0;

    products.forEach(product => {
      price += product.qty * product.price;
    });

    return price;
  }
  addProduct = () => {
    this.db
      .collection('products')
      .add({
        title: "Washing Machine",
        qty: 1,
        img: '',
        price: 19999
      })
      .then(docRef => console.log('New product added : ', docRef))
      .catch(err => console.log("Error : ", err));
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getProductCount()} />
        {/* {<button style={{"padding": "1rem", "margin": "1rem"}} onClick={this.addProduct}>Add a Product</button>} */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading products...</h1>}
        <div className="total">Total Price: Rs. {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
