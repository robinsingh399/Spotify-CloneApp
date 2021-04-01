export const initialState = {
    user : null,
   //token:'BQDZHCQevsuPvjiQn0wLBRQp4YELW4UkJWnnY_bX5JrfbQpi-x98sJcP4WPqv0plA38V7VUCRDNU8Er_yb4Uxy2k_qBGZ6ban5qzTKFR1MrJX9MHJvD2sdokV6bEvZsDYB_VOJdgVMsn8BVmSE7_AfOW9xmfGBx5aLUYlequjsRg6Ur1',
    playlists:[],
    playing : false,
    item : null,
    discover_weekly:null,
}


const reducer = (state,action)=>{
    
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user : action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token : action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists : action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly : action.discover_weekly,
            }
        default:
            return state;
    }

}

export default reducer;