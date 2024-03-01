<script setup lang="ts">
const imageId = ref<string>('');

const setImageId = (id: string) => {
  imageId.value = id;
}

const saveTodoOnLocalStorage = (form: any) => {
  console.log(form);
  const todoId = generateId();
  const data = {
    ...form,
    imageId: imageId.value,
  };

  saveItemOnLocalStorage(todoId, JSON.stringify(data));
}
</script>
<template>
  <div class="flex flex-col w-[17rem] border rounded-xl shadow-md hover:shadow relative">
    <div class="h-[15rem]">
      <TodoImage
        @saveImageId="setImageId"
      />
    </div>
    <FormKit
    type="form"
    id="registration-example"
    submit-label="Register"
    @submit="saveTodoOnLocalStorage"
    :actions="false"
    >
      <div class="w-[16rem] max-h-[15rem] overflow-hidden overflow-y-auto mx-auto px-2">
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
          label="Criar Todo"
        />
      </div>
    </FormKit>
  </div>
</template>