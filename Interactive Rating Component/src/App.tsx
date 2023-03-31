import { useState } from "react";
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
          <img src="../assets/icon-star.svg" alt="" className="star-icon" />

          <h1 className="title">How did we do?</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            sit suscipit sint molestiae reiciendis iure, libero iusto sed quod.
          </p>

          <div className="buttons">
            {[1, 2, 3, 4, 5].map((button, i) => {
              const isActive = button === rating;
              return (
                <div
                  className={`button ${isActive ? "activeButton" : null}`}
                  key={i}
                  onClick={() => handleRating(button)}
                >
                  {button}
                </div>
              );
            })}
          </div>

          <button className="submitButton" onClick={() => handleSubmit()}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default App;
