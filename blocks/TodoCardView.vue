<template>
  <div class="flex flex-col w-[17rem] border rounded-xl shadow-md hover:shadow relative">
    <div class="h-[15rem]">
      <TodoImage />
    </div>
    <div class="w-[16rem] max-h-[15rem] overflow-hidden overflow-y-auto mx-auto p-5">
      <p class="text-2xl font-bold mx-auto h-[2rem] max-w-[15rem] overflow-hidden truncate text-ellipsis">
        This is a todo list Item
      </p>
      <p>
        Description of the todo list
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur amet ratione ex, dolorum repellat ullam fuga vero exercitationem quia impedit aut nihil, perferendis voluptatem dignissimos corporis aliquid sapiente optio dolores.
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