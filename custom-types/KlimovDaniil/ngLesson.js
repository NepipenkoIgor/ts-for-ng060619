"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NGLesson {
    constructor(lessonContent) {
        this.lessonContent = lessonContent;
        this.lessonName = 'Undefined lesson';
        this.tasks = [];
        this.body = document.querySelector('body');
        this.lessonName = lessonContent.lessonName;
        this.tasks = lessonContent.lessonTasks;
        this.build();
    }
    build() {
        this.wrapperHeader();
        this.tasks.forEach((task, index) => {
            this.wrapperSection(task, index);
        });
    }
    wrapperHeader() {
        const header = document.createElement('h1');
        header.innerText = this.lessonName;
        if (this.body)
            this.body.appendChild(header);
    }
    wrapperSection(task, index) {
        task.taskResult = (task.taskResult !== undefined) ? task.taskResult.getResult() : 'Not Found';
        const section = document.createElement('section');
        section.innerHTML = '<section>' +
            '<h2> Task #' + index + ': ' + task.taskName + '</h2>' +
            '<div>Task Result:  ' + task.taskResult + '</div>' +
            '<hr></section>';
        if (this.body)
            this.body.appendChild(section);
    }
}
exports.NGLesson = NGLesson;
