import Image from 'next/image';
import PropTypes from 'prop-types';
import { ButtonPrimary, ButtonSecondary, ButtonTransparent } from '@/components/global/Button';
import { PreTitle, Bold, HighlightColor, HeaderThree } from '@/components/global/Text';
import { CardContainer, FlexLeft, FlexRight, FlexSpaceBetween, FlexColumn, Paragraphs, FlexEnd } from './ServicesCardStyles';


const ServicesCard = ({ serviceImage, serviceName, serviceFee, serviceCompleted }) => {
  return (
    <CardContainer>
      <FlexLeft>
        Slider Plugin here...
      </FlexLeft>
      <FlexRight>
        <FlexSpaceBetween>
          <FlexColumn>
            <HeaderThree>Logo Design</HeaderThree>
            <PreTitle>GRAPHIC DESIGN</PreTitle>
          </FlexColumn>
          <br/>
          <HeaderThree>
            <HighlightColor>$50</HighlightColor>
          </HeaderThree>
        </FlexSpaceBetween>
        <Paragraphs>
          Rhoncus egestas aliquet in diam eget proin velit. Nulla amet, dolor ultrices pellentesque tristique pellentesque bibendum at sollicitudin. Duis dui, in sem ac, condimentum. Phasellus curabitur mattis egestas tortor. Sit scelerisque dignissim ut dui gravida nunc. Nibh donec duis laoreet at. Tellus dui egestas at pellentesque. Scelerisque lacinia pulvinar in vehicula eget mi eu duis quis. Commodo orci condimentum ante pulvinar venenatis facilisis fermentum dictum viverra. Lectus id semper viverra elit phasellus turpis at.
        </Paragraphs>
        <FlexEnd>
          <ButtonSecondary>DELETE</ButtonSecondary>
          &emsp;
          <ButtonPrimary>EDIT</ButtonPrimary>
        </FlexEnd>
      </FlexRight>
    </CardContainer>
  );
};

ServicesCard.propTypes = {};

export default ServicesCard;
