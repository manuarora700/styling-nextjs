import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 50px;
    background: grey;
    color: ${({theme}) => theme.colors.primary};
`;

export default () => <Title>Mastering Next.js</Title>;
