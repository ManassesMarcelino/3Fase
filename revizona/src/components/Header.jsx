import { useState } from 'react'
import BoasVindas from './BoasVindas'
import './header.css'

function Header() {
  const [usuario, setUsuario ] = useState ('')
  const [mensagem, setMensagem,] = useState (' Vc é Visitante N3 e ganhou um bonus!')
  
  function fazerLogin (){
    var none = prompt ('Digite seu nome de usuário')
    setUsuario (none)
  
  }
  
  
  
  
  return (
    <div className='container-header'> 
        <p>LoGoo</p>
        <p>Link1</p>
        <p>Link2</p>
        <p>Link3</p>
        {/*usuario && <BoasVindas nome={usuario} mensagem={mensagem} /> */}  
        {usuario ? <BoasVindas nome={usuario} mensagem={mensagem} /> : <button onClick={fazerLogin}>login
          </button>}
    </div>
  )
}

export default Header
