import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: "Phone",
            qty: 2,
            img: ''
        }
    }
    render() {
        const { price, title, qty, img } = this.state;
        return (
          <div className="cart-item">
            <div className="left-block">
              <img src="{img}" alt="" style={styles.image} />
            </div>
            <div className="right-block">
              <div style={{ fontSize: 25 }} className="title">
                {title}
              </div>
              <div style={{ color: "#777" }} className="price">
                Rs: {price}
              </div>
              <div style={{ color: "#777" }} className="quantity">
                Qty: {qty}
              </div>
              <div className="actions">
                <img
                  alt="increase"
                  src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1619690865~hmac=df93efb77eda1fca649cbaa5eff36162"
                  className="action-icons"
                  onClick={increaseQty}
                />
                <img
                  alt="decrease"
                  src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1619691034~hmac=9d21b83e3bdf1a3710d413e0845922d5"
                  className="action-icons"
                />
                <img
                  alt="delete"
                  src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1619691099~hmac=32c7b8ed6f73ffc289b22163dcc6f053"
                  className="action-icons"
                />
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
