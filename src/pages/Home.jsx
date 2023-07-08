import UserResults from "../components/users/UserResults";
// Aqui temos algo muito importante: em vez de process.env, usamos import.meta.env!!! E as keys PRECISAM comecar com VITE para funcionar :: praying hands ::
function Home() {
  
  return (
    <>
      <UserResults />
    </>
  );
}

export default Home;
