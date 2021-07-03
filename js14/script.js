const players = ["wes", "vue", "lambda"];

const team = players;

console.log(players, team);

team[3] = "Lux";

const team2 = players.slice();

const team3 = [].concat(players);

const team4 = [...players];

team4[3] = "llala";

console.log(team);
console.log(team2);
console.log(team3);
console.log(team4);

const team5 = Array.from(players);

const captain = {
  name: "lala",
  age: 80,
};

const cap2 = Object.assign({}, captain, { number: 99 });

console.log(captain);
console.log(cap2, "cap2");

const wes = {
  name: "wes",
  age: 10,
  social: {
    twitter: "twitter.com",
  },
};

const wes2 = Object.assign({}, wes);

const wes3 = JSON.parse(JSON.stringify(wes));
