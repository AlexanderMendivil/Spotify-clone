export const initialState = {
    user:null,
    playlists: [],
    playing: false,
    item: null,
  token: "BQBf5tIsPuivp01y_2QaLUCZBWM0mVrnx6UpEONPKdjMs0Xox-I_9SB60Hp-n4R1vI85_xFqendFiHBeEXghACfIVFDMhDt7NnqZ3us2EGlDzYR-isSPaN0U1RgRMr25UuUXcQIYChyr-YVrih4_ZV4tgjqULw"
};

 const reducer = (state, action) =>{
    console.log(action);

    switch(action.type){
        case "SET_USER":
            return {
                ...state, user: action.user
            }

            case "SET_TOKEN":
                return{
                    ...state, token: action.token
                }

                case "SET_PLAYLIST":
                return{
                    ...state, playlists: action.playlists,
                }
            default: 
            return state;
        }
 }

 export default reducer;