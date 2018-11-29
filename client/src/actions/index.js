import axios from "axios";

export const FETCH_ENTRIES = "FETCH_ENTRIES";

export const fetchEntries = () => async dispatch => {
  const res = await axios.get("/api");
  dispatch({
    type: FETCH_ENTRIES,
    payload: res.data
  });
};
