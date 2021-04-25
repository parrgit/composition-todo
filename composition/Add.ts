import { ref } from '@nuxtjs/composition-api'
import { List } from '@/types/List'

export const Add = (list: List[]) => {
  const addText = ref<string>('')
  const add = (): void => {
    if (addText.value) {
      list.splice(list.length + 1, 1, {
        text: addText.value,
        flag: true,
      })
      addText.value = ''
    }
  }
  return {
    addText,
    add,
  }
}
