import { PropsWithChildren, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './main-header.module.css';
import { RootState } from '../../store/store';
import { selectCartItemsCount } from '../../store/cart/cart.slice';
import Modal from '../modal/modal';
import CartModal from '../../modals/cart/cart-modal';

const MainHeader: React.FunctionComponent<PropsWithChildren> = (): ReactElement => {
  const cartState = useSelector((state: RootState) => state.cart);
  const cartItemsCount = selectCartItemsCount(cartState);

  const [showCart, setShowCart] = useState(false);

  const onCartItemsClickHandler = (): void => {
    setShowCart(true);
  }

  const onCloseModalHandler = (): void => {
    setShowCart(false);
  }

  return (
    <header className={classes.header}>
      <nav>
        <h1>Typed Shop</h1>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/new-product">New Product</Link>
          </li>
        </ul>
      </nav>
      <button onClick={onCartItemsClickHandler}>Cart ({ cartItemsCount })</button>

      <Modal isOpen={showCart} onClose={onCloseModalHandler}>
        <CartModal />
      </Modal>
    </header>
  );
};

export default MainHeader;
