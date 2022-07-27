import './style.css'
import Footer from '../Footer/Footer';
import filmImage from '../../assets/img/film_2067.png';

export default function SessionPage(){
  return (
    <div className='session-page'>
      <h1>
        Selecione o(s) assento(s)
      </h1>
      <div className='seats-container'>
        <div className='seat'>01</div>
        <div className='seat'>02</div>
        <div className='seat'>03</div>
        <div className='seat'>04</div>
        <div className='seat'>05</div>
        <div className='seat'>06</div>
        <div className='seat'>07</div>
        <div className='seat'>08</div>
        <div className='seat'>09</div>
        <div className='seat'>10</div>
        <div className='seat'>11</div>
        <div className='seat'>12</div>
        <div className='seat'>13</div>
        <div className='seat'>14</div>
        <div className='seat'>15</div>
        <div className='seat'>16</div>
        <div className='seat'>17</div>
        <div className='seat'>18</div>
        <div className='seat'>19</div>
        <div className='seat'>20</div>
        <div className='seat'>21</div>
        <div className='seat'>22</div>
        <div className='seat'>23</div>
        <div className='seat'>24</div>
        <div className='seat'>25</div>
        <div className='seat'>26</div>
        <div className='seat'>27</div>
        <div className='seat'>28</div>
        <div className='seat'>29</div>
        <div className='seat'>30</div>
        <div className='seat'>31</div>
        <div className='seat'>32</div>
        <div className='seat'>33</div>
        <div className='seat'>34</div>
        <div className='seat'>35</div>
        <div className='seat'>36</div>
        <div className='seat'>37</div>
        <div className='seat'>38</div>
        <div className='seat'>39</div>
        <div className='seat'>40</div>
        <div className='seat'>41</div>
        <div className='seat'>42</div>
        <div className='seat'>43</div>
        <div className='seat'>44</div>
        <div className='seat'>45</div>
        <div className='seat'>46</div>
        <div className='seat'>47</div>
        <div className='seat'>48</div>
        <div className='seat'>49</div>
        <div className='seat'>50</div>
      </div>
      <div className='legend'>
        <div className='option'>
          <div className='icon selecionado'></div>
          Selecionado
        </div>
        <div className='option'>
          <div className='icon disponivel'></div>
          Disponível
        </div>
        <div className='option'>
          <div className='icon indisponivel'></div>
          Indisponível
        </div>
      </div>
      <div className='inputs-container'>
        <h2>Nome do Comprador:</h2>
        <input type="text" placeholder='Digite seu nome...'/>
        <h2>CPF do Comprador:</h2>
        <input type="text" placeholder='Digite seu CPF...'/>
        <button>Reservar assento(s)</button>
      </div>
      <Footer>
        <div className='film-poster'>
          <img src={filmImage} alt="film poster"/>
        </div>
        <div className='film-info'>
          <div className='film-title'>Enola Holmes</div>
          <div className='film-session-info'>Quinta-feira - 15:00</div>
        </div>
      </Footer>
    </div>
  );
}