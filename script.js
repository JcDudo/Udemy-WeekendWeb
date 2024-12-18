console.log("Hello World!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// console.log(parseInt("24.533ccc"));

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2055));

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}`;

console.log(calcFactAge2(2016));
console.log(calcFactAge2(2027));

// let votesInteresting = 19;
// let votesMindBlowing = 20;

// if (votesInteresting === votesMindBlowing) {
//   alert("This fact is equally interesting and mindblowing");
// } else if (votesInteresting > votesMindBlowing) {
//   console.log("Interesting fact!");
// } else {
//   console.log("Mindblowing fact");
// }

// let votesFalse = 7;
// const totalUpvotes = votesInteresting + votesMindBlowing;

// const message =
//   totalUpvotes > votesFalse
//     ? "The fact is true"
//     : "Might be false, check more sources...";

// alert(message);

// const text = "Lisbon is the capital of Portugal";
// const upperText = text.toUpperCase();
// console.log(upperText);

// const str = `The current fact is "${text}". It is  ${calcFactAge(
//   2015
// )} years old. It is probably ${
//   totalUpvotes > votesFalse ? "correct" : "not true"
// }`;
// console.log(str);

const fact = ["Lisbon is the capital of Portual", 2015, true];

console.log(fact);
console.log(fact[2]);
console.log(fact.length);

const [text, createdIn, isCorrect] = fact;
console.log(createdIn);

const newFact = [...fact, "society"];
console.log(newFact);
