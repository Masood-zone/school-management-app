import axios from "axios";

const createUrl = (apiUrl) => (path) =>
  path.startsWith("/") ? `${apiUrl}${path}` : `${apiUrl}/${path}`;
axios.interceptors.request.use((req) => {
  if (req.url.startsWith("/api")) return req;
  req.url = createUrl("http://localhost:8000")(req.url);
  req.withCredentials = false;
  return req;
});

axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const persistData = JSON.parse(localStorage.getItem("admin"));
    const admin = persistData;
    if (admin) {
      const accessToken = admin.token;
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (
      err &&
      err.response &&
      (err.response.status === 401 || err.response.status === 403)
    ) {
      window.location.href = "/signup";
    }
    throw err;
  }
);
