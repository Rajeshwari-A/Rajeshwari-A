import { put, takeLatest } from 'redux-saga/effects';
// import API from '../../API/api';
// import * as actions from "../Actions/index";
import localforage from 'localforage';
import axios from 'axios';
import * as actionType from "../types";
import API from "../../API/api";


export const updateLenderProfileDetailsSaga = function* async (action) {
  const {navLink, history, lenderData} = action;
  console.log("--------lenderData test-----------", lenderData)
    try {
      // let token;
      localforage.getItem('authToken').then((token) => {
        // token = res;
        fetch(
          `${process.env.REACT_APP_BASE_URL}api/register/page${action.pageID}`,
          {
            method: "PATCH",
            // mode: "cors",
            headers: {
              "Content-Type": "application/json",
              origin: "http://localhost:3000",
              Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjhiMjFkNWE1Y2U2OGM1MjNlZTc0MzI5YjQ3ZDg0NGE3YmZjODRjZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYnJpZGdlLWZ1bmQtcWEiLCJhdWQiOiJicmlkZ2UtZnVuZC1xYSIsImF1dGhfdGltZSI6MTYyNTU3NDQ0MCwidXNlcl9pZCI6IkVOS0xOU1d6RURjRkhOR1dtSWRsOTE1NkFsbjEiLCJzdWIiOiJFTktMTlNXekVEY0ZITkdXbUlkbDkxNTZBbG4xIiwiaWF0IjoxNjI1NTc0NDQwLCJleHAiOjE2MjU1NzgwNDAsImVtYWlsIjoicmFqZXNod2FyaS5rYW5jaGFtcmVkZHlAam10d29ybGR3aWRlbGxjLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyYWplc2h3YXJpLmthbmNoYW1yZWRkeUBqbXR3b3JsZHdpZGVsbGMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.COijfJpVePBsoGces_okwFcclo4RfI2-VOtfQwWfdmBs_zs9_zcAhXmVdNu5QIRLb4719qdDPIWYuzhZDNritJ3w9aG5lRebh0ZfR2z29m4kpAGAFMk6AEGy2r_a2GImOm_Y6GlHtqtWiETRsZ7qcNmLieXDJoBI4NscYOWMyfvqxRyzbbbn5j0TSdPhG5Htl7s5ozCQao1dCXNqEmpZWaMWJDcmUe5VDu5KVBREnr6lfPsFHHZLAuJo0DCuENhkZAe7GGKwARlrNYooLE99PV9ZLdoWExj4OsiHhjuipH9r_xqkJP-dRMWYQbdLWsJB2yJAMchhHlP5Dn9HHtnyHg`,
              // AccessControlAllowOrigin: window.location.origin,
  
            },
            body: JSON.stringify({  
              ...action.lenderData }) 
          }
        ).then((res) => {
          console.log("res----", res);
          // yield put({ type: actionType.UPDATE_LENDER_PROFILE_DETAILS_SUCCESS });

          history.push(navLink);

        })
      })
    } catch (error) {
      console.log("error inside save user saga");
      yield put({ type: actionType.UPDATE_LENDER_PROFILE_DETAILS_FAILED });
    }
    // console.log("inside final saga")
  };
  
  export default function* watchupdateLenderProfileDetailsSaga() {
    yield takeLatest(actionType.UPDATE_LENDER_PROFILE_DETAILS, updateLenderProfileDetailsSaga);    
  }

