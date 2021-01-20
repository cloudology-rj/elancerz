
import PropTypes from 'prop-types';
import Container from '@/components/global/Container';


import {FeatureImage, FeatureSubtitle, FeatureContainer, FeatureTitle} from './FeatureColumnsStyles';


// Three Column Feature on Homepage
const FeatureColumns = (props) => {
  return (
    <Container>
      <FeatureContainer>
        <div>
          <FeatureImage
            src="/illustrations/featureOne.svg"
            alt="Feature row"
            width="360"
            height="300"
          />
          <FeatureTitle>In Sed</FeatureTitle>
          <FeatureSubtitle>
            Suspendisse urna ut adipiscing purus enim, viverra. Pharetra viverra
            id nulla purus.
          </FeatureSubtitle>
        </div>

        <div>
          <FeatureImage
            src="/illustrations/featureTwo.svg"
            alt="Feature row"
            width="360"
            height="300"
          />
          <FeatureTitle>In Sed</FeatureTitle>
          <FeatureSubtitle>
            Suspendisse urna ut adipiscing purus enim, viverra. Pharetra viverra
            id nulla purus.
          </FeatureSubtitle>
        </div>

        <div>
          <FeatureImage
            src="/illustrations/featureThree.svg"
            alt="Feature row"
            width="360"
            height="300"
          />
          <FeatureTitle>In Sed</FeatureTitle>
          <FeatureSubtitle>
            Suspendisse urna ut adipiscing purus enim, viverra. Pharetra viverra
            id nulla purus.
          </FeatureSubtitle>
        </div>
      </FeatureContainer>
    </Container>
  );
};

FeatureColumns.propTypes = {};

export default FeatureColumns;
