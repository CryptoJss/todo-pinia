<template>
    <li class="list-group-item d-flex justify-content-between">
        <span>
            {{ contarPendientes }} Pendientes
        </span>
        <span role="button" @click="eliminarCompletados">
            Eliminar completados
        </span>
    </li>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useTodoStore } from '../stores/TodoStore'
export default {
    setup(){
        const todoStore = useTodoStore()

        const contarPendientes = computed(() => todoStore.contarPendientes)

        const eliminarCompletados = () => {
            todoStore.eliminarCompletadosAction()
        }

        return { contarPendientes, eliminarCompletados }
    }
}
</script>

<style>
</style>