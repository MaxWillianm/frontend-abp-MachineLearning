import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="App">
      <header className="bg-black-div/80 w-full">
        <div className="container">
          <div className="flex w-full justify-between uppercase items-center space-x-12">
            <div className="flex items-center py-5 space-x-12">
            <Link to={'/'}><img src="../../public/svg/logo.svg" alt="" className="w-24 h-24" /></Link>
              <Link className="text-white" to="/" >Home</Link>
              <Link className="text-white" to="/produtos" >Produtos</Link>
            </div>
            <div className="space-x-5">
              <Link className="text-white p-5 bg-blue-high rounded-lg transition-all hover:bg-blue-light" to="/login" >Login</Link>
              <Link className="text-white p-5 bg-blue-high rounded-lg transition-all hover:bg-blue-light" to="/cadastro" >Cadastro</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
