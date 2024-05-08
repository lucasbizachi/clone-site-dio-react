import { Link } from 'react-router-dom';
import bannerImage from "../../assets/banner.svg";
import { Card } from "../../components/Card"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header"
import {Container, TextContent, Title, TitleHighLight} from './styles'

const Feed = () => {
    return(<>
        <Header />
        <Container>
            <Card />
        </Container>
    </>)
}
export { Feed }