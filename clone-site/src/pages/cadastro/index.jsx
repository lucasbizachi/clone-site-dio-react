
import { Header } from "../../components/Header";
import { Input} from "../../components/Input";
import { Button } from "../../components/Button";
import { Column, Container, Title, SubtitleCadastro} from './styles';
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="nome" control={control} placeholder="Nome completo" />
                    <Input name="email" control={control} placeholder="Email" />
                    <Input name="password" control={control} placeholder="Password" />
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
            </Column>
            <SubtitleCadastro>
            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
            </SubtitleCadastro>
        </Container>
</>)
}

export { Cadastro }