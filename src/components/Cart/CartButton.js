import classes from './CartButton.module.css';
import { uiActions } from '../store/ui-slice';
import { useDispatch } from 'react-redux';
const CartButton = (props) => {
    const dispatch=useDispatch();
    function onToggleClick(){
dispatch(uiActions.toggle())
    }
  return (
    <button className={classes.button} onClick={onToggleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;