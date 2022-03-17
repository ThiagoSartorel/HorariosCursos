import { Center, Flex, Image} from "@chakra-ui/react"
import styles from '../../../styles/Home.module.css'
const FooterComp =()=>{

    return(
        <Flex className={styles.footer} bg="#21618c" marginBottom={"0px"} bottom={"0px"} position={"fixed"} color={"white"}>
        <div>
          <Image src="/logo_niu.png"/>
        </div>
        <Center textAlign={"end"} paddingLeft={"70%"}>
        Fone: +55 (49) 3251 1022 - Av. Castelo Branco, nº170,<br></br> Bairro Universitário - Lages - SC - Brasil
        </Center>
      </Flex>
    )

}

export default FooterComp