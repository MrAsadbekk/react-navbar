import { useState, useEffect } from "react";
import axios from "axios";
import "../data/data.scss";

const Data = () => {
  const [post, setPost] = useState("posts");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const reponse = await axios.get(
        `https://jsonplaceholder.typicode.com/${post}`
      );
      setData(reponse.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, [post]);

  //   console.log(data);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <button onClick={() => setPost("posts")}>Post</button>
      <button onClick={() => setPost("todos")}>Todos</button>
      <button onClick={() => setPost("comments")}>Comments</button>
      <h2>{post}</h2>
      {data.map((element) => (
        <ul className="list">
          <li key={element.id}>{element.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Data;
