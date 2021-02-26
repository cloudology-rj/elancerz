import PropTypes from 'prop-types';

import FreelancerCard from '../../Cards/FreelancerCard/FreelancerCard';

import { ListContainer } from './FreelancerListStyles';

const FreelancerList = ({ list }) => {


  
  return (
    <ListContainer>
      {list !== [] &&
        list.map((freelancer) => (

          <FreelancerCard
            key={freelancer.id}
            {...freelancer}
            fullWidth={false}
          />
        ))}
    </ListContainer>
  );
};

FreelancerList.propTypes = {
  list: PropTypes.array,
};

export default FreelancerList;
