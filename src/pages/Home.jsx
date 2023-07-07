
// Aqui temos algo muito importante: em vez de process.env, usamos import.meta.env!!! E as keys PRECISAM comecar com VITE para funcionar :: praying hands ::
function Home() {
  
  return (
    <>
      <h1 className="text-8xl">Entre e fique de boa!</h1>
      <div>
        Valor do token: {import.meta.env.VITE_REACT_APP_GITHUB_TOKEN}
      </div>
    </>
  );
}

export default Home;
