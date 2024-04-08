import React from 'react'
import'./style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Briyani from '../assets/briyani.jpeg'
import Logo from '../assets/R.png'
import Tanndori from '../assets/tann.jpeg'
import ChickRice from '../assets/chickrice.jpeg'
import Grill from '../assets/grill.jpeg'
import kothu from '../assets/kothu.jpeg'
import Shwar from '../assets/shawarma.jpeg'
import Soup from '../assets/soups.jpeg'
import Chukka from '../assets/chukka.jpeg'
import Parotta from '../assets/parotta.jpeg'
import Card from '../Component/CardComp/Card'
import CartComp from '../Component/CartComp/CartComp'
import { addData } from '../Main/Module/action'
const home = () => {
  let [food,setFood]=useState('')
  let [quantity,setQuantity]=useState('')
  let [cart,setCart]=useState([])
  let foodItems=[
    {id:'1',food:'briyani',rs:'130',img:Briyani},
    {id:'2',food:'parotta',rs:'20',img:Parotta},
    {id:'3',food:'tandoori',rs:'400',img:Tanndori},
    {id:'4',food:'grill',rs:'460',img:Grill},
    {id:'5',food:'kothu',rs:'100',img:kothu},
    {id:'6',food:'chickenrice',rs:'100',img:ChickRice},
    {id:'7',food:'soup',rs:'80',img:Soup},
    {id:'8',food:'chukka',rs:'130',img:Chukka},
    {id:'9',food:'shwarma',rs:'130',img:Shwar},
  ]
  const addItem=(food,quant)=>{
    let oldInd=foodItems.findIndex((el)=>{
      return food===el.food
    })
    console.log(oldInd);
    let newInd=cart.findIndex((el)=>{
      return el.food.toLowerCase()===food.toLowerCase()
    })
    console.log(newInd);
    if(newInd===-1){
      let newdate= new Date()
      const  pad=((s)=> { return (s < 10) ? '0' + s : s; })
      let result=[pad(newdate.getDate()), pad(newdate.getMonth()+1), newdate.getFullYear()].join('/')
      // console.log(result);
      setCart([...cart,{...foodItems[oldInd],quantity:quant,amount:quant*foodItems[oldInd].rs,date:result}])
      setFood('')
    setQuantity('')
      return null
    }
    let dupCart=[...cart]
    dupCart[newInd].quantity=quant
    dupCart[newInd].amount=cart[newInd].quantity*cart[newInd].rs
    setCart(dupCart)
    setFood('')
    setQuantity('')
    console.log(cart);
}
let dispatch=useDispatch()
const addDatabase=()=>{
  let dataPush=[]
  let data=[...cart]
  // let final=data.map((el)=>{
  //   console.log(el.food);
  // })
   dataPush.push(data)
     console.log(dataPush)
    dispatch(addData(...dataPush))
}
console.log(cart);
let finalRes= useSelector(state=>state.reduce.totalSales)
let final=finalRes.map((el)=>{
   return el.createdOn;
})
console.log(final);
   let total=cart.reduce((tot ,el)=>{
    return tot+el.amount
   },0)

  return (
    <div>
        <div className="nav-container">
          <div className="logos">
          <img src={Logo} style={{width:'100px', height:'60px',marginTop:'4px'}}/>
          <h2>Koorai Kadai</h2>
          </div>

             <p>Pos billing app made by 🙂 Suriyaprakash</p>
        </div>
        <div className="body-container">
          <div className="frist-part">

          <div className="form-container">
            <p>Food Items</p>
            <input type='text' placeholder='Food Name' value={food}onChange={(e)=>setFood(e.target.value)}/><br/>
            <input type='text' placeholder='Quantity' value={quantity}onChange={(e)=>setQuantity(e.target.value)}/><br/>
            <button onClick={()=>addItem(food,quantity)}> Submit</button>
          </div>
          <p>Menu lists</p>

           <div className="menu-list">
           {foodItems.filter((el)=> el.food.toLowerCase().includes(food.toLowerCase())).map((el,ind)=>{
            return<Card key={el.id} name={el}/>
        })}
           </div>
         
        </div>
        <div className="second-part">
          <div className="logos">
          <img src={Logo} style={{width:'100px', height:'60px',marginTop:'4px'}}/>
          <h3>Koorai Kadai</h3>
          </div>
           <div className="table">
             <div className="header">
              <p style={{width:'120px'}}>Items</p>
              <p>Price</p>
              <p>Total</p>
             </div>
             <div className=" inner-cart">
             {
              cart.map((el)=>{
             return<CartComp value={el}/>
              })
             }
             </div>
             <div className="total">
              <p>Total:</p>
              <p style={{fontWeight:'normal'}}>${total}</p>
             </div>
             <button style={{background:'orange',width:'100px', float:'right'}} onClick={addDatabase}>print</button>
           </div>
        </div>
        </div>

        
    </div>
  )
}

export default home