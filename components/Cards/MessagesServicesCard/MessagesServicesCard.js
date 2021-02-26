import Image from 'next/image';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import { PreTitle, Bold } from '@/components/global/Text';
import { CardContainer, FlexBottom, CardImage, FlexContainer, GrabContainer } from './ProfileServicesCardStyles';

import { getService } from "../../../api/queries";
import { useQuery, useQueryClient } from "react-query";
import { useLocalStorage } from '../../../hooks/useLocalStorage';

const MessagesServicesCard = ({ id }) => {

  if (id != null) {
    const [token, setToken] = useLocalStorage('elancerztoken', null);

    const { isLoading, error, data: srv } = useQuery(
      'serviceCardQuery', () => getService(token, id)
    );

    if (error)
      return (
        <NotFound>
          <HeaderTwo>Sorry, something went wrong with your request</HeaderTwo>
        </NotFound>
      );


    return (
      <GrabContainer id="grabDiv">
        <CardContainer>
          <CardImage
            src={'https://via.placeholder.com/500x500.png?text=Service+Image'}
            width="240px"
            height="210px"
          />
          <FlexContainer>
            <Bold>{srv?.name}</Bold>
            <Bold>$ {srv?.price}</Bold>
          </FlexContainer>
          <FlexContainer>
            <PreTitle>{'Category Name'}</PreTitle>
          </FlexContainer>
          <FlexBottom>
            <PreTitle>0  Services Completed</PreTitle>
          </FlexBottom>
          <br />
        </CardContainer>
      </GrabContainer>
    );
  } else {
    return null
  }
};

MessagesServicesCard.propTypes = {};

export default MessagesServicesCard;


export const NotFound = styled.div`
  width: 100%;
  height: 50vh;
  display: grid;
  align-items:center;
  justify-content:center;
  place-items: center;
`;
