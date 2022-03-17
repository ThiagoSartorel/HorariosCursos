import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  Center,
} from "@chakra-ui/react";
import HeaderComp from "./../../components/header";
import FooterComp from "./../../components/footer";
import axios from "axios";

export default function url(props) {
  const horarios = props.horarios;
  const titulosize = "18px"
  return (
    <>
      <HeaderComp/>
      <Container width={1080} mt={"5%"} centerContent height={"68vh"}>
        <Center paddingBottom={"15px"} fontWeight={"bold"} fontSize={"20px"} textTransform={"uppercase"} >{props.semestre +" - "+ props.curso +" - "+ props.consulta1}</Center>
        <Table variant="simple" w={'65%'} bg="#F0F8FF">
          <TableCaption bg={"#DCDCDC"}>Tabela de Horários - {props.consulta0}</TableCaption>
          <Thead>
            <Tr>
              <Th bg="#DCDCDC" fontSize={titulosize}>Hora</Th>
              <Th bg="#DCDCDC" fontSize={titulosize}>SEGUNDA</Th>
              <Th bg="#DCDCDC" fontSize={titulosize}>TERÇA</Th>
              <Th bg="#DCDCDC" fontSize={titulosize}>QUARTA</Th>
              <Th bg="#DCDCDC" fontSize={titulosize}>QUINTA</Th>
              <Th bg="#DCDCDC" fontSize={titulosize}>SEXTA</Th>
            </Tr>
          </Thead>
          <Tbody>
            {horarios.map((item) => (
              <Tr>
                <>
                  <Td bg="#DCDCDC" fontWeight={"bold"}>{item.HORA}</Td>
                  <Td color={"#4F4F4F"}>{item.SEGUNDA}</Td>
                  <Td color={"#4F4F4F"} bg={"RGB(248,254,255)"}>{item.TERCA}</Td>
                  <Td color={"#4F4F4F"}>{item.QUARTA}</Td>
                  <Td color={"#4F4F4F"} bg={"RGB(248,254,255)"}>{item.QUINTA}</Td>
                  <Td color={"#4F4F4F"}>{item.SEXTA}</Td>
                </>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
      <FooterComp/>
    </>
  );
}

export async function getServerSideProps(context) {
  const query = context.params.query;

  var consulta = query.split("-");
  //console.log(consulta[0]);
  var consulta0 = consulta[0].replace("_", "/");
  var consulta1 = consulta[1].replace("_", "/");
  var consulta2 = consulta[2].replace("_", "/");
  var consulta2 = consulta2.replace("_", "/");
  var consulta3 = consulta[3].replace("_", "/");
  var semestre = consulta2.split("/")[0];
  var curso = consulta0.replace("_", " ").replace("_", " ").split("/")[1];

  const resultado = await axios.post(
    "http://api.uniplaclages.edu.br:3089/horarios",
    {
      SPLETIVO_CODPERLET: consulta1,
      STURMADISC_CODTURMA: consulta2,
      STURMADISC_IDHABILITACAOFILIAL: consulta3,
    }
  );
  const horarios = resultado.data;
    //console.log(consulta0.replace("_", " ").replace("_", " ").split("/"))
  return {
    props: { horarios,consulta0,consulta1,semestre,curso }, // will be passed to the page component as props
  };
}
