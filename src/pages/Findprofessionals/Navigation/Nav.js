import { AiOutlineAudio } from "react-icons/ai";
import "./Nav.css";
import { useState } from "react";

const Nav = ({ handleInputChange, query }) => {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleInputChange({ target: { value: transcript } });
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <nav>
      <div className="nav">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search Interior."
        />
        <AiOutlineAudio
          className={`microphone-icon ${isListening ? "listening" : ""}`}
          onClick={handleVoiceInput}
          title="Click to start voice input"
        />
      </div>
    </nav>
  );
};

export default Nav;

