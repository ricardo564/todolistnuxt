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
  <div class="grid gap-4 pt-4">
    <div class="grid gap-4">
      <div class="mx-auto">
        <TodoCardCreate
          @refreshTodoList="setToDoList"
        />
      </div>
      <div class="flex justify-center gap-4 flex-wrap group">
        <TodoCardView
          :toDoList="toDoList"
        />
      </div>
    </div>
  </div>
</template>