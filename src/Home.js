import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import {CartState} from './context/Context'
import Singleproduct from './Singleproduct'
import Categories from './Categories'
import App from './App'

function Home(props) {
    // const {
    //     state:{products},
    //     }
    //     =CartState();

    //     console.log(products)

        const 
        {state:{products}
        ,}=CartState();

        console.log(products)
        
    return (
        
<div className="home">

 
 
<div className="productContainer">
<Categories/>
     <div className="productContainer">
    {products.filter(products=>products.category=props.category).map((prod)=>{
      return <Singleproduct prod={prod} key={prod.id}/>
    })}
</div> 
</div> 

        </div>
        
    )
}

export default Home
