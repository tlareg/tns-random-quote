import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    private quotes: string[] = [
        `In the beginning there was nothing, which exploded.`,
        `The pen is mightier than the sword if the sword is very short, and the pen is very sharp.`,
        `They say a little knowledge is a dangerous thing, but it's not one half so bad as a lot of ignorance.`,
        `It is better to travel well than to arrive.`,
        `Peace comes from within. Do not seek it without.`
    ];

    public currentQuote: string;

    constructor() {
        this.onNext();
    }
    
    public onNext() {
        const prevQuote = this.currentQuote;
        this.currentQuote = this.quotes[ Math.floor(Math.random() * this.quotes.length)];
        if (prevQuote === this.currentQuote) this.onNext();
    }
}
