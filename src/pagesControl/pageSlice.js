import { createSlice } from "@reduxjs/toolkit";
const pageSlice = createSlice({
    name: "page",
    initialState: {
      pageNo:0
    },
    reducers: {
      uptade: (state, action) => 
      {
        state.pageNo = action.payload;
      }
    }
  });
  export const { uptade} = pageSlice.actions;
  export const selectPage = (state) => {
    return state.page.pageNo;
    };
  export default pageSlice.reducer;