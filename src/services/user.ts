import { reactive } from "vue";
import { User } from '../../interfaces/user.interface';

export const userState = {
    state: reactive({
        user: JSON.parse(localStorage.getItem('user') || '{}') as User,
        loggedIn: false as boolean
    }),
    async fetchUser() {
        console.log('fetching user from state')
        let token = sessionStorage.getItem('token');
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        };
        fetch("https://pure-archive-330723.uc.r.appspot.com/auth/profile", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setUser(data);
            })
            .catch((err) => {
                console.error(err);
            })
    },
    setUser(user: User) {
        this.state.user = user;
        sessionStorage.setItem('user', JSON.stringify(user));
    },
    updateUser(updatedUser: User) {
        this.state.user = updatedUser;
        sessionStorage.setItem('user', JSON.stringify(updatedUser));
    },
    setAuth(authState: boolean) {
        this.state.loggedIn = authState;
        sessionStorage.setItem('loggedIn', JSON.stringify(authState));
    },
    getAuth() {
        return this.state.loggedIn
    }
};