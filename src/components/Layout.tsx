import { LayoutProps } from '@/types/types';
import React, { FC } from 'react';
import styled from 'styled-components';

const Layout: FC<LayoutProps> = ({children}) : JSX.Element => {
  return (
    <StyledLayout>{children}</StyledLayout>
  )
}

export default Layout;

const StyledLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #150632;
`
