"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskTypeScriptSummator {
    constructor() {
        this.taskResult = summator(1, '2', 3, 'lol', '4', 5);
    }
    getResult() {
        return this.taskResult;
    }
}
exports.TaskTypeScriptSummator = TaskTypeScriptSummator;
function toNumber(str) {
    return (!isNaN(parseInt(str))) ? parseInt(str) : 0;
}
function summator(...args) {
    return args.reduce((sum, current) => {
        return sum + ((typeof current === 'string') ? toNumber(current) : current);
    }, 0);
}
