import { List } from '@/types/List'

export const Edit = (list: List[]) => {
  const edit = (key: number): void => {
    const newText = window.prompt('以下内容で更新します。')
    if (!newText) {
      alert('入力欄が空欄です。')
      return
    }
    list[key].text = newText
  }
  return {
    edit,
  }
}
