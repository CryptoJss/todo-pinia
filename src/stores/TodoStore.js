import { defineStore } from 'pinia'
import { AddTodo, DeleteTodo, DeleteCompletedTodo } from '../firebase/crud.js'

export const useTodoStore = defineStore({
    id: 'todoStore',
    state: () => ({
        titulo: 'ToDo con PINIA',
        todoList: [],
        estado: 'all'
    }),
    getters: {
        todosGetter(state) {
            if (state.estado === 'all') {
                return state.todoList
            }
            if (state.estado === 'pendientes') {
                return state.todoList.filter(item => item.estado === false)
            }
            if (state.estado === 'completados') {
                return state.todoList.filter(item => item.estado === true)
            }
        },
        estados(state) {
            return state.estado
        },
        contarPendientes(state) {
            return state.todoList.filter(item => item.estado === false).length
        }
    },
    actions: {
        async agregarTodoAction(todo) {
            await AddTodo(todo)
            this.todoList.push(todo)
        },
        async borrarAction(id) {
            await DeleteTodo(id)
            this.todoList = this.todosGetter.filter(item => item.id !== id)
        },
        completadoAction(id) {
            this.todoList = this.todosGetter.map(item => {
                if (item.id === id) {
                    item.estado = !item.estado
                }
                return item
            })
        },
        async eliminarCompletadosAction() {
            await DeleteCompletedTodo()
            this.todoList = this.todosGetter.filter(item => item.estado === false)
        },
        filtroAction(valor) {
            this.estado = valor
        }
    }
})