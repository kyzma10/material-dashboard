import React, { Component } from "react";
import OrderForm from "../../components/OrderForm/OrderForm";
import { connect } from "react-redux";
import { addPurchase } from "../../actions/orderAction";

class OrderFormContainer extends Component {

  handleSubmit = values => {
    // console.log(values);
    this.props.addPurchase(values);
  };

  render() {
    return <OrderForm onSubmit={this.handleSubmit} />;
  }
}

const mapDispatchToProps = dispatch => ({
  addPurchase: value => dispatch(addPurchase(value))
});

export default connect(null, mapDispatchToProps)(OrderFormContainer);
