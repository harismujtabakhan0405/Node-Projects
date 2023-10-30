#!/usr/bin/env node
class Person {
    personality;
    // students: Student[] = [];
    constructor() {
        this.personality = "Mystery Person!!!";
    }
    askQuestion(answer) {
        if (answer === 1) {
            this.personality = 'Extrovert Person';
        }
        else if (answer === 2) {
            this.personality = 'Introvert Person';
        }
        else {
            this.personality = 'Still a Mystery Person';
        }
    }
    getPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    _name = "";
    constructor(_name) {
        super();
        this._name;
    }
    get Name() {
        return this._name;
    }
    set Name(value) {
        this._name = value;
    }
}
export { Person, Student };
