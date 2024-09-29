const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];

const gk = players1[0];
const fieldPlayers = players1.slice(1); //slice trả về mảng mới cắt bớt phần tử array.slice(start, end)

const allPlayers = [...players1, ...players2]; //... giải nén tất cả phần từ vào 1 mảng (đưa tất cả p tử từ players1, 2 vào 1 mảng)
// const allPlayers = [players1, players2]; khi viết như nào sẽ tạo thành 1 mảng chứa 2 mảng bên trong

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const { team1, x: draw, team2 } = game.odds; // lấy giá trị từ game.odds, team1 = game.odds.team1 = 1.33 - draw = game.odds.x = 3.25 ...

const printGoals = (
  ...players //...players rest parameter gom các đối tượng truyền vào thành 1 mảng
) =>
  console.log(`${players.length} goals were scored by: ${players.join(", ")}`); // join tách các phần từ trong mảng thành 1 chuỗi (với dấu, ở giữa các pt)

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

const likelyWinner = (team1 < team2 && game.team1) || game.team2;
// nếu game.odds.team1 < game.odds.team2  => game.team1 = true đc trả về giá trị
//Ngược lại game.team1 = false => game.team2 trả về giá trị
console.log(`${likelyWinner} is more likely to win.`);
