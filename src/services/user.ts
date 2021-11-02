import { reactive } from "vue";
import { User } from '../../interfaces/user.interface';

export const userState = {
    state: reactive({
        user: {} as User,
        loggedIn:false as boolean
    }),
    setUser(user: User) {
        this.state.user = user;
        console.log(this.state.user);
        sessionStorage.setItem('user', JSON.stringify(user));
    },
    updateUser(updatedUser: User) {
        this.state.user = updatedUser;
        console.log(this.state.user);
        sessionStorage.setItem('user', JSON.stringify(updatedUser));
    },
    setAuth(authState:boolean) {
        this.state.loggedIn = authState
    },
    getAuth() {
        return this.state.loggedIn
    }
};