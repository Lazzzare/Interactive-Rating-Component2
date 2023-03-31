import { useState } from "react";
import "./App.css";

type TPage = "choose" | "result";

function App() {
  const [page, setPage] = useState<TPage>("choose");
  return <div className="card">{page === "choose" && <h1></h1>}</div>;
}

export default App;
