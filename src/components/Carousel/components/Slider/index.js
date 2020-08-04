import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

import prev from '../../../../assets/images/prev.png';
import next from '../../../../assets/images/next.png';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <img
        src={ next }
        alt="..."
      />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <img
        src={ prev }
        alt="..."
      />
    </button>
  );
}

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    img {
      width: 25px;
      height: 45px;
    }
    opacity: .5;
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: 0;
    width: 45px;
    height: 197px;
    transform: initial;
    &:before {
      display: none;
      font-size: 32px;
    }
    &:hover {
      opacity: 1;
      img {
        opacity: .5;
      }
    }
  }

  .slick-prev {
    background: rgb(73,95,140);
    background: linear-gradient(90deg, rgba(73,95,140,0.5970763305322129) 0%, rgba(73,95,140,0.4962359943977591) 51%, rgba(255,255,255,0) 95%);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    left: 0;
    img {
      margin-right: 12px;
    }
  }
  .slick-next {
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(73,95,140,0.4962359943977591) 51%, rgba(73,95,140,0.5970763305322129) 95%);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    right: 0;
    img {
      margin-left: 14px;
    }
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;