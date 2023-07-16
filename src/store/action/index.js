const setRecordsInStore = (data)=>{
    //console.log("data in setRecordsInStore action: ", data);
    return (dispatch)=>{
        dispatch({ type: "SETRECORDS", data:data })
    }
}

const setRecordsOrder = (data)=>{
    //console.log("data in setRecordsOrder action: ", data);
    return (dispatch)=>{
        dispatch({ type: "SETRECORDSORDER", data:data })
    }
}

const setSearchText = (data)=>{
    //console.log("data in setSearchText action: ", data);
    return (dispatch)=>{
        dispatch({ type: "SETSEARCHTEXT", data:data })
    }
}

export {
    setRecordsInStore,
    setRecordsOrder,
    setSearchText
}