import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  gap: 1.5em;
`;

export const ProfileBanner = styled.div`
    width:100%;
    display: flex;
    justify-content:space-between;
`;


export const FormContainer = styled.div`
  padding: 2em;
  display: grid;
  @media ${(props) => props.theme.mediaQueries.mobile} {
    width: 100%;
  }
  @media ${(props) => props.theme.mediaQueries.laptop} {
    width: 60%;
    min-width: 631px;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    width: 40%;
    min-width: 631px;
  }
  place-items: left;
  text-align: left;
  gap: .5em;
`;



export const FlexBetween = styled.div`
display: flex;
justify-content:space-between;
`;

export const FlexCenter = styled.div`
    @media ${(props) => props.theme.mediaQueries.mobile} {
      margin-top: 2em;
    }
    @media ${(props) => props.theme.mediaQueries.desktop} {
      margin-top: 4em;
    }
    display: flex;
    justify-content:center;
`;

export const ProfileServices = styled.div`
    margin-left: 1.5em;
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const ProfileServicesItem = styled.div`
    flex: 0 32%;
    margin-bottom: 2.5em;
`;

export const ProfileServicesContainer = styled.div`
  padding: 0 2em 0 2em;
  display: grid;
  @media ${(props) => props.theme.mediaQueries.mobile} {
    width: 100%;
  }
  @media ${(props) => props.theme.mediaQueries.tablet} {
    width: 90%;
  }
  @media ${(props) => props.theme.mediaQueries.laptop} {
    width: 65%;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    width: 50%;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    width: 40%;
  }
  place-items: left;
  text-align: left;
  gap: .5em;
`;


export const FlexName = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const FlexHalf = styled.div`
    padding-bottom: 1.5em;
    @media ${(props) => props.theme.mediaQueries.mobile} {
      flex:0 100%;
    }
    @media ${(props) => props.theme.mediaQueries.desktop} {
      flex:0 48%;
    }
`;


export const DraggingArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;

    position: static;
    width: 100%;
    height: 40px;
    left: 0px;
    top: 38px;

    /* Accent */

    background: #ECEFF4;
    /* Subtle Text */

    border: 2px dashed #8C91A2;
    border-radius: 4px;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 8px;
`;