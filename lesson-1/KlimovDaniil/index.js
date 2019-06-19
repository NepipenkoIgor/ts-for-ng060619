"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lesson_1 = require("./lesson");
const task_1 = require("./task2/task");
const task_2 = require("./task1/task");
const task_3 = require("./task3/task");
const task_4 = require("./task4/task");
const lesson = new lesson_1.NgLesson({
    lessonName: 'Lesson 1: TypeScript',
    lessonTasks: [{
            taskName: 'isInArray',
            taskResult: new task_2.TaskTypeScriptIsInArray()
        }, {
            taskName: 'summator',
            taskResult: new task_1.TaskTypeScriptSummator()
        }, {
            taskName: 'getUnique',
            taskResult: new task_3.TaskTypeScriptGetUnique()
        }, {
            taskName: 'toMatrix',
            taskResult: new task_4.TaskTypeScriptToMatrix()
        }]
});
