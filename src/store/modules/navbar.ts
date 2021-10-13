// export default {
//     namespaced: true,
//     state: {
//       title: ''
//     },
//     mutations: {
//       setName(state: { title: string }, newTitle: string) {
//         state.title = newTitle
//       }
//     },
//     actions: {
//       updateName(context: { commit: (arg0: string, arg1: any) => void }, newTitle: string) {
//         context.commit('setName', newTitle)
//       }
//     }
//   }

import { reactive } from "vue";

export const navbarTitle = {
  state: reactive({
    title:''
  }),
  addNumber(newTitle:string) {
    this.state.title = newTitle;
  }
};

