import { useState } from 'react';
import axios from 'axios';
import Loading from '../../public/svg/loading';

function Email() {
  const [email, setEmail] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [resultado, setResultado] = useState('');
  const url = 'https://api-flask-ml.fly.dev/classify';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCarregando(true);
    try {
      const data = JSON.stringify({ text: email });
      const response = await axios.post(url, data, {});
      console.log(response.data);
      setResultado(response.data);
      setIsFormSubmitted(true);
    } catch (error) {
      console.error(error);
    }
    setCarregando(false);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <div className='container'>
      <div className="bg-black-div/90 border border-white rounded-xl  my-20 py-12 px-8">
        <form id='formProduto' className='flex flex-col space-y-12' onSubmit={handleSubmit}>
          <textarea className='bg-black-input text-white rounded px-4 py-3' placeholder='Corpo do email' type="text" value={email} onChange={handleChange} />
          <button className='text-white flex w-1/4 mx-auto text-lg uppercase justify-center items-center bg-blue-high rounded p-8 transition-all hover:bg-blue-light' type="submit" disabled={carregando}>
            {carregando ? <Loading className="w-10 h-auto" /> : 'Enviar'}
          </button>
          {isFormSubmitted && (
            <div>
              <p className='text-white text-center text-4xl'>Resultado: {resultado.spam == true ? 'É spam' : 'Não é spam'}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Email;
