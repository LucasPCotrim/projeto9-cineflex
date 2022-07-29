import './style.css'

export default function SuccessPage() {
  return (
    <div className='success-page'>
      <h1>Pedido feito com sucesso!</h1>
      <div className='film-and-session'>
        <h2>Filme e sessão</h2>
        <p>Enola Holmes</p>
        <p>24/06/21 15:00</p>
      </div>
      <div className='tickets'>
        <h2>Ingressos</h2>
        <p>Assento 15</p>
        <p>Assento 16</p>
      </div>
      <div className='buyer'>
        <h2>Comprador</h2>
        <p>Nome: João da Silva Sauro</p>
        <p>CPF: 123.456.789-10</p>
      </div>
      <button>Voltar para Home</button>
    </div>
    
  )
}