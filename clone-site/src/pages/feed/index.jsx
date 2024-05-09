import { Link } from 'react-router-dom';
import bannerImage from "../../assets/banner.svg";
import { Card } from "../../components/Card"
import { UserInfo } from '../../components/UserInfo';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header"
import {Container, Column, Title, TitleHighLight} from './styles'


const Feed = () => {
    return(<>
        <Header />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight>#RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={80} nome="Usuário"  
                image="https://avatars.githubusercontent.com/u/101759223?v=4"/>
                <UserInfo percentual={25} nome="Usuário"  
                image="https://avatars.githubusercontent.com/u/101759223?v=4"/>
                <UserInfo percentual={36} nome="Usuário"  
                image="https://avatars.githubusercontent.com/u/101759223?v=4"/>
                <UserInfo percentual={58} nome="Usuário"  
                image="https://avatars.githubusercontent.com/u/101759223?v=4"/>
                <UserInfo percentual={96} nome="Usuário"  
                image="https://avatars.githubusercontent.com/u/101759223?v=4"/>
            </Column>
            
            
        </Container>
    </>)
}
export { Feed }