import PropTypes from 'prop-types';
import { PreTitle, Bold, HeaderTwo } from '@/components/global/Text';
import FreelancerList from './FreelancerList/FreelancerList';
import FreelancerListView from './FreelancerListView/FreelancerListView';



const viewFreelancers = ({ freelancers, view }) => {

  return view ? (
    <FreelancerListView list={freelancers} />
  ) : (
    <FreelancerList list={freelancers} />
  );
};

viewFreelancers.propTypes = {
  freelancers: PropTypes.array,
  view: PropTypes.bool,
};

export default viewFreelancers;
