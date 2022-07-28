<template>
    <form @submit.prevent="agregarToDo">
        <input
            type="text"
            class="form-control my-3"
            placeholder="Ingresar ToDo"
            v-model.trim="texto">
    </form>
</template>

<script>
import { ref } from '@vue/runtime-core'
import { useTodoStore } from '../stores/TodoStore'
export default {
    setup(){
        const todoStore = useTodoStore()
        const texto = ref('')

        const agregarToDo = () => {
            if(texto.value === ''){
                console.log('vacio')
                return
            }
            const todo = {
                descripcion: texto.value,
                estado: false
            }

            todoStore.agregarTodoAction(todo)

            texto.value = ''
        }
        return { agregarToDo, texto }
    }
}
</script>

<style>
input[type="text"] {
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 12px;
    color: #d8d8d8;
    border: none;
    flex-grow: 1;
    background-color: #25273d;
    box-sizing: border-box;
    height: 48px;
}

input[type="text"]:focus {
    outline: none;
    color: #d8d8d8;
    background-color: #25273d;
}
</style>