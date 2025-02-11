import { useState } from 'react';
import './App.css';

const phrases = [
  "𝓐𝓻𝓮 𝔂𝓸𝓾 𝓼𝓾𝓻𝓮, 𝓐𝓾𝓻𝓽𝓱𝓲?",
  "𝓣𝓱𝓲𝓷𝓴 𝓪𝓫𝓸𝓾𝓽 𝓲𝓽, 𝓐𝓾𝓻𝓽𝓱𝓲?",
  "𝓟𝓸𝓸𝓴𝓲𝓮 𝓹𝓵𝓮𝓪𝓼𝓮.. :))",
  "𝓟𝓵𝓮𝓪𝓼𝓮 𝓒𝓾𝓹𝓬𝓪𝓴𝓮.. :))",
  "𝓘𝓼 𝓽𝓱𝓪𝓽 𝔂𝓸𝓾𝓻 𝓯𝓲𝓷𝓪𝓵 𝓪𝓷𝓼𝔀𝓮𝓻?",
  "𝓘𝓼 𝓽𝓱𝓮𝓻𝓮 𝓪 𝓬𝓱𝓪𝓷𝓰𝓮 𝓸𝓯 𝓱𝓮𝓪𝓻𝓽?",
  "𝓐𝓻𝓮 𝔂𝓸𝓾 𝓪𝓫𝓼𝓸𝓵𝓾𝓽𝓮𝓵𝔂 𝓬𝓮𝓻𝓽𝓪𝓲𝓷?",
  "𝓓𝓸𝓷'𝓽 𝓫𝓮 𝓼𝓸 𝓻𝓾𝓭𝓮!",
  "𝓛𝓪𝓼𝓽 𝓬𝓱𝓪𝓷𝓬𝓮!",
  "𝓐𝓻𝓮 𝔂𝓸𝓾 𝓻𝓮𝓪𝓵𝓵𝔂 𝓼𝓾𝓻𝓮?",
  "𝓓𝓸𝓷'𝓽 𝓶𝓪𝓴𝓮 𝓶𝓮 𝓬𝓻𝔂 :(",
  "𝓛𝓮𝓽 𝓶𝓮 𝓹𝓻𝓸𝓿𝓮 𝓶𝔂 𝓵𝓸𝓿𝓮!",
  "𝓙𝓾𝓼𝓽 𝓼𝓪𝔂 𝔂𝓮𝓼, 𝓲𝓽'𝓼 𝓯𝓪𝓽𝓮!",
  "𝓨𝓸𝓾 𝓴𝓷𝓸𝔀 𝔂𝓸𝓾 𝔀𝓪𝓷𝓽 𝓽𝓸.. 💕",
  "𝓘'𝓵𝓵 𝓰𝓲𝓿𝓮 𝔂𝓸𝓾 𝓾𝓷𝓵𝓲𝓶𝓲𝓽𝓮𝓭 𝓬𝓾𝓭𝓭𝓵𝓮𝓼! 🤗",
  "𝓘 𝓹𝓻𝓸𝓶𝓲𝓼𝓮 𝓽𝓸 𝓫𝓮 𝔂𝓸𝓾𝓻 𝓫𝓮𝓼𝓽 𝓿𝓪𝓵𝓮𝓷𝓽𝓲𝓷𝓮 𝓮𝓿𝓮𝓻! 🌹",
  " 𝓘'𝓵𝓵 𝓪𝓵𝔀𝓪𝔂𝓼 𝓫𝓮 𝔂𝓸𝓾𝓻 𝓟𝓵𝓪𝔂𝓮𝓻 2 🎮",
  "𝓘𝓶𝓪𝓰𝓲𝓷𝓮 𝓾𝓼 𝓫𝓲𝓷𝓰𝓮-𝔀𝓪𝓽𝓬𝓱𝓲𝓷𝓰 𝓝𝓮𝓽𝓯𝓵𝓲𝔁 𝓽𝓸𝓰𝓮𝓽𝓱𝓮𝓻 𝓯𝓸𝓻𝓮𝓿𝓮𝓻 📺💖",
  "𝓐𝔀𝔀𝔀, 𝓭𝓸𝓷'𝓽 𝓭𝓸 𝓽𝓱𝓲𝓼 𝓽𝓸 𝓶𝓮 🥺",
  "𝓓𝓸 𝔂𝓸𝓾 𝓻𝓮𝓪𝓵𝓵𝔂 𝔀𝓪𝓷𝓽 𝓽𝓸 𝓼𝓮𝓮 𝓶𝓮 𝓬𝓻𝔂? 😢",
  "𝓤𝓷𝓵𝓲𝓶𝓲𝓽𝓮𝓭 𝓱𝓾𝓰𝓼 𝓲𝓯 𝔂𝓸𝓾 𝓼𝓪𝔂 𝔂𝓮𝓼! 🤗",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);

  const maxYesSize = 600;
  const yesButtonSize = Math.min(noCount * 20 + 16, 600);
  function noClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[noCount % phrases.length];
  }

  return (
    <div className="Aurthi">
      {!yesClicked && noCount === 0 && (
        <img className='welcome-image' src="https://i.pinimg.com/originals/52/d8/d7/52d8d7d7dd20b858e02fd818ba06c53b.gif" alt="Happy GIF" />
      )}
      <h1 className="Aurthiii">𝒲𝒾𝓁𝓁 𝓎𝑜𝓊 𝒷𝑒 𝓂𝓎 𝒱𝒶𝓁𝑒𝓃𝓉𝒾𝓃𝑒? 💖</h1>
      <div>
        {yesClicked ? (
          <>
            <img src="https://media1.tenor.com/m/fU7HUFRI6McAAAAd/my-melody-onegai-my-melody.gif" alt="Happy Reaction" />
            <div className="omg">Yay! 💖 Can't wait for our date!</div>
          </>
        ) : (
          <>
            {noCount > 0 && (
              <img className="no" src="https://i.pinimg.com/originals/1c/d0/93/1cd0932c59dd85e3178c07a27510d36e.gif" alt="Crying GIF" />
            )}
            <div>
              <button
                className="yes-button"
                style={{ fontSize: `${yesButtonSize}px` }}
                onClick={() => setYesClicked(true)}
              >
                Yes
              </button>
              <button
                onClick={noClick}
                className="No-Aurthi"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
