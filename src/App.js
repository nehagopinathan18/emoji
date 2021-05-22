import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "😉": "Wink",
  "❤️": "love",
  "😑":
    "Annoyance" /** add some more to show how the app now expands when there's new data */
};
var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    console.log(meaning);
    setMeaning(meaning);
    if (meaning === undefined) {
      meaning = "we do not have in our database";
      setMeaning(meaning);
    }
  }
  function inputEmojiHandler(emoji) {
    //var userInput = event.target.value;
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    console.log(emoji);
  }
  return (
    <div className="App">
      <h1>Emoji-App</h1>
      <input onChange={inputChangeHandler}></input>
      <div className="meaning">{meaning}</div>
      <ul>
        {emojiWeKnow.map((emoji) => {
          return (
            <span onClick={() => inputEmojiHandler(emoji)} key={emoji}>
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
