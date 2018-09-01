import React, { Component } from "react";
import OrderForm from "../../components/OrderForm/OrderForm";
import { connect } from "react-redux";

class OrderFormContainer extends Component {

  handleSubmit = values => {
    console.log(values)
  };

  render() {
    return (
      <OrderForm onSubmit={this.handleSubmit} />
    );
  }
}

/*const mapDispatchToProps = dispatch => ({

});*/

export default connect()(OrderFormContainer);
