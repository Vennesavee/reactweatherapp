import React from "react";
import ReactDOM from "react-dom";
import Style from "./App.css";

export default function Header() {
  return (
    <div>
      <header>
        <ul class="nav">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="https://en.wikipedia.org/wiki/Paris"
              target="_blank"
            >
              Paris
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://en.wikipedia.org/wiki/Toronto"
              target="_blank"
            >
              Toronto
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://en.wikipedia.org/wiki/Lancaster,_Lancashire"
              target="_blank"
            >
              Lancaster
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://en.wikipedia.org/wiki/Newport_Beach,_California"
              target="_blank"
            >
              Newport
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
