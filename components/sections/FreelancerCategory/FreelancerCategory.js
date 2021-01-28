import Image from 'next/image';
import Slider from 'react-slick';
import { css } from 'styled-components';
import { Subtitle } from '@/components/global/Text';
import { ButtonSecondary } from '@/components/global/Button';
import Carousel from 'react-elastic-carousel';
import FreelancerCard from '../../Cards/FreelancerCard/FreelancerCard';

import {
  FreelancersContainer,
  FreelanceCategoryContainer,
} from './FreelancerCategoryStyles';

/*

Contains the name  of a  category and its freelancers
on the Main Page
*/

/*

*/

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

const FreelancerCategory = ({ title }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: '0px', color: '4CD7D0' }}> {dots} </ul>
      </div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <FreelanceCategoryContainer>
      <Subtitle>{title}</Subtitle>
      <br />
      <Carousel itemPadding={[0, 15, 0, 15]} itemsToShow={5}>
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
      </Carousel>
    </FreelanceCategoryContainer>
  );
};

FreelancerCategory.propTypes = {};

export default FreelancerCategory;
