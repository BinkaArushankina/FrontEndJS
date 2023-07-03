import React from 'react';
import { useSelector } from 'react-redux';
import { removeAllItems, selectCart } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import CartCard from '../components/CartCard';
import { CardItem } from '../components/Card';

const Cart: React.FC = () => {
    const { items, totalPrice } = useSelector(selectCart);
    const totalCount = items.reduce(
        (acc: number, item: { count: number }) => acc + item.count,
        0
    );

    const dispatch = useDispatch();

    //esli towari > 0 , snatschit wipolnaetsa perwoe uslowie a esli net to false wtoroe
  return (
    <div>
        {items.length > 0 ? (
            <>
                <div>
                    <h1>Cart</h1>
                    <button
                        onClick={() => dispatch(removeAllItems())}
                    >
                        remove cart
                    </button>
                </div>

                <div>
                    {items.map((item: CardItem) => (
                        <CartCard key={item.id} {...item} />
                    ))}
                </div>

                <div>
                    <p>
                        total pizza's:
                        <span>{totalCount} pieces</span>
                    </p>
                    <p>
                        sum of the order:
                        <span>{totalPrice} $</span>
                    </p>
                </div>

                <div>        
                    <a href="#">
                        Pay
                    </a>
                </div>
            </>
        ) : (
            <div>
                <h1> Cart is empty </h1>
                <p>
                    You probably didn't order pizza. To order a pizza, go to the home page.
                </p>
            </div>
        )}    
    </div>
  );
};

export default Cart;