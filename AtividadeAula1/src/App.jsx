import medico1 from "./images/medico1.png";
import "./styles/app.css";
export const App = () => {
  console.log(import.meta.env.VITE_MEDICO2);
  const medicos = [
    { nome: "Dr. João Silva" },
    { nome: "Dra. Maria Oliveira" },
    { nome: "Dr. Pedro Santos" },
  ];
  const MainStyle = () => {
    return {
      backgroundColor: "#C3C3C3",
      padding: 8,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      borderRadius: 8,
    };
  };
  return (
    <>
      <main style={MainStyle()}>
        <h1>Profissionais de saúde</h1>
        <section
          style={{
            backgroundColor: "#e3e3e3",
            width: "90%",
            padding: 16,
            display: "flex",
            justifyContent: "space-between",
            borderRadius: 8,
          }}
        >
          <div className="medico">
            <img
              src={medico1}
              alt="Foto de um medico segurando um esetoscópio"
            />
            <p>{medicos[0].nome}</p>
          </div>
          <div className="medico">
            <img src={import.meta.env.VITE_MEDICO2} alt="" />
            <p>{medicos[2].nome}</p>
          </div>
          <div className="medico">
            <img
              src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>{medicos[1].nome}</p>
          </div>
        </section>
      </main>
    </>
  );
};
