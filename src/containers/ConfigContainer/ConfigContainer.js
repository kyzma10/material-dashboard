import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrderList } from "../../actions/orderAction";
import OrderList from "../../components/OrderList/OrderList";

class ConfigContainer extends Component {

  componentDidMount() {
    this.props.getOrderList();
  }

  render() {
    const {orderList} = this.props;
    return (
      <OrderList
        orderList={orderList}
        moveUp={this.moveUp}
        moveDown={this.moveDown}
        removeElem={this.removeElem}
      />
    );
  }

  moveUp = (id) => {
    console.log("MOVE UP", id)
  };

  moveDown = (id) => {
    console.log("MOVE DOWN", id)
  };

  removeElem = (id) => {
    console.log("REMOVE ELEM", id)
  }
}

const mapStateToProps = state => ({
  orderList: state.order.orderList
});

const mapDispatchToProps = dispatch => ({
  getOrderList: ()=> dispatch(getOrderList())
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfigContainer);