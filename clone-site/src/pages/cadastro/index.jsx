import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Header } from "../../components/Header";
import { Input} from "../../components/Input";
import { Button } from "../../components/Button";
import { Column, Container, Title, TextCadastro, Wrapper, Row, TitleCadastro, SubtitleCadastro } from './styles';
import { useForm } from "react-hook-form";

const Cadastro = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
           
            <Column>
                <Wrapper>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome" control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
                        <Input name="email" control={control} placeholder="Email" leftIcon={<MdEmail />} />
                        <Input name="password" control={control} placeholder="Password" leftIcon={<MdLock />} />
                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                    <TextCadastro>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </TextCadastro>
                </Row>
                </Wrapper>
            </Column>
        </Container>
</>)
}

export { Cadastro }