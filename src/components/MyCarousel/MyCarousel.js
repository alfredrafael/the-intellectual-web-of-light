import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import "./MyCarousel.css";
import xMark from '../../assets/xMark.png'


const items = [
  {
    src: "https://i.imgur.com/wLHKaKL.png", 
    // altText: 'Hirsi Ali alt',
     caption: 'Ayaan Hirsi Ali',
     source: <p> <a href='https://www.theahafoundation.org/international-womens-day-a-day-of-celebration-and-promise-for-a-better-future/'></a></p>
  },
  {
    src: "https://i.imgur.com/NvYZkgQ.png",
    caption: "Sam Harris",
  // source: "Sam Harris",

  },
  {
    src: "https://i.imgur.com/AuIyjbI.jpg",
       caption: 'Claire Lehmann',
    //   source: 'Slide 2'
  },
  {
    src: "https://i.imgur.com/4ar7b3W.png",
     caption: 'Jonathan Haidt',
    // source: 'Slide 3'
  },
  { src:"https://i.imgur.com/FaYJnew.jpg",
     caption: 'Jordan Peterson',
    // source: 'Slide 3'
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
            captionText={item.source}
            captionHeader={item.caption}
            style={{zIndex: '9'}}
          />
        </CarouselItem>
      );
    });

    return (
      <div className="carouselReturn">
        <div className="jumbotronContainer">
          <div className="jumbotron bg-transparent">
            <h1 className="display-4"><span style={{zIndex: '4', position: 'relative'}}>The Intellectual</span> <br/><span style={{position: 'relative'}}>
            <img src={xMark} 
            style={{position: 'absolute', maxWidth: '150%', margin: '-50% -100% 0 10%'}}/>Dark</span> Web <span style={{fontFamily: "Permanent Marker, cursive", color: 'blue', marginBottom: '3%'}}> of Light</span></h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component.
            </p>
            <hr className="my-4" />
            <p>
              {/* more text could be here*/}
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
          interval="3000"
          className="carousel-fade myCarousel"
          ride="carousel"
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
