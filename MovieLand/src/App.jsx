import { useEffect } from "react";
import "./App.css";

function App() {
  const API_URL = " http://www.omdbapi.com/?apikey=fc24ec70";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <>
      <h1>Welcome</h1>
    </>
  );
}

export default App;
