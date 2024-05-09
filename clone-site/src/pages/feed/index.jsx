import { Link } from 'react-router-dom';
import bannerImage from "../../assets/banner.svg";
import { Card } from "../../components/Card"
import { UserInfo } from '../../components/UserInfo';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header"
import {Container, TextContent, Title, TitleHighLight} from './styles'


const Feed = () => {
    return(<>
        <Header />
        <Container>
            <Card />
            <UserInfo percentual={80} nome="Usuário"  
            image="https://avatars.githubusercontent.com/u/101759223?v=4"/>
        </Container>
    </>)
}
export { Feed }