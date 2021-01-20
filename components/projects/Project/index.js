import React from 'react';

import Image from 'next/image';

import { 
    ProjectWrapper,  
    Head, 
    Left,
    Title,
    Name,
    Right,
    Amount,
    Body,
    Date,
    Content
} from './ProjectStyles'

const Project = () => {
  return (
  <>
    <ProjectWrapper>
        <Head>
            <Left>
                <Title>Logo Design</Title>
                <Image className="eachProjectAvatar" src="/images/sample.jpg" height="40px" width="40px" />
                <Name>Marilyn Calzoni</Name>
            </Left>
            <Right>
                <Amount>$50</Amount>
            </Right>
        </Head>
        <Body>
            <Date>Started Dec 12, 2020</Date>
            <Content>
                Tristique ornare ut imperdiet lectus porttitor in enim quis. Egestas bibendum leo, ac id est in nisl risus purus. Eu facilisis est proin velit parturient aliquet. Donec lorem diam elit non risus. Mauris lobortis aliquet feugiat tellus ac fringilla. Adipiscing mi consequat libero ipsum elementum. Odio leo, scelerisque adipiscing in nulla urna, tincidunt sit tincidunt. Amet vel, maecenas scelerisque eget nisl. Diam eros, lectus aliquet risus convallis sed at id. Aenean enim ac euismod nisl. 
            </Content>
        </Body>
    </ProjectWrapper>
    <style jsx global> {`
            .eachProjectAvatar {
                border-radius: 50%;
            }
        `}
    </style>
  </>
  )
};

export default Project;
