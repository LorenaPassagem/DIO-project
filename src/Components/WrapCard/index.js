import React from 'react';
import styled from 'styled-components'

export const WrapCard = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 16px;
    width: 90px;
    height: 90px;
    background-image:url(${(props) => props.photo});     
`
const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.main};
    color:#fff;
    font-size: 10px;
    margin: 10px;
`

const Img = ({ photo, title }) => <WrapCard photo={photo}>
    <Title> {title} </Title>
</WrapCard>

export default Img