import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { HeaderTwo } from '@/components/global/Text';
import Input from '@/components/global/Input';
import ConversationList from '../ConversationList';

import { SidebarContainer, StickyContainer } from './SidebarStyles';

const Sidebar = ({ peoples }) => {
  return (
    <SidebarContainer>
      <StickyContainer>
        <HeaderTwo>Messages</HeaderTwo>
      </StickyContainer>
      <br />
      <Input type="text" placeholder="Search messages" search={true} />
      <ConversationList list={peoples} />
    </SidebarContainer>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
