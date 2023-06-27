import React from 'react'
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cartSlice';

const HeaderCart: React.FC = () => {

    const { totalPrice, items } = useSelector(selectCart)
    //console.log('totalPrice =' + totalPrice, 'items =' + items);
    const totalCount = items.reduce(
        (acc: number, item: {count: number}) => acc + item.count, 
        0//budet pojawlatsa zifra 2 pri sakase 2 piz + potom dasakasal i k acc(2) budet dobawleno escho schto tschel wibral(item.count)
    );

  return (
    <>
    <div>
        <span>{totalPrice} $</span>
    </div>
    <div>
        <span>
            <img 
                src="" 
                alt="icon storage" 
            />
            {totalCount}
        </span>
    </div>
    </>
  );
};

export default HeaderCart;