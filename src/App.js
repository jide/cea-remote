import { db } from "./config";
import { doc, updateDoc } from "firebase/firestore";

const combinations = [
  ["2563", 1, 1, 0, 0],
  ["0176", 0, 0, 1, 0],
  ["9766", 0, 0, 1, 0],
  ["5678", 1, 0, 1, 0],
  ["5463", 1, 0, 1, 1],
];

function App() {
  const ref = doc(db, "state", "app");

  return (
    <div className="App">
      <button
        onClick={() =>
          updateDoc(ref, {
            reset: true,
          })
        }
      >
        RESET
      </button>
      <button
        onClick={() =>
          updateDoc(ref, {
            doSubmitIntroAccess: "REPVP",
          })
        }
      >
        INTRO
      </button>
      <button
        onClick={() =>
          updateDoc(ref, {
            doSubmitIAFlux: "ADBEC",
          })
        }
      >
        FLUX
      </button>
      <button
        onClick={() =>
          updateDoc(ref, {
            doSubmitIALearning: combinations[0],
          })
        }
      >
        IA CARTOUCHE
      </button>
      <button
        onClick={() =>
          updateDoc(ref, {
            doSubmitIALearning: combinations[1],
          })
        }
      >
        IA CANNETTE
      </button>
      <button
        onClick={() =>
          updateDoc(ref, {
            doSubmitIALearning: combinations[2],
          })
        }
      >
        IA FEUILLE
      </button>
      <button
        onClick={() =>
          updateDoc(ref, {
            doSubmitIALearning: combinations[3],
          })
        }
      >
        IA PHONE
      </button>
      <button
        onClick={() =>
          updateDoc(ref, {
            doSubmitIALearning: combinations[4],
          })
        }
      >
        IA ACID
      </button>
      <button
        onClick={() =>
          updateDoc(ref, {
            doSubmitIALearning: "RESPONSABLE",
          })
        }
      >
        CONSEQUENCES
      </button>
    </div>
  );
}

export default App;
