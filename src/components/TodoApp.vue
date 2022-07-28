<template>
    <h1>{{ todoStore.titulo }}</h1>
    <todo-formulario />
    <todo-listado />
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { useTodoStore } from '../stores/TodoStore'
import TodoFormulario from './TodoFormulario.vue'
import TodoListado from './TodoListado.vue'
import { GetAllTodos } from '../firebase/crud.js'

export default {
    components: { TodoFormulario, TodoListado },
    setup() {
        const todoStore = useTodoStore()

        // todoStore.$subscribe((mutation, state) => {
        //     localStorage.setItem('pinia', JSON.stringify(state.todoList));
        // });

        // if (localStorage.getItem('pinia')) {
        //     todoStore.todoList = JSON.parse(localStorage.getItem('pinia'));
        // }

        onMounted(async()=> {
            const todosList = await GetAllTodos()
            todoStore.todoList = todosList
        })

        return { todoStore }
    }
}
</script>

<style>
h1 {
    color: #ffffff;
}
</style>