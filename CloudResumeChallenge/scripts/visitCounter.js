/*jshint esversion: 8 */

const p = document.querySelector("#visit-counter");
const updateCounter = async () => {
  const response = await fetch("https://6talwr4rehl6ccyvj43jqjxxl40jvqqf.lambda-url.us-east-1.on.aws/");
  const visitors = await response.json();
  p.textContent = `This page has been visited ${visitors} times`;
};

window.addEventListener("DOMContentLoaded", updateCounter);