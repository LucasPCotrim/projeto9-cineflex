import './style.css'


export default function SuccessPage({purchaseInfo}) {
  return (
    (purchaseInfo.movieTitle)
    ?
    <div className='success-page'>
      <h1>Pedido feito com sucesso!</h1>
      <div className='film-and-session'>
        <h2>Filme e sessão</h2>
        <p>{purchaseInfo.movieTitle}</p>
        <p>{`${purchaseInfo.sessionDate}  ${purchaseInfo.sessionTime}`}</p>
      </div>
      <div className='tickets'>
        <h2>Ingressos</h2>
        {purchaseInfo.seats.map((seat, index)=>{
          return (<p key={index}>Assento {seat}</p>);
        })}
      </div>
      <div className='client'>
        <h2>Comprador</h2>
        <p>{`Nome: ${purchaseInfo.userName}`}</p>
        <p>{`CPF: ${purchaseInfo.userCPF}`}</p>
      </div>
      <button>Voltar para Home</button>
    </div>
    :
      <></>
  )
}