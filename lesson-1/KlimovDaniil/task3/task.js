"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskTypeScriptGetUnique {
    constructor() {
        this.taskResult = getUnique(1, 3, 3, 5, 6, 8, 9, 9, 10);
    }
    getResult() {
        return this.taskResult;
    }
}
exports.TaskTypeScriptGetUnique = TaskTypeScriptGetUnique;
function getUnique(...arr) {
    return [...new Set(arr)];
}
