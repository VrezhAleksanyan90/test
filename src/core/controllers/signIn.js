import API from "../api";


export function getUsers(successCB) {
    API.getAction(
        'users',
        (users) => successCB(users),
        (err) => {
            console.log(err);
        }
    )
}
