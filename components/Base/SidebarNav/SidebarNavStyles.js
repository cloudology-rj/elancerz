import styled from 'styled-components';



export const SidebarContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.white};
  transition: 0.5s;
  padding: 23px;
`;

export const SidebarUl = styled.ul`
  margin-top: 50px;
  text-align: center;

  & > * {
    margin-bottom: 32px;
  }
`;

export const SidebarFlex = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SidebarFooter = styled.footer`
  text-align: center;
  width: 100%;

  & > * {
    margin: 0 auto;
  }
  button {
    margin-bottom: 15px;
  }
`;

export const SidebarContent = styled.div`
  flex-grow: 1;
`;

export const SidebarButton = styled.button`
  border: none;
  background: none;
`;