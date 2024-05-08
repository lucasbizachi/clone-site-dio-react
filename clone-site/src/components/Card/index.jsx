import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
}from './styles';

const Card =  () => {
  return (
    <CardContainer>
        <ImageBackground src="" />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/101759223?v=4' />
                <div>
                    <h4>Nome do Usuário</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp DIO do Global avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
