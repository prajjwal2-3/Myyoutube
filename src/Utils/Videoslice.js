import { createSlice } from "@reduxjs/toolkit"
export const Videoslice= createSlice({
    name: 'video',
    initialState: ({}),
    reducers: {
    addrecomvideo: (state,action)=>{
state.recomvideo = action.payload;
    },
    addrecomchannel: (state,action)=>{
        state.recomchannel = action.payload;
            },
    addwatchpagerecom:(state,action)=>{
        state.watchpagerecom=action.payload;
    },
    addsub:(state,action)=>{
        state.sub = action.payload;
    }
    }
})
export const {addrecomvideo,addrecomchannel,addwatchpagerecom,addsub} = Videoslice.actions;
export default Videoslice.reducer;