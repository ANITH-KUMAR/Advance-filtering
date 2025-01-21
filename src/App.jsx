import { useState } from "react"
import Nav from "./Navigation/Nav"
import Products from "./Products/Products"
import data from "./db/data"
import Recommend from "./Recommended/Recommend"
// import Colors from "./sidebar/colors/Colors"
// import Price from "./sidebar/Price/Price"
import Sidebar from "./sidebar/Sidebar"
import Card from "./Components/Card"
import './index.css'

//Database

const App = () => {
  const [selectcategory,setselectcategory]=useState(null)

  //----input filter
  const [query,setquery]=useState("")

  const handleinputchange=(e)=>{
     setquery(e.target.value);
  }

  const filteredItems = data.filter((product) =>
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
);

  //---radio filters
  const handlechange=event=>{
    setselectcategory(event.target.value)
  }

  //filters buttons
  const handleclick=event=>{
    setselectcategory(event.target.value)
  }

  function fillteredData(products,selected,query){
    let fillteredproducts=products;

    //filtering input items
    if(query){
      fillteredproducts=filteredItems;
    }
    //selected Filter
    if(selected){
        fillteredproducts=fillteredproducts.filter(({category,color,company,title,newPrice})=>category===selected || color===selected || company==selected || newPrice===selected || title===selected
      )
    }

    return fillteredproducts.map(({img,title,star,reviews,newPrice,prevPrice})=>(
      <Card key={Math.random()} 
      img={img} 
      title={title}
      star={star} 
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
    ))
  }

const result=  fillteredData(data,selectcategory,query);

  return (
    <>
    <Sidebar handlechange={handlechange}/>
    <Nav query={query} handleinputchange={handleinputchange}/>
    <Recommend handleclick={handleclick}/>
    <Products result={result}/>
    </>
  )
}

export default App