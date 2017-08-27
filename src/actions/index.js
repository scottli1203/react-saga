
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_All_DEPS = 'GET_All_DEPS'
export const GET_DEP_USERS = 'GET_DEP_USERS'

export const getAllUsers = (users) => ({
    type: GET_ALL_USERS,
    users
});

export const getAllDeps = (deps) => ({
    type: GET_All_DEPS,
    deps
});

export const getDepUsers = (depId) => ({
    type: GET_DEP_USERS,
    depId
});