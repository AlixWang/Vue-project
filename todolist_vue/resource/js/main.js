if (localStorage.getItem('todolist')) {
    var todoList = JSON.parse(localStorage.getItem('todolist'));
} else {
    var todoList = {
        todo: [],
        compt: [],
        editable:false
    }
}

new Vue({
    el: '#main',
    data: todoList,
    watch:{
        todo:{
            handler:function(){
                console.log('todolist change');
                setlocalStorage(todoList);
            },
            deep:true
        },
        compt:{
            handler:function(){
                console.log('todolist change');
                setlocalStorage(todoList);
            },
            deep:true
        }
    },
    methods: {
        addtodo: function (ev) {
             console.log(ev.currentTarget.parentNode.querySelector('input').value);
            if (ev.currentTarget.parentNode.querySelector('input').value) {
                this.todo.push({ things: ev.currentTarget.parentNode.querySelector('input').value });
                ev.currentTarget.parentNode.querySelector('input').value = '';
                
            }
            
        },
        editetodo:function(item,ev){
            console.log(item);
            ev.currentTarget.contentEditable = true;
        },
        makesure:function(item,ev){
            ev.currentTarget.contentEditable = false;
            
        }
        ,
        deletetodo: function (item, ev) {
            console.log(item);
            this.todo.splice(this.todo.indexOf(item), 1);
        },
        deletecompt: function (item, ev) {
            console.log(item);
            this.compt.splice(this.compt.indexOf(item), 1);
        },
        tocompt: function (item, ev) {
            console.log(item);
            this.compt.unshift(item);
            this.todo.splice(this.todo.indexOf(item), 1);
        },
        retodo: function (item, ev) {
            console.log(item);
            this.todo.unshift(item);
            this.compt.splice(this.compt.indexOf(item), 1);

        }
    }
});
function setlocalStorage(data){
    localStorage.setItem('todolist',JSON.stringify(data));
}