import { Paragraph } from "./paragraph";

export class TextDocument {
    paragraphs: Paragraph[];
    filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.paragraphs = [];
    }

    writeHTML(): void {
        const html = `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
                ${this.paragraphs.map(p => p.toHTML()).join("\n")}
            </div>
        `;
        const appDiv = document.getElementById("app");
        if (appDiv) {
            appDiv.innerHTML = html;
        }
    }
}