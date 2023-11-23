import React from 'react'
import Produit from './Produit';
import './App.css'
const Image = ({}) => {
  return (
    
    <div><img src={Produit.Image} alt={Produit.Name} /></div>
  )
}

export default Image