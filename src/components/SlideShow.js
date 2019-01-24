import React, { Component } from "react";

class SlideShow extends Component {
  state = {};

  render = () => {
    return (
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex="-1"
        uk-slideshow="autoplay: true"
      >
        <ul className="uk-slideshow-items">
          {this.props.images.map(image => {
            if (image[this.props.which].includes(".mp4")) {
              return (
                <li key={image[this.props.which]}>
                  <video autoPlay loop><source src={image[this.props.which]} /></video> />
                </li>
              );
            } else {
              return (
                <li key={image[this.props.which]}>
                  <img alt="" src={image[this.props.which]} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  };
}

export default SlideShow;
