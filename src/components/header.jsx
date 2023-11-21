import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="App">
      <header className="bg-black-div/80 w-full">
        <div className="container">
          <div className="flex w-full justify-between uppercase items-center space-x-12">
            <div className="flex items-center py-5 space-x-12">
              <Link className="text-white" to="/" >Home</Link>
              <Link className="text-white" to="/email">E-mail</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
