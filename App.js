import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList'
import React,{useState} from 'react';
import Footer from './components/Footer.js'

// import Car from './Car'

// function App(){
//   return (
//     <React.Fragment>
//       <Car />
//     </React.Fragment>
    
//   );
// }


function App() {

  const products = [
    {
      price : 99999,
      name  : 'samsunUltra',
      quantity: 0
    },
    {
      price : 199999,
      name  : 'Iphone15',
      quantity: 0
    },
    {
      price : 19999,
      name  : 'Realmi',
      quantity: 0
    }
  ]

  //will be passing type in useState(), if u are using, obj or arr, then pass, empty obj & arr

 
  
  let [totalAmt, setTotalAmount] =useState(0)
  let [productList, setProductList] = useState(products)

  const incrementQuantity = (index) => {
    let newProductList = [...productList]//spreading using (spred operator)
    let newTotalAmount = totalAmt;
    newProductList[index].quantity++
    newTotalAmount+= newProductList[index].price
    setProductList(newProductList) 
    setTotalAmount(newTotalAmount)
  }

  //Myself, create a dec, function and update the list, and pass it to the hook,
  const decrementQuantity = (index) =>{
    let newProductList = [...productList]
    newProductList[index].quantity >0 ? newProductList[index].quantity-- : newProductList[index].quantity = 0
    let newTotalAmount = totalAmt;
    newProductList[index].quantity >0 ? newTotalAmount -= newProductList[index].price : newTotalAmount=0
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
  }



  return (
    <React.Fragment>
      <Navbar/>
      <main className='container'>
      <ProductList productList = {productList} incrementQuantity = {incrementQuantity} 
                                              decrementQuantity={decrementQuantity} />
      </main>
      
      <Footer totalAmt = {totalAmt}/>
    </React.Fragment>
    
  );
}

export default App;
