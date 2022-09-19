import { db } from "./config";
import { doc, updateDoc } from "firebase/firestore";

const combinations = [
  ["4442", 1, 1, 0, 0],
  ["9626", 0, 0, 1, 0],
  ["5120", 0, 0, 1, 0],
  ["6812", 1, 0, 1, 0],
  ["3956", 1, 0, 0, 1],
];

function App() {
  const ref = doc(db, "state", "app");

  function navigate(url) {
    updateDoc(ref, {
      navigate: url,
    });
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => navigate("/intro")}>/intro</button>
        <button onClick={() => navigate("/intro/access")}>/intro/access</button>
        <button onClick={() => navigate("/ia")}>/ia</button>
        <button onClick={() => navigate("/ia/flux")}>/ia/flux</button>
        <button onClick={() => navigate("/ia/learning")}>/ia/learning</button>
        <button onClick={() => navigate("/ia/consequences")}>
          /ia/consequences
        </button>
        <button onClick={() => navigate("/ia/consequences/video")}>
          /ia/consequences/video
        </button>
        <button onClick={() => navigate("/emergency")}>/emergency</button>
        <button onClick={() => navigate("/emergency/voice")}>
          /emergency/voice
        </button>
        <button onClick={() => navigate("/emergency/timer")}>
          /emergency/timer
        </button>
        <button onClick={() => navigate("/reset/win")}>/reset/win</button>
        <button onClick={() => navigate("/reset/loose")}>/reset/loose</button>
      </div>
      <div>
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
    </div>
  );
}

export default App;
