/* test('suma 2 + 2 es igual a 4', () => {
    expect(2 + 2).toBe(4);
}); */

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }
}

describe('TaskManager', () => {
    let taskManager;

    beforeEach(() => {
        taskManager = new TaskManager();
    });

    test('agrega una tarea a la lista', () => {
        taskManager.addTask('Comprar víveres');
        const tasks = taskManager.getTasks();
        expect(tasks).toHaveLength(1);
        expect(tasks[0]).toBe('Comprar víveres');
    });

    test('agrega múltiples tareas a la lista', () => {
        taskManager.addTask('Hacer ejercicio');
        taskManager.addTask('Estudiar para el examen');
        const tasks = taskManager.getTasks();
        expect(tasks).toHaveLength(2);
        expect(tasks).toContain('Hacer ejercicio');
        expect(tasks).toContain('Estudiar para el examen');
    });
});