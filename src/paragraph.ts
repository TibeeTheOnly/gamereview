export type ParagraphType = "felett" | "alatt" | "";

export class Paragraph {
    title: string;
    rating: number;
    en_wiki?: string;
    type: ParagraphType;

    constructor(title: string, rating: number, en_wiki: string, type: ParagraphType) {
        this.title = title;
        this.rating = rating;
        this.en_wiki = en_wiki;
        this.type = type;
    }

    toHTML(): string {
        switch (this.type) {
            case "felett":
                return `
                <div class="card bg-custom-1 mb-3">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">${"<span>⭐</span>".repeat(this.rating)}</p>
                    <a href="${this.en_wiki}" target="_blank" class="btn btn-primary">Wikipedia</a>
                </div>
                </div>
                `;
            case "alatt":
                return `
                <div class="card bg-custom-2 mb-3">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">${"<span>⭐</span>".repeat(this.rating)}</p>
                    <a href="${this.en_wiki}" target="_blank" class="btn btn-primary">Wikipedia</a>
                </div>
                </div>
                `;    
            default:
                return `
                <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">${"<span>⭐</span>".repeat(this.rating)}</p>
                    <a href="${this.en_wiki}" target="_blank" class="btn btn-primary">Wikipedia</a>
                </div>
                </div>
                `;    
        }
    }
}   