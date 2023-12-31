// #!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import { Course, Teacher, Student } from './Classes/Classes.js'
import { AddStudent, ViewStudents } from './Categories/Student.js';
import { AddTeacher, ViewTeachers } from './Categories/Teacher.js';
import { AddCourse, ViewCourses } from './Categories/Courses.js';

console.log(chalk.bold.blue(`\n<<<==========>>> ${chalk.redBright.bold.underline(" THIS PROJECT IS MADE BY HARIS MUJTABA KHAN")} <<<==========>>>\n`));


console.log(chalk.bold.blue(`   <<<================================>>>`));
console.log(chalk.bold.blue(`<<<==========>>>  ${chalk.redBright.bold.underline('STUDENTS MANAGEMENT SYSTEM')}  <<<==========>>>`));
console.log(chalk.bold.blue(`   <<<================================>>>\n`));


let students: Student[] = []
let courses: Course[] = []
let teachers: Teacher[] = []

const DetailsInputs = async (type: string, name: string) => {
    let value: string | number
    while (true) {

        const input = await inquirer.prompt([{
            name: 'input',
            message: `Enter ${name}: `,
            type: type

        }])
        value = await input['input']
        if (value) {
            break
        }
    }
    return value
}


async function IndividualChoice(val: string, ...options: string[]) {
    const input = await inquirer.prompt([{
        name: 'choice',
        message: `${val} Options`,
        type: 'rawlist',
        choices: options,
    }])
    let value: string = await input['choice']
    return value
}

async function MakeChoice() {
    const input = await inquirer.prompt([{
        name: 'choice',
        message: "Select One",
        type: 'rawlist',
        choices: ["Student", "Teacher", "Course"]
    }])
    let value: string = await input['choice']
    if (value === "Student") {
        const option = await IndividualChoice("Student", "Add Student", "View Students")
        if (option === "Add Student") {
            await AddStudent(DetailsInputs, students)
        }
        if (option === "View Students") {
            await ViewStudents(students, courses)
        }
    }
    if (value === "Teacher") {
        const option = await IndividualChoice("Teacher", "Add Teacher", "View Teachers")
        if (option === 'Add Teacher') {
            await AddTeacher(DetailsInputs, teachers)
        }
        if (option === 'View Teachers') {
            await ViewTeachers(teachers, courses)
        }

    }
    if (value === "Course") {
        const option = await IndividualChoice("Course", "Add Course", "View Courses")
        if (option === "Add Course") {
            await AddCourse(DetailsInputs, courses)
        }
        if (option === "View Courses") {
            await ViewCourses(courses, teachers, students)
        }
    }
}



// Program Entry Point

while (true) {
    let choices = await MakeChoice()
    const input = await inquirer.prompt([
        {
            name: chalk.rgb(255, 255, 160)(`Do You Want To Exit?`),
            type: "confirm",
            default: false
        }
    ])
    let value: boolean = await input['\x1B[38;2;255;255;160mDo You Want To Exit?\x1B[39m']
    if (value) {
        break;
    }
    console.log(chalk.whiteBright('\n*****************************************************************\n'))
}
