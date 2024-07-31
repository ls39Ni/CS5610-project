import React from "react";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import QuizQuestionsEditor from "./QuizQuestionsEditor";
import MultipleChoiceEditor from "./QuizQuestionsEditor/MultipleChoiceEditor";
import Selector from "./QuizQuestionsEditor/Selector";
import { HashRouter, Route, Routes,  Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="h-100">
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/QuizQuestionsEditor/*" element={<QuizQuestionsEditor />} />
          <Route path="/QuizQuestionsEditor/Selector/*" element={<Selector />} />
          <Route path="/QuizQuestionsEditor/MultipleChoice/" element={<MultipleChoiceEditor />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;