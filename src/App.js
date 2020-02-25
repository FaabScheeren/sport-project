import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from './components/Body/Body';

const recent_news = [
  {
    title: 'Sample Title',
    summary: 'Sample Summary',
    content: 'This will lead you to content',
    image: 'Sample Image'
  },
  {
    title: 'Another Sample Title',
    summary: 'Another Sample Summary',
    content: 'This will lead you to more content',
    image: 'Another Sample Image'
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <Body
         
      />
    </div>
  );
}

export default App;
