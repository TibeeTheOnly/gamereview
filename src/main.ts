import { TextDocument } from "./text-document";
import { Paragraph } from "./paragraph";

const jsonFilePath = "games.json";
const htmlFilePath = "index.html";

main();

function init() {
  document.addEventListener("DOMContentLoaded", () => {
    createGameReviewDocument();
  });
}

async function createGameReviewDocument() {
  const data = await importJSON(jsonFilePath);
  console.log(data);
  const paragraphs: Paragraph[] = data.games.map(
    (game: { title: string; rating: number, en_wiki: string }) =>
      new Paragraph(
        game.title,
        game.rating,
        game.en_wiki,
        game.rating > 4.8 ? "felett" : game.rating < 4 ? "alatt" : ""
      )
  );
  const doc = new TextDocument(htmlFilePath);
  doc.paragraphs = paragraphs;
  doc.writeHTML();
}

async function main() {
  init();
}

async function importJSON(filePath: string): Promise<any> {
  return fetch(filePath)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);
    });
}
