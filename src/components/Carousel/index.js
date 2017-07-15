import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Carousel.css';
import Slider from 'react-slick';
import Button from 'components/Button';
import CanonIcon from 'components/CanonIcon';
import { isMobile } from '../../utils';

const ArrowButton = ({
  icon,
  currentSlide,
  slideCount,
  ...others
}) => (
  <Button {...others}>
    <CanonIcon icon={icon} />
  </Button>
);

class Carousel extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      touchStartXAxis: null,
      touchMoveXAxis: null,
      validDragThreshold: false
    }

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
  }

  getAutoplaySettings(isAutoplaying) {
    if (isAutoplaying) {
      return {
        autoplay: true,
        autoplaySpeed: 5000
      }
    }
  }

  componentDidMount() {
    window.addEventListener('touchstart', this.onTouchStart);
    window.addEventListener('touchmove', this.onTouchMove);
  }

  componentWillUnmount() {
    window.removeEventListener('touchstart', this.onTouchStart);
    window.removeEventListener('touchmove', this.onTouchMove);
  }

  onTouchStart(e) {
    this.setState({
      touchStartXAxis: e.changedTouches[0].pageX,
    })
  }

  onTouchMove(e) {
    this.setState({
      touchMoveXAxis: e.changedTouches[0].pageX,
      validDragThreshold: e.changedTouches[0].pageX > this.state.touchStartXAxis
    })
  }

  render() {
    const {
      children,
      isVertical,
      isFullWidthMobile,
      className,
      isAutoplaying,
      ...additionalOptions
    } = this.props;

    const settings = {
      infinite: true,
      adaptiveHeight: true,
      dots: true,
      arrows: !isVertical,
      prevArrow: <ArrowButton icon='PreviousArrow' />,
      nextArrow: <ArrowButton icon='NextArrow' />,
      vertical: isVertical && !isMobile(),
      verticalSwiping: isVertical && !isMobile(),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            variableWidth: true,
            slidesToShow: 1,
            swipe: this.state.validDragThreshold
          }
        }
      ],
      ...this.getAutoplaySettings(isAutoplaying),
      ...additionalOptions
    }

    return children.length > 1 ? (
      <Slider
        className={classNames(
          styles.Carousel,
          className,
          { [styles.isVerticalCarousel]: isVertical && !isMobile() },
          { [styles.CarouselFullWidthMobile]: isFullWidthMobile }
        )}
        ref='carouselSlider'
        {...settings}>
        {children}
      </Slider>
      ) : (
      <div>
        {children}
      </div>
    )
  }
}

Carousel.propTypes = {
  className: PropTypes.string,
  additionalOptions: PropTypes.object,
  isVertical: PropTypes.bool,
  isFullWidthMobile: PropTypes.bool
};

Carousel.defaultProps = {
  isVertical: false,
  isAutoplaying: true,
  isFullWidthMobile: true
};

export default Carousel;