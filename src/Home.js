import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Slider from './Slider'
import {CartState} from './context/Context'
import Singleproduct from './Singleproduct'
import Categories from './Categories'

function Home() {
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

 
 <Categories/>
<div className="productContainer">
    {products.map((prod)=>{
      return <Singleproduct prod={prod} key={prod.id}/>
    })}
</div> 

        </div>
        
    )
}

export default Home
