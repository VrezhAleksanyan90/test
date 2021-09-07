import API from "../api";


export function createUser(user) {
    API.postAction(
        'users',
         user,
        (users) => console.log(users),
        (err) => console.log(err)
    )
}
