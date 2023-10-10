console.log('Loading..');

const fs = require("fs").promises;
const path = require("path");

let id = 1
const newQuestions = [];

(async () => {
  try {
    const str = await fs.readFile(path.join(__dirname, 'convertible.txt'), "utf8");
    const lines = str.split("\n");
    lines.forEach(line => {
      const card = {};
      const item = line.trim().split(" - ");
      card.id = id
      card.en = item[0];
      card.rus = item[1];
      card.example = item[2]
      newQuestions.push(card);
      id++
    });
    await fs.writeFile(path.join(__dirname, '../src/data/enRusArray.json'), JSON.stringify(newQuestions));
    console.log('..loading is complete');
  } catch (err) {
    console.error(err);
  }
})();