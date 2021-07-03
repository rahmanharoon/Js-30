const dogs = [
  {
    name: "Snickers",
    age: 2,
  },
  {
    name: "Hugo",
    age: 8,
  },
];

function makeGreen() {
  const p = document.querySelector("p");
  (p.style.color = "#BAD555"), (p.style.fontSize = "50px");
}

console.log(
  "%c Styled text",
  "font-size: 50px; background-color: red; text-shadow: 10px 10px 0 blue"
);

console.warn("Not a warning");

console.error("Shit!!");

console.info("No info to show");

console.assert(1 === 2, "That is wrong");

dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`Am ${dog.age * 7}  years old`);
  console.groupEnd(`${dog.name}`);
});

console.count("const");
console.count("const");
console.count("let");
console.count("var");

console.time("Fetching");
fetch("https://api.github.com/users/rahmanharoon")
  .then((data) => data.json)
  .then((data) => {
    console.timeEnd("Fetching");
    console.log(data);
  });
