import { List } from '@/types/List'

export const Change = (list: List[]) => {
  const change = (key: number): void => {
    list[key].flag = !list[key].flag
  }
  return {
    change,
  }
}
