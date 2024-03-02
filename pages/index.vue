<script setup lang="ts">
const toDoList = ref<any[]>([]);


const setToDoList = () => {
  const todoList = JSON.parse(getItemFromLocalStorage('todo-list'));
  toDoList.value = todoList;
}

onMounted(() => {
  setToDoList();
})

</script>
<template>
    <h1 class="mx-auto text-3xl">
        Todo - List
    </h1>
    <div class="flex gap-4 flex-wrap group">
      <TodoCardCreate
        @refreshTodoList="setToDoList"
      />
      <TodoCardView
        :toDoList="toDoList.reverse()"
      />
    </div>
</template>