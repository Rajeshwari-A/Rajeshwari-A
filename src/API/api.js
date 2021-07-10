import axios from 'axios';
const API = (pageID) => {
  console.log("pageID--------", pageID)
  const defaultOptions = {
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 60 * 1000,
  };
  let instance = axios.create(defaultOptions);
  instance.interceptors.request.use(function (config) {
    // const token = getToken();
    // console.log(token, "inside header")
    // config.headers.Authorization = token ? token.AccessToken : '';
    // config.headers['X-Api-Key'] = 'S8LKRkhXTK34q8fDL3RClKaIr0S5Kxj81zag94l0';
    //config.headers['Access-Control-Allow-Origin'] = window.location.origin;
    config.headers['Content-Type'] = "application/json";
    // config.headers['origin'] = "http://localhost:3000";
    config.headers['Authorization'] = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjhiMjFkNWE1Y2U2OGM1MjNlZTc0MzI5YjQ3ZDg0NGE3YmZjODRjZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYnJpZGdlLWZ1bmQtcWEiLCJhdWQiOiJicmlkZ2UtZnVuZC1xYSIsImF1dGhfdGltZSI6MTYyNTU3NDQ0MCwidXNlcl9pZCI6IkVOS0xOU1d6RURjRkhOR1dtSWRsOTE1NkFsbjEiLCJzdWIiOiJFTktMTlNXekVEY0ZITkdXbUlkbDkxNTZBbG4xIiwiaWF0IjoxNjI1NTc0NDQwLCJleHAiOjE2MjU1NzgwNDAsImVtYWlsIjoicmFqZXNod2FyaS5rYW5jaGFtcmVkZHlAam10d29ybGR3aWRlbGxjLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyYWplc2h3YXJpLmthbmNoYW1yZWRkeUBqbXR3b3JsZHdpZGVsbGMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.COijfJpVePBsoGces_okwFcclo4RfI2-VOtfQwWfdmBs_zs9_zcAhXmVdNu5QIRLb4719qdDPIWYuzhZDNritJ3w9aG5lRebh0ZfR2z29m4kpAGAFMk6AEGy2r_a2GImOm_Y6GlHtqtWiETRsZ7qcNmLieXDJoBI4NscYOWMyfvqxRyzbbbn5j0TSdPhG5Htl7s5ozCQao1dCXNqEmpZWaMWJDcmUe5VDu5KVBREnr6lfPsFHHZLAuJo0DCuENhkZAe7GGKwARlrNYooLE99PV9ZLdoWExj4OsiHhjuipH9r_xqkJP-dRMWYQbdLWsJB2yJAMchhHlP5Dn9HHtnyHg"

    return config;
  });
  instance.interceptors.response.use((response) => response, (error) => {
    if (error.response) {
      error.message = error.response.data;
    } else {
      error.message = 'Something went wrong! Please try again later.'
    }
    return Promise.reject(error);
  })

  return instance;
}

export default API();
