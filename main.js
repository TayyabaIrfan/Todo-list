#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    let addTasks = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your Todo? "
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more in todo?",
            default: "false"
        }
    ]);
    todoList.push(addTasks.todo);
    condition = addTasks.addMore;
    console.log(todoList);
}
;
