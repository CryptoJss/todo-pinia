<template>
    <ul class="list-group">
        <todo-item
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo" />
        <li
            v-if="todos.length == 0"
            class="list-group-item">
            No hay ToDos
        </li>
        <todo-footer
            v-if="todos.length !== 0"
        />
    </ul>

    <todo-filtro />
</template>

<script>
import { computed } from '@vue/runtime-core'
import TodoItem from './TodoItem.vue'
import TodoFooter from './TodoFooter.vue'
import TodoFiltro from './TodoFiltro.vue'
import { useTodoStore } from '../stores/TodoStore'

export default {
    components: { TodoItem, TodoFooter, TodoFiltro },
    setup() {
        const todoStore = useTodoStore()

        const todos = computed(() => todoStore.todosGetter)

        return { todos }
    }
}
</script>

<style>
</style>