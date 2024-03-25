const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategory = () => {
  return axiosClient.get("/categories?populate=*");
};

const getDoctors = () => {
  return axiosClient.get("/doctors?populate=*");
};

const getDoctorbyCategory = (category) => {
  return axiosClient.get(
    `/doctors?filters[categories][Name][$in]=${category}&populate=*`
  );
};

const getDoctorbyId = (id) => {
  return axiosClient.get("/doctors/" + id + "?populate=*");
};

const bookAppointment = (data) => axiosClient.post("/appointments", data);

const sendEmail = (data) => axios.post("/api/sendEmail", data);

const getUserBookingList = (userEmail) => {
  return axiosClient.get(
    "/appointments?[filters][Email][$eq]=" +
      userEmail +
      "&populate[doctor][populate][Image][populate][0]=url&populate=*"
  );
};

const deleteBooking = (id) => axiosClient.delete("/appointments/" + id);

export default {
  getCategory,
  getDoctors,
  getDoctorbyCategory,
  getDoctorbyId,
  bookAppointment,
  sendEmail,
  getUserBookingList,
  deleteBooking,
};
