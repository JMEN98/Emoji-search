import { useState, useEffect } from "react";
import EmojiData from "./emjoi.json";
import "./App.css";

function App() {
  const [Search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(Search);
    const newData = EmojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(Search.toLowerCase())
    );
    setData(newData);
  }, [Search]);
  return (
    <div className="App">
      <center>
        <h1> Emoji Seacrh</h1>
        <input
          type="text"
          name="search"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </center>
      {/* {EmojiData.map(emoji=> <li>{emoji.symbol} {emoji.title}</li>)} */}
      {data.map((emoji) => (
        <div className="card" key={emoji.title}>
          <div
            className="card-body"
            onClick={() => {
              navigator.clipboard.writeText(emoji.symbol);
              alert("Emoji Copy");
            }}
          >
            {emoji.symbol} {emoji.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
// https://www.youtube.com/watch?v=PNEmDBO_li0
// https://www.youtube.com/watch?v=7U-5bAcXW1U
// https://github.com/ahfarmer/emoji-search
