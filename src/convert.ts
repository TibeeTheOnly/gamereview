import * as fs from 'fs';

const csvFilePath = 'src/játékok 1.csv';
const games: Game[] = handleData(readCSV(csvFilePath));

console.log(games);
writeJSON('public/games.json', games);


function readCSV(filePath: string): Game[] {
    const data = fs.readFileSync(filePath, 'utf-8');
    return data.split('\n').filter(line => line.trim() !== '').map(line => {
        const trimmedLine = line.trim();
        const [title, ratingStr, en_wiki] = trimmedLine.split(',');
        const rating = parseFloat(ratingStr);
        return { title, rating, en_wiki };
    });
}

function handleData(games: Game[]): Game[] {
    games.shift();
    games.sort((a, b) => b.rating - a.rating);
    return games;
}

function averageRating(games: Game[]): number {
    const averageRating = +(games.reduce((sum, game) => sum + game.rating, 0) / games.length).toFixed(3);
    return averageRating;
}

function writeJSON(filePath: string, data: Game[]): void {
    const jsonData = {
        averageRating: averageRating(data),
        games: data
    };
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');
}

export interface Game {
    title: string;
    rating: number;
    en_wiki: string;
}
