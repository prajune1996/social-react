const initState = {
    userAuthResponse:"isNotLoggedIn"
}

const UserAuthReducer = (state=initState, action) =>
{
    switch(action.type)
    {
        default: return state;
    }
}
export default UserAuthReducer;
