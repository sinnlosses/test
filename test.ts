class Greeter {
    private greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    public greet() {
        console.log("Hello, " + this.greeting);
    }
}
var greeter = new Greeter("TypeScript");
greeter.greet();