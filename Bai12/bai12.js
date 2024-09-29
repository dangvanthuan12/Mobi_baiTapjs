const gameEvents = new Map([
  [10, "⚽ GOAL"],
  [25, "🔁 Substitution"],
  [40, "⚽ GOAL"],
  [55, "🔁 Substitution"],
  [58, "🔶 Yellow card"],
  [70, "🔴 Red card"],
  [73, "🔁 Substitution"],
  [74, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

gameEvents.delete(58);
const averageTime = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${averageTime} minutes`);
for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF]${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF]${key}: ${value}`);
  }
}
