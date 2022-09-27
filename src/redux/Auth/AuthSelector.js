const getIsAuth = state => state.auth.isAuth;
const getUserName = state => state.auth.user.name;

export const AuthSelectors = {
    getUserName,
    getIsAuth
};