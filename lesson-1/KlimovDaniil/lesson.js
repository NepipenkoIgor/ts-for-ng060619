"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ngLesson_1 = require("../../custom-types/KlimovDaniil/ngLesson");
class NgLesson extends ngLesson_1.NGLesson {
    constructor(lessonContent) {
        super(lessonContent);
        this.lessonContent = lessonContent;
    }
}
exports.NgLesson = NgLesson;
