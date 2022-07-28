<template>
    <li class="list-group-item d-flex justify-content-between">
        <span
            role="button"
            @click="completado(todo.id)"
            :class="{'tachado': todo.estado}">
                {{ todo.descripcion }}
        </span>
        <span
            role="button"
            @click="borrar(todo.id)">
                <i class="fas fa-times"></i>
        </span>
    </li>
</template>

<script>
import { useTodoStore } from '../stores/TodoStore'
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    setup(){

        const todoStore = useTodoStore()

        const borrar = id => {
            todoStore.borrarAction(id)
        }

        const completado = id => {
            todoStore.completadoAction(id)
        }

        return { borrar, completado }
    }
}
</script>

<style>
.tachado {
    text-decoration: line-through;
}

.list-group-item {
    min-width: 300px;
    width: 100%;
    background-color: #25273d;
    border-radius: 5px;
    color: #d8d8d8;
}

.fa-times {
    color: red;
}
</style>