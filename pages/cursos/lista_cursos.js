

import axios from 'axios'

export default function url(props){
    const horarios = props.horarios
    return (
        <div>
            <h1>Tabela de Horarios</h1>
               <table>
                   <caption><h1>NOME DO CUSO</h1></caption>
                <thead>
                    <tr>
                        <td>HORA - </td>
                        <td>SEGUNDA - </td>
                        <td>TERÇA - </td>
                        <td>QUARTA - </td>
                        <td>QUINTA - </td>
                        <td>SEXTA - </td>
                        <td>SABADO - </td>
                    </tr>
                </thead>
                <tbody>
                {horarios.map( item => (
                    <tr>
                        <td>{item.HORA}</td>
                        <td>{item.SEGUNDA}</td>
                        <td>{item.TERCA}</td>
                        <td>{item.QUARTA}</td>
                        <td>{item.QUINTA}</td>
                        <td>{item.SEXTA}</td>
                        <td>{item.SABADO}</td>
                    </tr>
                ))}
                </tbody>
           
            </table>
           
          
  
        </div>

        
    )
   
}


export async function getStaticProps(context) {

    {console.log(context)}

  const resultado = await axios.post('http://api.uniplaclages.edu.br:3089/horarios',
    {   
        "NOME_CURSO": "ADM",
        "SPLETIVO_CODPERLET": "2021/2",
        "STURMADISC_CODTURMA": "2ºSEM/T1/ADMIN",
        "STURMADISC_IDHABILITACAOFILIAL":"446"
    }
  )
  const horarios = resultado.data
  return {
    props: {horarios}, // will be passed to the page component as props
  }
}