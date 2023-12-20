
class Todo {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;       // Important / Normal
    }
    static currentId = 3;
}

export default Todo;