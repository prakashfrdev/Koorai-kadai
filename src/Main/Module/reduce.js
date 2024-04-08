let intialState={
    name:'posApp',
    cartItems:[],
    totalSales:[
        {name:'suriya'}
    ]
}
 const reducer=(state=intialState,action)=>{
   switch(action.type){
    case 'addDatabase':
          return{...state,totalSales:[...state.totalSales,{items: action.payload, createdOn: new Date()}]}
    default:
        return state
   }
} 
export default reducer