import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import axios from 'axios';


export default function Home() {

  
  
    
    const router = useRouter()
    const [formSPLETIVO_CODPERLET, setFormSPLETIVO_CODPERLET] = useState()
    const [formSTURMADISC_CODTURMA, setFormSTURMADISC_CODTURMA] = useState()
    const [formSTURMADISC_IDHABILITACAOFILIAL, setFormSTURMADISC_IDHABILITACAOFILIAL] = useState()
    const [formNOME_CURSO, setFormNOME_CURSO] = useState()
    const { register, handleSubmit, setValue } = useForm();
 

    function digitouSPLETIVO_CODPERLET(evento){
      setFormSPLETIVO_CODPERLET(evento.target.value)
      return setFormSPLETIVO_CODPERLET
    }
    function digitouSTURMADISC_CODTURMA(evento){
      setFormSTURMADISC_CODTURMA(evento.target.value)
      return setFormSTURMADISC_CODTURMA
    }
    function digitouSTURMADISC_IDHABILITACAOFILIAL(evento){
      setFormSTURMADISC_IDHABILITACAOFILIAL(evento.target.value)
      return setFormSTURMADISC_IDHABILITACAOFILIAL
    }
    function digitouNOME_CURSO(evento){
      setFormNOME_CURSO(evento.target.value)
      return setFormNOME_CURSO
    }


    function onSubmit() {
        const data = axios.post('http://api.uniplaclages.edu.br:3089/horarios',
        {  
            "SPLETIVO_CODPERLET": formSPLETIVO_CODPERLET,
            "STURMADISC_CODTURMA": formSTURMADISC_CODTURMA,
            "STURMADISC_IDHABILITACAOFILIAL": formSTURMADISC_IDHABILITACAOFILIAL
        })
        return data
        }
    
        


  return (
    <div>
      <Head>
        <title>Uniplac Horarios</title>
      </Head>


      <div>
  
        
</div> 

      <main>

              <div >
                 <div >
                     

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">DIGITE NOME_CURSO <br></br>
                        (NOME_CURSO):</label>
                        <input value={formNOME_CURSO} onChange={digitouNOME_CURSO} />
                        <br></br>
                        <label htmlFor="name">DIGITE SPLETIVO_CODPERLET <br></br>
                        (SPLETIVO_CODPERLET):</label>
                        <input value={formSPLETIVO_CODPERLET} onChange={digitouSPLETIVO_CODPERLET} />
                        <br></br>
                        
                        <label htmlFor="name">DIGITE STURMADISC_CODTURMA <br></br>
                        (STURMADISC_CODTURMA):</label>
                        <input value={formSTURMADISC_CODTURMA} onChange={digitouSTURMADISC_CODTURMA} />
                        <br></br>
                        <label htmlFor="name">DIGITE STURMADISC_IDHABILITACAOFILIAL <br></br>
                        (STURMADISC_IDHABILITACAOFILIAL):</label>
                        <input value={formSTURMADISC_IDHABILITACAOFILIAL} onChange={digitouSTURMADISC_IDHABILITACAOFILIAL} />
                        <br></br>
                        <button type="submit"> BUSCAR </button>
                    </form>
                  </div> 

              </div>    

      </main>
    </div>
  )
}
export function url(data){
    console.log('chegou aqui')
    const horarios = data.horarios
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
