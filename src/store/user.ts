import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
    }
  },
  actions: {
    // 注意：不能使用箭头函数定义action，因为this的问题
    updateName(name: string) {
      this.name = name
    },
  },
})
