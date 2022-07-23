import "./Header.modules.css";

import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header>
      <img src={logo} alt="Logotipo do todo" />
    </header>
  );
}
