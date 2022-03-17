import { Center, Flex, Image, Text } from "@chakra-ui/react";
import styles from '../../../styles/Home.module.css'

const HeaderComp = () => {
  return (
    <Flex bg="#21618c">
      <Center width={"40%"} padding={"1%"}>
        <a href="https://www.uniplaclages.edu.br/" target={"_blank"}><Image  marginLeft={"20%"} src="/logo.png"/></a>
        <Flex color={"white"} fontSize={"300%"} textAlign={"center"} marginLeft={"50px"}>Tabela de Horários</Flex>
      </Center>
    </Flex>
  );
};

export default HeaderComp;
