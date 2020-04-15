import React from "react";
import PropTypes from "prop-types";

class BurgerIngredients extends React.Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = (
          <div
            className="w-auto p-5 mt-1 bg-secondary rounded-top"
            style={{
              background: "linear-gradient(#F08E4A, #e27b36)",
              borderRadius: '75%',
            }}
          ></div>
        );
        //    ingredient = <div className="w-100 p-4 mt-1 bg-secondary rounded-pill" ></div>
        break;
      case "bread-top":
        //                ingredient = <div className="w-200 p-5 mt-1 bg-secondary rounded-bottom" style={{borderRadius: 200 +'px'}}></div>
        ingredient = (
          <div
            className="p-5 mt-1 bg-secondary rounded-bottom"
            style={{
              background: "linear-gradient(#F08E4A, #e27b36)",
              borderRadius: "75%",
            }}
          ></div>
        );
        break;
      case "meat":
        ingredient = (
          <div className="w-100 p-1 bg-danger rounded-pill  mt-1"></div>
        );
        break;
      case "cheese":
        ingredient = (
          <div className="w-100 p-1 bg-warning rounded-pill mt-1"></div>
        );
        break;
      case "salad":
        ingredient = (
          <div className="w-100 p-1 bg-success rounded-pill mt-1"></div>
        );
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
