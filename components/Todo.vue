<template>
  <div>
    <input type="text" v-model="addText" placeholder="ToDoを入力" />
    <button v-on:click="add">追加</button>

    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>ToDo</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, i) in state.activeList" :key="todo">
          <td>
            {{ i }}<br />
            <button @click="change(i)">作業完了</button>
          </td>
          <td class="todo">{{ todo.text }}</td>
          <td>
            <button @click="remove(i)">削除</button>
            <button @click="edit(i)">更新</button>
          </td>
        </tr>
        <tr v-for="(todo, i) in state.disableList" class="completeTasks" :key="todo">
          <td>
            {{ i }}<br />
            <button @click="change(i)">戻す</button>
          </td>
          <td class="todo">{{ todo.text }}</td>
          <td>
            <button @click="remove(i)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref, toRefs } from '@nuxtjs/composition-api'
// 各種functionをimport
import { List } from '@/types/List'
import { Add } from '@/composition/Add'
import { Remove } from '@/composition/Remove'
import { Edit } from '@/composition/Edit'
import { Change } from '@/composition/Change'

export default defineComponent({
  setup() {
    const state: any = reactive({
      list: [] as List[],
      activeList: computed(() => state.list.filter((todo: List) => todo.flag)),
      disableList: computed(() => state.list.filter((todo: List) => !todo.flag)),
    })

    // functionを定義
    const { addText, add } = Add(state.list)
    const { remove } = Remove(state.list)
    const { edit } = Edit(state.list)
    const { change } = Change(state.list)

    return {
      addText,
      add,
      remove,
      edit,
      change,
      state,
    }
  },
})
</script>

<style scoped>
table {
  border: 2px solid #bbbbbb;
  border-collapse: collapse;
}
td {
  border: 1px solid #bbbbbb;
  text-align: center;
}
thead tr td {
  font-weight: bold;
}
.todo {
  text-align: left;
}
.completeTasks {
  background: #aaaaaa;
}
</style>
