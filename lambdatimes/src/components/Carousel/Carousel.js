import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: [],
      displayedImage: "",
      imageIndex: 0
    };
  }
  componentDidMount() {
    this.setState({ carousel: carouselData });
  }

  leftClick = () => {
    let newIndex;
    if (this.state.imageIndex === 0) {
      newIndex = 3;
    } else {
      newIndex = this.state.imageIndex - 1;
    }
    this.setState({
      imageIndex: newIndex,
      displayedImage: this.selectedImage(this.state.carousel[newIndex])
    });
  };

  rightClick = () => {
    let newIndex;
    if (this.state.imageIndex === 3) {
      newIndex = 0;
    } else {
      newIndex = this.state.imageIndex + 1;
    }
    this.setState({
      imageIndex: newIndex,
      displayedImage: this.selectedImage(this.state.carousel[newIndex])
    });
  };

  selectedImage = imageUrl => {
    return (
      <img src={imageUrl} style={{ display: "block" }} alt="carousel images" />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {this.state.displayedImage}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
