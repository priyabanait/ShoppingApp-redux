
import { uiActions } from "./ui-slice"
import { cartAction } from "./cart-slice";
export function fetchCartData(){
return async(dispatch)=>{
    const fetchData=async()=>{
        const response=await fetch('https://ecommerce-project-f97a2-default-rtdb.firebaseio.com/cart.json');
        if(!response.ok){
            throw new Error('failed to fetch')
        }
        const data= await response.json();
        return data;

    }
    try {
       const cartData=await fetchData();
       dispatch(cartAction.replaceCart(cartData))
    } catch (error) {
        dispatch(uiActions.showNotification({
            status:'error',
            title:'Error!',
            message:'Sending cart data failed!'
          })) 
    }
}
}
export function sendCartData(cart){
    return async (dispatch)=>{
         dispatch(uiActions.showNotification({
            status:'Pending',
            title:'Sending...',
            message:'Sending cart data!'
          }))
    
          async function sendRequest(){
            const response= await fetch('https://ecommerce-project-f97a2-default-rtdb.firebaseio.com/cart.json',{
                method:'PUT',
                body:JSON.stringify(cart),
              })
              if(!response.ok){
                
              throw new Error('failed to fetch')
              }
          }
          try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status:'Succes',
                title:'Succes!',
                message:'Send cart data succesfully!'
              }))
          } catch (error) {
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'Sending cart data failed!'
              }))
          }
         
          
    }
    }