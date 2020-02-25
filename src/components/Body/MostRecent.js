import React from "react";
import Articles from "./Articles";

const recent_news = [
  {
    title: "Sample Title",
    summary: "Sample Summary",
    content: "This will lead you to content",
    image: "Sample Image",
    rate: 8
  },
  {
    title: "Another Sample Title",
    summary: "Another Sample Summary",
    content: "This will lead you to more content",
    image: "Another Sample Image",
    rate: 5
  },
  {
    title: "Sample Title",
    summary: "Sample Summary",
    content: "This will lead you to content",
    image: "Sample Image",
    rate: 6
  },
  {
    title: "Another Sample Title",
    summary: "Another Sample Summary",
    content: "This will lead you to more content",
    image: "Another Sample Image",
    rate: 7
  }
];

export default function MostRecent(props) {
  return (
    <div className="most-recent">
      <h2>Most Recent News</h2>
      <div>
        {recent_news.map(news => (
          <div className="article">
            <Articles
              image={news.image}
              title={news.title}
              summary={news.summary}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
