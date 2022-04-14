
import React from 'react';

const CartItem = (props) => {
        // console.log('this.props', this.props);
        const { price, title, qty } = props.product ;
        const { product ,
             onDecreaseQuantity ,
             onIncreaseQuantity ,
             onDelete
            } = props
        return (

            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src={product.img} />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>{price} $</div>
                    <div style={{ color: '#777' }}>Qty :{qty}</div>
                    <div className='cart-item-actions'>
                        {/*buttons*/}
                        <img alt="increase"
                         className='actions-icons' 
                         src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                        onClick={()=> onIncreaseQuantity(product)}
                        />
                        <img alt="decrease" 
                        className='actions-icons' 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                         onClick={()=> onDecreaseQuantity(product)} 
                         />
                        <img alt="delete" 
                        className='actions-icons' 
                        src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png" 
                        onClick={()=> onDelete(product.id)}
                        />
                    </div>
                </div>


            </div>
        );
    }


const styles = {
    image: {
        height: 120,
        width: 120,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;
