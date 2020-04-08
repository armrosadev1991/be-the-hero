import React from "react";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero" />
        <span>Bem vinda, ADAP</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>
          <strong>VALOR:</strong>
          <p>£120</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>
          <strong>VALOR:</strong>
          <p>£120</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>
          <strong>VALOR:</strong>
          <p>£120</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>
          <strong>VALOR:</strong>
          <p>£120</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
