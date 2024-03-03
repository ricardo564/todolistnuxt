<script setup lang="ts">
import { reset } from '@formkit/core'

const emits = defineEmits(['refreshTodoList']);

const imageId = ref<string>('');

const setImageId = (id: string) => {
  imageId.value = id;
}

const resetForm = () => {
    reset('todo-create-form');
}

const saveTodoOnLocalStorage = async(form: any) => {
  const todoList = JSON.parse(getItemFromLocalStorage('todo-list'));
  const todoId = generateId();

  const data = {
    ...form,
    id: todoId,
    imageId: imageId.value,
  };

  const newTodoList = todoList ? [...todoList, data] : [data];

  await saveItemOnLocalStorage('todo-list', JSON.stringify(newTodoList));
  emits('refreshTodoList');
  resetForm();
}
</script>
<template>
  <div class="max-w-[45rem] flex md:flex-row flex-col border rounded-xl shadow-md hover:shadow relative p-2 md:p-5">
    <div class="h-[13rem] my-auto mb-b">
      <TodoImage
        @saveImageId="setImageId"
      />
    </div>
    <FormKit
      class="w-full max-h-[15rem] overflow-hidden overflow-y-auto mx-auto px-2"
      type="form"
      id="todo-create-form"
      submit-label="Register"
      @submit="saveTodoOnLocalStorage"
      :actions="false"
    >
      <div class="flex md:flex-row flex-col gap-4 w-full max-h-[16rem] overflow-hidden overflow-y-auto mx-auto px-2">
        <div>
          <FormKit
            type="text"
            label="Nome do Todo"
            placeholder="Ex: Comprar pão"
            name="title"
            validation="required"
          />
        </div>
        <FormKit
          type="textarea"
          name="description"
          label="Descrição do Todo"
          placeholder="Remember to write in complete sentences."
          validation="required"
          validation-visibility="live"
          :validation-messages="{
            length: 'Instructions cannot be more than 120 characters.',
          }"
        />
      </div>
      <div class="flex justify-center">
        <FormKit
          type="submit"
          class="w-full bg-green-500 text-white border-white border"
          label="Criar item"
        />
      </div>
    </FormKit>
  </div>
</template>