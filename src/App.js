
import './App.css';
import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Produit from './Produit';
// import card in cards bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


function App() {
  var firstName=""
  // FUNCTION return le non crée par le promt et l'ajouter dans le variable  fristName 
  const newname=()=>{
    let a = prompt('Créer votre nom ');
    firstName=a
  }
  newname()

  return (
   <div id="rr"> 
       {/* container have card  constitut d'une image , name , price de prouit et une escription et une  autre image  */}
      <div className='cont'>
      
       <div>
          
         <Card className='AA'style={{ width: '20rem' }}>
           <Card.Img variant="top" id='img 'src={Produit.Image}  />
           <Card.Body>
             <Card.Title><Name nom={Produit.nom} /></Card.Title>
             <Card.Text>
             <Price prix={Produit.prix} />
             <Description descripteion={Produit.Description} />
             </Card.Text>
           </Card.Body>
         </Card>
       </div>
       <div>
         <img src='https://img.fruugo.com/product/8/97/795594978_max.jpg' id='bag'/>
       </div>
      </div>
      {/* Display a message below the card that says Hello, then your first name, or if you didn’t yet provide your first name, display “Hello, there!” */}
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h2>Hello, {firstName ? firstName : 'there!'} !</h2>
        {/* Display an image if the first name is provided. */}
        {firstName && <img src="https://www.laveran-paris.com/img/cms/histoire-transformed.jpeg" id='s' /> } 
      </div>
   </div>)
}

export default App;