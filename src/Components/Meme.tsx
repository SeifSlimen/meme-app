import React from "react";
import datas from "./datas";

export default function Meme() {
  const [image, setImage] = React.useState("http://i.imgflip.com/1bij.jpg");
  function getMemeImage() {
    const memes: any[] = datas.data.memes;
    const rNumber: number = Math.floor(Math.random() * memes.length);
    setImage((prevImage) => memes[rNumber].url);
  }
  return (
    <main>
      <div className="meme--body">
        <input className="meme--input" placeholder="Top Text" type="text" />
        <input className="meme--input" placeholder="Bottom Text" type="text" />
        <button onClick={getMemeImage} className="meme--button">
          Get a new Meme image
        </button>
      </div>
      <img src={image} className="meme--image" />
    </main>
  );
}
