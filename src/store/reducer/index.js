const INITIAL_STATE = {
    records: [],
    order: "",
    searchText: ""
}

const reducer = (state, action) => {
    //console.log("action in reducer: ", action);
    switch (action.type) {
        case "SETRECORDS":
            return ({
                ...state,
                records: [...action.data]
            });
        case "SETRECORDSORDER":
            return ({
                ...state,
                order: action.data
            });
        case "SETSEARCHTEXT":
            return ({
                ...state,
                searchText: action.data
            });
        default:
            return state = INITIAL_STATE;
    }
}

export default reducer;