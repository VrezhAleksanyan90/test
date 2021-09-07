import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToBag} from '../../store/action-creators';


const Product = ({ id, title, description, image, price, count }) => {
    const [amount, changeAmount] = useState(0)
    const dispatch = useDispatch();
    const onAddToBag = () => {
        if (amount > 0 && amount<= count) {
            dispatch(addToBag({id, amount}));
        }
    }
    return (
        <div className={'product'}>
            <img src={require(`../../assets/images/${image}`).default} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
                <span>{price}</span>
               <input type={'number'}
                      value={amount}
               onChange={({target: {value}}) => changeAmount(+value)}/>
            </p>
            <button
                onClick={onAddToBag}
            >
                Add to bag
            </button>
        </div>
    )
}

export default Product;