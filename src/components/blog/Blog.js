import React from "react";
import "./Blog.css";
import BlogApi from "./BlogApi.js";

function Blog() {
  return (
    <div className="blog-container">
      <h2>Our Blog</h2>
      <h1>Recent Blog</h1>
      <div className="blog-child1">
        {BlogApi.map((item) => {
          return (
            <div className="blog-card">
              <img src={item.img} />
              <h1>{item.heading}</h1>
              <p>{item.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
