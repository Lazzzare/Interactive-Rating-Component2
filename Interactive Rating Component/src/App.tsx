import { useState } from "react";
import StartIcon from "./assets/icon-star.svg";
import ThankYou from "./assets/thank.svg";
import "./App.css";

type TPage = "choose" | "result";

function App() {
  const [page, setPage] = useState<TPage>("choose");
  const [rating, setRating] = useState(0);

  const handleRating = (rating: number) => {
    setRating(rating);
  };

  const handleSubmit = () => {
    setPage("result");
  };

  return (
    <div className="card">
      {page === "choose" && (
        <>
          <img src={StartIcon} alt="" className="star-icon" />

          <h1 className="title">How did we do?</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            sit suscipit sint molestiae reiciendis iure, libero iusto sed quod.
          </p>

          <div className="buttons">
            {[1, 2, 3, 4, 5].map((button, i) => {
              const isActive = button === rating;
              return (
                <button
                  className={`button ${isActive ? "activeButton" : null}`}
                  key={i}
                  onClick={() => handleRating(button)}
                >
                  {button}
                </button>
              );
            })}
          </div>

          <button className="submitButton" onClick={() => handleSubmit()}>
            Submit
          </button>
        </>
      )}

      {page === "result" && (
        <div className="result">
          <img src={ThankYou} alt="" className="payment-img" />

          <div className="rating-badge">You Selected {rating} out of 5</div>

          <h1 className="title rating-title">Thank You</h1>
          <p className="description rating-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            alias deserunt expedita nisi blanditiis amet ea iure sunt vel
            asperiores.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
