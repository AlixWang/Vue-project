if (localStorage.getItem('todolist')) {
    var todoList = JSON.parse(localStorage.getItem('todolist'));
} else {
    var todoList = {
        todo: [],
        compt: []
    }
}

new Vue({
    el: '#main',
    data: todoList,
    methods: {
        addtodo: function (ev) {
            // console.log(ev.currentTarget.parentNode.querySelector('input').value);
            if (ev.currentTarget.parentNode.querySelector('input').value) {
                this.todo.push({ things: ev.currentTarget.parentNode.querySelector('input').value });
                ev.currentTarget.parentNode.querySelector('input').value = ' ';
                setlocalStorage(todoList);
            }
            
        },
        deletetodo: function (item, ev) {
            console.log(item);
            this.todo.splice(this.todo.indexOf(item), 1);
            setlocalStorage(todoList);
        },
        deletecompt: function (item, ev) {
            console.log(item);
            this.compt.splice(this.compt.indexOf(item), 1);
            setlocalStorage(todoList);
        },
        tocompt: function (item, ev) {
            console.log(item);
            this.compt.unshift(item);
            this.todo.splice(this.todo.indexOf(item), 1);
            setlocalStorage(todoList);
        },
        retodo: function (item, ev) {
            console.log(item);
            this.todo.unshift(item);
            this.compt.splice(this.compt.indexOf(item), 1);
            setlocalStorage(todoList);

        }
    }
});
function setlocalStorage(data){
    localStorage.setItem('todolist',JSON.stringify(data));
}