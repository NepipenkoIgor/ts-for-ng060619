import { NgLesson } from './lesson';
import { TaskTypeScriptSummator } from './task2/task';
import { TaskTypeScriptIsInArray } from './task1/task';
import { TaskTypeScriptGetUnique } from './task3/task';
import { TaskTypeScriptToMatrix } from './task4/task';

const lesson: NgLesson = new NgLesson({
    lessonName: 'Lesson 1: TypeScript',
    lessonTasks: [{
        taskName: 'isInArray',
        taskResult: new TaskTypeScriptIsInArray()
    }, {
        taskName: 'summator',
        taskResult: new TaskTypeScriptSummator()
    }, {
        taskName: 'getUnique',
        taskResult: new TaskTypeScriptGetUnique()
    }, {
        taskName: 'toMatrix',
        taskResult: new TaskTypeScriptToMatrix()
    }]
});