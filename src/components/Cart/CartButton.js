import classes from './CartButton.module.css';
import { uiActions } from '../store/ui-slice';
import { useDispatch,useSelector } from 'react-redux';
const CartButton = (props) => {
    const cartquantity=useSelector(state=>state.cart.totalQuantity)
    const dispatch=useDispatch();
    function onToggleClick(){
dispatch(uiActions.toggle())
    }
  return (
    <button className={classes.button} onClick={onToggleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartquantity}</span>
    </button>
  );
};

export default CartButton;