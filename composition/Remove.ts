import { List } from '@/types/List'

export const Remove = (list: List[]) => {
  const remove = (key: number): void => {
    const check = confirm('本当に削除しますか？')
    if (check) {
      list.splice(key, 1)
    }
  }
  return {
    remove,
  }
}
