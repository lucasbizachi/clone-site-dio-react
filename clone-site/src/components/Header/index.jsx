import React from 'react'
import { Button } from '../Button';
import logo from '../../assets/logo-dio.svg'
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles';

const Header =() => {
  return (
     <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo Dio' />
                <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                </BuscarInputContainer>
                <Menu>LIve Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </Row>
        </Container>
     </Wrapper>
  )
}
 export { Header }