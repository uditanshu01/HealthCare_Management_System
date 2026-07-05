import api from "../api/axios";

export const getDoctors = async () => {
  const res = await api.get("/doctors");
  return res.data;
};

export const createDoctor = async (data: unknown) => {
  const res = await api.post("/doctors", data);
  return res.data;
};

export const updateDoctor = async (
  id: string,
  data: unknown
) => {
  const res = await api.put(`/doctors/${id}`, data);
  return res.data;
};

export const deleteDoctor = async (id: string) => {
  const res = await api.delete(`/doctors/${id}`);
  return res.data;
};