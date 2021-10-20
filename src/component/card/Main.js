import React from "react";
import Product from "./Product";
// import "./Product.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProduct: [],
      productName: "",
      itsFor: "",
      Price: "",
      image: "",
      products: null,
      index: 0,
    };
  }
  componentDidMount() {
    let products = [this.props.item]
    if (this.props.type == 'pets') {
      this.setState({
        products: products.map((p) => {

          return (
            <Product
              type={this.props.type}
              pet_desc={this.props.pet_desc}
              item={this.props.item}
              index={this.props.index}
              pet_name={this.props.pet_name}
              pet_img={this.props.pet_img}
              alertForAdoption={this.props.alertForAdoption}
              deletPet={this.props.deletPet}
              showupdatePetForm={this.props.showupdatePetForm}
            />
          );
        }),
      });
    } else if (this.props.type == 'product') {
      this.setState({
        products: products.map((p) => {

          return (

            <Product
              type={this.props.type}
              item={this.props.item}
              deletProduct={this.props.deletProduct}
              handelBuy={this.props.handelBuy}
              showupdateProductForm={this.props.showupdateProductForm}
            />
          );
        }),
      });
    }

  }



  render() {
    // const { user, isAuthenticated } = this.props.auth0;

    return (
      <>
        <div className="productPage">
          <div className="storeProductsContainer">{this.state.products}</div>
        </div>
      </>
    );
  }
}
export default Main;
