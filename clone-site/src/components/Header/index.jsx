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
import { UserPicture } from '../Card/styles';

const Header =({autenticado}) => {
  return (
     <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo Dio' />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>LIve Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/101759223?v=4'/>
                ) : (
                    <>
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                </>
            )}
            </Row>
        </Container>
     </Wrapper>
  )
}
 export { Header }