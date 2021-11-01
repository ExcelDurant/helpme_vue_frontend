import { reactive } from "vue";

export const tokenState = {
    state: reactive({
        token:'' as string
    }),
    setToken(token:string) {
        this.state.token = token;
        console.log(this.state.token);
        sessionStorage.setItem('token', token);
    },
    updateToken(updatedToken:string) {
        this.state.token = updatedToken;
        console.log(this.state.token);
        sessionStorage.setItem('token', updatedToken);
    }
}