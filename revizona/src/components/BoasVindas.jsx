

//function BoasVindas(props) { 
    function BoasVindas({nome, mensagem}) {
    return (
    <div className="container-boasvindas">
        Olá, {nome}!
        {mensagem}
        <button onClick={()=> console.log()}>log</button>
    </div>
  )
}

export default BoasVindas
