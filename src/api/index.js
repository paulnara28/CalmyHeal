import axios from "axios";

const fullURL = (path) => {
  return `http://103.127.98.169:3001/${path}`;
};

export const handleNetworkError = (error) => {
  if (error.message === "Network request failed") {
    alert(
      "Kesalahan Jaringan",
      "Silakan periksa koneksi Anda dan coba kembali.",
      "iconNoInet"
    );
  }
  throw error;
};

const post = (api) => (data) => {
  return axios.post(fullURL(api), data, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
  });
};

const put =
  (api) =>
  async (param = "", data) => {
    return axios.put(`${fullURL(api)}${param}`, data, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    });
  };

const get =
  (api) =>
  async (param = "") => {
    try {
      return await axios(
        `${fullURL(api)}${param}`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        },
        { handleNetworkError }
      );
    } catch (err) {
      console.log(err);
    }
  };

const del =
  (api) =>
  async (param = "") => {
    return axios.delete(`${fullURL(api)}${param}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    });
  };

const getWithSlug = (api) => (slug, token) => {
  return axios(
    `${fullURL(api)}${slug}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    },
    { handleNetworkError }
  ).catch((err) => {});
};

export const loginUser = post("auth/login");
export const registerUser = post("auth/register");
export const getBooks = get("book");
export const getSumarries = get("summary");
export const getRekapJurnal = get("rekapjurnal");
export const udateRekapJurnal = put("rekapjurnal/updaterekapjurnal");
export const postRekapJurnal = post("rekapjurnal/postrekapjurnal");

const API = {
  loginUser,
  registerUser,
  getRekapJurnal,
  udateRekapJurnal
};

export default API;
