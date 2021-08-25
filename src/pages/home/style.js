import styled from 'styled-components'
import Slider from 'react-slick';

export const Wrapper = styled.div`
    display: flex;
`;

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    width: 360px;
    height: 100vh;
    overflow-y: scroll;   /*tudo que passa da caixa */
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content:center;
    background-color: #fff;
    padding: 10px;
`;

export const Logo = styled.img`
    margin-bottom: 15px;
`;

export const Map = styled.div`
    background-color: red;
    width: 500px;
`;

export const Carossel = styled(Slider)`
    .slick-slide{
        margin: 16px;
    }
`;

export const CarouselTitle = styled.h3`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
`;