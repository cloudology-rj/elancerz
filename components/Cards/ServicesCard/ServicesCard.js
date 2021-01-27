import Image from 'next/image';
import PropTypes from 'prop-types';
import { ButtonPrimary, ButtonSecondary, ButtonTransparent } from '@/components/global/Button';
import { PreTitle, Bold, HighlightColor, HeaderThree } from '@/components/global/Text';
import { CardContainer, FlexLeft, FlexRight, FlexSpaceBetween, FlexColumn, Paragraphs, FlexEnd } from './ServicesCardStyles';


const ServicesCard = ({ title, subtitle, fee, desc, del, edit }) => {
  return (
    <CardContainer>
      <FlexLeft>
        Slider Plugin here...
      </FlexLeft>
      <FlexRight>
        <FlexSpaceBetween>
          <FlexColumn>
            <HeaderThree>{title}</HeaderThree>
            <PreTitle>{subtitle}</PreTitle>
          </FlexColumn>
          <br />
          <HeaderThree>
            <HighlightColor>{fee}</HighlightColor>
          </HeaderThree>
        </FlexSpaceBetween>
        <Paragraphs>{desc}</Paragraphs>
        <FlexEnd>
          <ButtonSecondary onClick={del}>DELETE</ButtonSecondary>
          &emsp;
          <ButtonPrimary onClick={edit}>EDIT</ButtonPrimary>
        </FlexEnd>
      </FlexRight>
    </CardContainer>
  );
};

ServicesCard.propTypes = {};

export default ServicesCard;
