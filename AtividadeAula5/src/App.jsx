import { useState } from "react";
export const App = () => {
  const [jogo, setJogo] = useState([]);
  const gerarJogo = () => {
    const numerosDoJogo = [];
    for (let i = 0; i < 6; i++) {
      const num = Math.floor(Math.random() * 60) + 1;
      !numerosDoJogo.includes(num) ? numerosDoJogo.push(num) : null;
    }
    setJogo(numerosDoJogo);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <main className="container">
        <section className="card">
          <div className="card-header bg-primary fw-bold">Mega sena</div>
          <div className="card-body">
            <ul className="list-group ">
              {jogo.map((numero, index) => (
                <li key={index} className="list-group-item">
                  {numero}
                </li>
              ))}
            </ul>
          </div>
          <button
            className="btn btn-primary w-100 mt-2"
            onClick={() => gerarJogo()}
          >
            Gerar Jogo
          </button>
        </section>
      </main>
    </div>
  );
};
