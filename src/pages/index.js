import axios from "axios";
import md5 from "md5";
import React, { useState, useEffect } from "react";
import TabelaHeroi from "../Components/TabelaHeroi";


const publicKey = "b46ff6c6578581b4b01b9199125abae1";
const privateKey = "72c7be387ba9451a4bd4f74e5fb070752ac26ea3";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

 function App() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
      );
      console.log(result.data.data.results);
      setItems(result.data.data.results);
    };
    fetchData();
  }, []);

  return ( <TabelaHeroi items={items} isloading={loading} />
  );
}
 
export default App;