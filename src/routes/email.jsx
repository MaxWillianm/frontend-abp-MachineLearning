import { useState } from 'react';
import axios from 'axios';

function Email() {
  const [email, setEmail] = useState([
    'email', ''
  ]);
  const [carregando, setCarregando] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const url = '';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCarregando(true);
    try {
      const data = JSON.stringify(email);
      const response = await axios.post(url, data, {});
      console.log(response.data);
      setIsFormSubmitted(true);
    }
    catch (error) {
      console.error(error);
    }
    setCarregando(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmail(prevEmail => ({ ...prevEmail, [name]: value }));
  };

  return (
    <div className='container'>
      <div className="bg-black-div/90 border border-white rounded-xl  my-20 py-12 px-8">
        <form id='formProduto' className='flex flex-col space-y-12' onSubmit={handleSubmit}>
          <textarea className='bg-black-input text-white rounded px-4 py-3' placeholder='Corpo do email' type="text" name="email" value={email.email} onChange={handleChange} />
          <button className='text-white flex w-1/4 mx-auto justify-center items-center bg-blue-high rounded p-5 transition-all hover:bg-blue-light' type="submit" disabled={carregando}>
            {carregando ? <img src="../../public/svg/loading_white.svg" className='w-9 h-9' /> : 'Enviar'}
          </button>
          {isFormSubmitted && <p className='text-white'>Enviado!</p>}
        </form>
      </div>
    </div>
  );
}

export default Email;
