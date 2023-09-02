import Cart from './components/Cart/Cart';
import {Fragment, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch} from 'react-redux';
import { uiActions } from './components/store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial=true;
function App() {
  const dispatch=useDispatch();
  const show=useSelector(state=>state.ui.cartIsVisible);
const cart=useSelector(state=>state.cart);
const notification=useSelector(state=>state.ui.notification)
useEffect(()=>{
  const sendCartFunction= async()=>{
    dispatch(uiActions.showNotification({
      status:'Pending',
      title:'Sending...',
      message:'Sending cart data!'
    }))
    const response= await fetch('https://ecommerce-project-f97a2-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body:JSON.stringify(cart),
    })
    if(!response.ok){
      
    dispatch(uiActions.showNotification({
      status:'error',
      title:'Error!',
      message:'Sending cart data failed!'
    }))
    }

    dispatch(uiActions.showNotification({
      status:'Succes',
      title:'Succes!',
      message:'Send cart data succesfully!'
    }))
  }

  if(isInitial){
    isInitial=false;
    return;
  }
  sendCartFunction().catch(error=>{
    dispatch(uiActions.showNotification({
      status:'error',
      title:'Error!',
      message:'Sending cart data failed!'
    }))
  })
},[cart,dispatch])

  return (
    <Fragment>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
     {show && <Cart />}
     
      <Products />
    </Layout>
</Fragment>
  );
}

export default App;