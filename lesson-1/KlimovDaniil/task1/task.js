"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskTypeScriptIsInArray {
    constructor() {
        this.taskResult = isInArray([1, 4, 7, 9, 12, 20], 2, 4, 4, 7, 9, 14, 19, 20, 25);
        // this.taskResult = isInArray([1, 4, 7, 9, 12, 20], 1, 9, 12, 20);
    }
    getResult() {
        return this.taskResult;
    }
}
exports.TaskTypeScriptIsInArray = TaskTypeScriptIsInArray;
function isInArray(arr, ...args) {
    return args.every((item) => {
        return arr.includes(item);
    });
}
console.log(isInArray([1, 4, 7, 9, 12, 20], 2, 4, 4, 7, 9, 14, 19, 20, 25));
console.log(isInArray([1, 4, 7, 9, 12, 20], 1, 9, 12, 20));
