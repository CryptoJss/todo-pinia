<template>
    <div class="btn-group mt-3 d-flex" role="group" aria-label="Filtro">
        <button
            type="button"
            class="btn"
            @click="filtro('pendientes')"
            :class="estado === 'pendientes' ? 'btn-success' : 'btn-dark'"
            >Pendientes</button>
        <button
            type="button"
            class="btn"
            @click="filtro('all')"
            :class="estado === 'all' ? 'btn-success' : 'btn-dark'"
            >Todos</button>
        <button
            type="button"
            class="btn"
            @click="filtro('completados')"
            :class="estado === 'completados' ? 'btn-success' : 'btn-dark'"
            >Completados</button>
    </div>
</template>

<script>
import { computed, inject } from '@vue/runtime-core';
import { useTodoStore } from '../stores/TodoStore'
export default {
    setup(){
        const todoStore = useTodoStore()
        const estado = computed(() => todoStore.estados)

        const filtro = (valor) => {
            todoStore.filtroAction(valor)
        }
        return { filtro, estado}
    }
}
</script>

<style>
</style>