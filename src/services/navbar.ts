import { reactive } from "vue";

export const navbarState = {
  state: reactive({
    title:'' as string,
    showAuth:true as boolean
  }),
  changeTitle(newTitle:string) {
    this.state.title = newTitle;
    console.log(this.state.title)
  },
  changeAuth(authState:boolean) {
    this.state.showAuth = authState;
    console.log(this.state.showAuth)
  }
};

