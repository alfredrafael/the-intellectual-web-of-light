import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import "./MyCarousel.css";


const items = [
  {
    src: "https://i.imgur.com/nIqUASY.png",
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: "https://i.imgur.com/XyL4veP.png"
    //   altText: 'Slide 2',
    //   caption: 'Slide 2'
  },
  {
    src: "https://i.imgur.com/E3LBQGl.jpg"
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];

class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }     

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {

    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className="carouselItem"
        >
          <img src={item.src} alt={item.altText} />

          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div className="carouselReturn">
        <div className="jumbotronContainer">
          <div className="jumbotron bg-transparent">
            <h1 className="display-4">The Intellectual Dark Web</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </p>
          </div>
        </div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval="2000"
          className="carousel-fade"
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}

          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default MyCarousel;