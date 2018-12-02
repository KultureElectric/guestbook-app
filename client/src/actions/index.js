import axios from "axios";

export const FETCH_ENTRIES = "FETCH_ENTRIES";

export const fetchEntries = () => async dispatch => {
  const res = await axios.get("/api");
  dispatch({
    type: FETCH_ENTRIES,
    payload: res.data
  });
};

export const sendEntry = (entry, history) => async dispatch => {
  const res = await axios.post("/api", entry);

  history.push("/");
  dispatch({
    type: FETCH_ENTRIES,
    payload: res.data
  });
};
