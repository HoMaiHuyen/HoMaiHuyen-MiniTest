
import React from 'react';
import Header from './components/Header.jsx';
import Scores from './components/Scores.jsx';
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from './data.js';

function App() {
  return (
    <>
      <Header batchName="PNV" />
      <main className="scores-container">
        <Scores courseName="Java" courseResults={JAVA_RESULTS} />
        <Scores courseName="Python" courseResults={PYTHON_RESULTS} />
        <Scores courseName="HTML" courseResults={HTML_RESULTS} />
        <Scores courseName="English" courseResults={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;
