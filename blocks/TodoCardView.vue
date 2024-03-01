<script setup lang="ts">
interface Props {
  toDoList: any[];
}

const props = defineProps<Props>()
</script>
<template>
  <div
    v-for="todo in props.toDoList"
    class="flex flex-col w-[17rem] border rounded-xl shadow-md hover:shadow relative"
    key="todo.id"
  >
    <div class="h-[15rem]">
      <TodoImage
        :imageId="todo.imageId"
      />
    </div>
    <div class="w-[16rem] max-h-[15rem] mx-auto p-5">
      <p class="text-2xl font-bold mx-auto h-[2rem] max-w-[15rem] overflow-hidden truncate text-ellipsis">
        {{ todo.title }}
      </p>
      <p class="h-full min-h-[16rem] overflow-hidden overflow-y-auto">
        {{ todo.description }}
      </p>
    </div>
    <div class="flex">
      <button class="w-full p-2 bg-red-500 text-white border-white border">
        Delet
      </button>
      <button class="w-full p-2 bg-orange-500 text-white border-white border">
        Edit
      </button>
      <button class="w-full p-2 bg-green-500 text-white border-white border">
        Add
      </button>
    </div>
  </div>
</template>