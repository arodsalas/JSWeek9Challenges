class Person {
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log(`Go for a swim!`)
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`)
    }
}

const person1 = new Person("Alvaro", "Coding Apprentice", 21);

console.log(person1.name);
console.log(person1.job);
console.log(person1.age);
person1.exercise();
person1.fetchJob();

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy){
            console.log(`${this.name} is currently busy with another task`)
        } else {
            console.log(`${this.name} is ready for another task`)
        }
    }

    learnLanguage(language) {
        this.languages.push(language);
    }

    listLanguages() {
        console.log(this.languages)
    }
}

const programmer1 = new Programmer("Alvaro", "Programmer", 21, ["HTML", "CSS", "C#"]);

console.log(programmer1.name);
console.log(programmer1.job);
console.log(programmer1.age);
console.log(programmer1.languages);
console.log(programmer1.busy);
programmer1.exercise();
programmer1.fetchJob();

programmer1.completeTask();
console.log(programmer1.busy);

programmer1.acceptNewTask();
console.log(programmer1.busy);

programmer1.offerNewTask();
programmer1.completeTask();
programmer1.offerNewTask();

programmer1.learnLanguage("HTML");
programmer1.learnLanguage("CSS");
programmer1.learnLanguage("JavaScript");
programmer1.listLanguages();