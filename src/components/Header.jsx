import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
<Container>
    <Content>
        Header
    </Content>
</Container>
  )
}

const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
left: 0;
padding: 0 24px;
postion: fixed;
top: 0;
width: 100vw;
z-index: 100;
`;

const Content = styled.div``;

export default Header