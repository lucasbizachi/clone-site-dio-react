import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const Wrapper = styled.div`
    max-width: 300px;
`
export const Column = styled.div`
    flex: 1;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 620px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;
`

export const TitleCadastro = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 20px;
    line-height: 44px;

`
export const SubtitleCadastro = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;

`

export const TextCadastro = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: 400;
font-size: 12px;
width: 420px;
margin-bottom: 20px;
line-height: 22px;
`