import React from 'react'
import './Categories.css';

const Categories = () => {
    return (
        <div className="categories">
        <span className="title">Categories</span>
         <span class="active">All</span>
         <span className="category">Electronics</span>
         <span className="category">Clothes</span>
         <span className="category">Entertainment</span>  
         <span className="category">Chairs</span>   
        </div>
    )
}

export default Categories
