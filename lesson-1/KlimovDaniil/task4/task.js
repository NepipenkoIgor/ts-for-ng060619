"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskTypeScriptToMatrix {
    constructor() {
        this.taskResult = toMatrix([1, 3, 3, 5, 6, 8, 9, 9, 10], 5);
    }
    getResult() {
        return this.taskResult;
    }
}
exports.TaskTypeScriptToMatrix = TaskTypeScriptToMatrix;
function toMatrix(arr, sizeOfSubArrays) {
    const martix = [];
    for (let i = 0; i < sizeOfSubArrays; i++)
        martix[i] = arr.slice(0, sizeOfSubArrays);
    return martix;
}
