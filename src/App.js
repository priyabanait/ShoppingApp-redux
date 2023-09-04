import Cart from './components/Cart/Cart';
import {Fragment, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch} from 'react-redux';
import { fetchCartData,sendCartData } from './components/store/cart-action';
import Notification from './components/UI/Notification';

let isInitial=true;
function App() {
  const dispatch=useDispatch();
  const show=useSelector(state=>state.ui.cartIsVisible);
const cart=useSelector(state=>state.cart);
const notification=useSelector(state=>state.ui.notification);

useEffect(()=>{
dispatch(fetchCartData());
},[dispatch])
useEffect(()=>{
 if(isInitial){
  isInitial=false
  return;
 }
 dispatch(sendCartData(cart))
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