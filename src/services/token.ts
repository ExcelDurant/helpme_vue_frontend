import { reactive } from "vue";

export const tokenState = {
    state: reactive({
        token: sessionStorage.getItem('token') || '' as string
    }),
    setToken(token:string) {
        this.state.token = token;
        sessionStorage.setItem('token', token);
        console.log(this.state.token);
    },
    updateToken(updatedToken:string) {
        this.state.token = updatedToken;
        console.log(this.state.token);
    }
}