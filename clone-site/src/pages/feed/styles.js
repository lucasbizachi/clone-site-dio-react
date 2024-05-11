import styled from "styled-components";
export const Container = styled.main`
    width: 100%;
    max-width: 60%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`
export const Title = styled.h2`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;
`
export const TitleHighLight = styled.p`
    color: #ffffff80;
    margin-bottom: 24px;
    
`
export const TextContent = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #fff;
`

export const  Column = styled.div`
    flex:{({flex}) => flex};
    padding-right: 24px;
`