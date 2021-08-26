import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(70, 90, 150, 0.5);
    z-index:999;
`
export const Dialog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: calc(100% - 144px);
    width: 500px;
    padding: 24px;
    background-color: #fff;
    border-radius: 10px;
`