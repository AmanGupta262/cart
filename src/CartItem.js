import React from "react";

class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src="" alt="" style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} } className="name">Phone</div>
                    <div style={ {color: '#777'} } className="price">Rs: 999</div>
                    <div style={ {color: '#777'} } className="quantity">Qty: 2</div>
                    <div className="actions">
                        <div className="action-icons"></div>
                        <div className="action-icons"></div>
                        <div className="action-icons"></div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    },
};

export default CartItem;
