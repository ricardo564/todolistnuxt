<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  imageId?: string;
}

const props = defineProps<Props>()

const emits = defineEmits(['saveImageId']);

const imageUrl = ref<string>('https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg');

const setImageUrl  = (url: string) => {
  imageUrl.value = url;
}

const saveImageOnLocalStorage = (url: string) => {
  const imageId = generateId();
  saveItemOnLocalStorage(imageId, url);
  emits('saveImageId', imageId);
}

const getImageFromLocalStorage = (id: string) => {
  const image = getItemFromLocalStorage(id);
  if(image) {
    setImageUrl(image);
  }
}

const updateOnChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  const fileReader = new FileReader();

  if (!files) return;

  fileReader.readAsDataURL(files[0]);

  fileReader.addEventListener('load', () => {
    const url = String(fileReader.result)

    if(!url) return

    setImageUrl(url);
    saveImageOnLocalStorage(url);
  })
};

onMounted(() => {
  if(props.imageId) {
    getImageFromLocalStorage(props.imageId);
  }
})

</script>
<template>
  <div
    class="relative flex justify-center items-center w-full h-full max-w-[17rem] max-h-[17rem] overflow-hidden rounded-xl relative border shadow group"
    title="Click to upload an image"
  >
    <input
      type="file"
      class="absolute inset-0 w-full h-full cursor-pointer opacity-0 z-[99]"
      accept=".png,.jpg,.jpeg"
      @change="updateOnChange"
    />
    <Icon
      icon="mdi:file-plus-outline"
      class="absolute inset-0 w-full h-full m-auto text-gray-500 opacity-0 group-hover:opacity-30"
    />
    <img
      :src="imageUrl"
      loading="lazy"
      class="object-cover w-full h-full"
      alt="image"
    />
  </div>
</template>