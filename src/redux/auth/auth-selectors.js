export const getAuth = (state) => state.users.isAuth;
export const getToken = (state) => state.users.token;
export const getUsername = (state) => state.users.users.name;
export const getUserAvatar = (state) => state.users.users.avatar;
export const getAuthRefresh = (state) => state.users.isAuthRefresh;
