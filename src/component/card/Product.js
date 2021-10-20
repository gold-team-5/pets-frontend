import React from "react";
import Card from "react-bootstrap/Card";

import "./StorePetsCard.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMo: false,
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className="ourAdopteesContainer">
            <div className="ourAdoptees">
              {
                this.props.type == 'pets' &&
                <Card>
                  <div className="cardBodyAndShadow"></div>
                  <Card.Img variant="top" src={this.props.pet_img} height="180" style={{ width: "auto", margin: "1rem", borderRadius: "16px", objectFit: "cover" }} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="titleAndAge">
                      <div>Name : {this.props.pet_name}</div>
                      
                    </Card.Title>
                    <Card.Text>Description : {this.props.item.pet_desc}</Card.Text>

                    <div className="mt-auto ButtonContainer">
                      {/* <Example image={this.props.image} productName={this.props.productName} Price={this.props.Price} addtoCart={this.props.addtoCart} cartProduct={this.props.cartProduct} removeItem={this.props.removeItem} index={this.props.index} clearCart={this.props.clearCart} /> */}
                      <button onClick={() => this.props.alertForAdoption(this.props.index)} > adopt </button>

                    </div>

                    <div className="mt-auto ButtonContainer">
                      <button onClick={() => this.props.deletPet(this.props.index)} > delete </button>

                    </div>

                    <div className="mt-auto ButtonContainer">
                      <button onClick={() => this.props.showupdatePetForm(this.props.index, this.props.item)}> update </button>

                    </div>

                  </Card.Body>
                </Card>
              }
              {/* //             // // props.showupdateProductForm(index, item)
// // props.handelBuy(item)
// // props.deletProduct(item.id)
// // {item.product_price} {item.product_desc} {item.product_name} src={item.product_img}
//               <Main type={"product"} item={item} deletProduct={props.deletProduct} handelBuy={props.handelBuy} showupdateProductForm={props.showupdateProductForm}    />
//             //  */}

{
                this.props.type == 'product' &&
                <Card>
                  <div className="cardBodyAndShadow"></div>
                  <Card.Img variant="top" src={this.props.item.product_img} height="180" style={{ width: "auto", margin: "1rem", borderRadius: "16px", objectFit: "cover" }} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="titleAndAge">
                      <div>Name : {this.props.item.product_name}</div>
                      <div>Price : {this.props.item.product_price} $</div>
                    </Card.Title>
                    <Card.Text>Description : {this.props.item.product_desc}</Card.Text>

                    <div className="mt-auto ButtonContainer">
                      {/* <Example image={this.props.image} productName={this.props.productName} Price={this.props.Price} addtoCart={this.props.addtoCart} cartProduct={this.props.cartProduct} removeItem={this.props.removeItem} index={this.props.index} clearCart={this.props.clearCart} /> */}
                      <button onClick={() => this.props.handelBuy(this.props.item)} > Buy </button>

                    </div>

                    <div className="mt-auto ButtonContainer">
                      <button onClick={() => this.props.deletProduct(this.props.item.id)} > Delete </button>

                    </div>

                    <div className="mt-auto ButtonContainer">
                      <button onClick={() => this.props.showupdateProductForm(this.props.item.id, this.props.item)}> update </button>

                    </div>

                  </Card.Body>
                </Card>
              }
            </div>
          </div>
        </div>



        {/* <Card className="product">
          <Card.Img
            variant="top"
            height="300"
            style={{
              width: "auto",
              margin: "1rem",
              borderRadius: "16px",
              objectFit: "cover",
            }}
            src={this.props.image}
          />
          <Card.Body>
            <Card.Title>Product name: {this.props.productName}</Card.Title>
            <Card.Text>{this.props.itsFor}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> Price : {this.props.Price} $</small>
          </Card.Footer>
          <Example image={this.props.image} productName={this.props.productName} Price={this.props.Price} addtoCart={this.props.addtoCart} cartProduct={this.props.cartProduct} removeItem={this.props.removeItem} index={this.props.index} clearCart={this.props.clearCart} />
        </Card> */}
      </div>
    );
  }
}

export default Product;
