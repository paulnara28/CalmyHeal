import React, { useState } from "react";
import iconleft1 from "../assets/image/kiri.png";
import { Link, useParams } from "react-router-dom";
import { udateRekapJurnal } from "../api";

export default function EditBacaBuku() {
  const { id } = useParams();
  const [dataForm, setDataForm] = useState({
    user_id: localStorage.getItem("iduser"),
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prevDataUser) => ({
      ...prevDataUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await udateRekapJurnal(`/${id}`, dataForm);
      const detail = response.data.data;
      console.log(detail);
      setTimeout(() => {
        window.location.href = "/RekapJurnalBuku";
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
    }
  };
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 py-12 ">
      <Link to="/RekapJurnalBuku">
        <button
          type="button"
          className="flex items-center text-base font-semibold text-[#176B87] rounded-xl outline-none hover:shadow-form mb-5"
        >
          <img src={iconleft1} alt="IconLeft" className="mr-2" />
          Kembali
        </button>
      </Link>
      <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12">
        <h1 className="text-4xl font-bold">Edit Jurnal</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-6 flex flex-col gap-4 justify-center lg:flex-row">
          <div className="text-base lg:text-xl  order-2 lg:order-1 lg:w-[1080px] ">
            <textarea
              className="bg-[#69B6B7] text-fourt h-80 w-full px-1 align-top rounded-lg"
              style={{
                resize: "none",
                overflowY: "auto",
                paddingTop: "01rem",
                paddingRight: "0.5rem",
              }}
              name="notes"
              onChange={handleChange}
            />
            <div className="flex justify-end mt-5 mb-2">
              <button className="bg-[#04364A] hover:bg-sixth text-fourt px-2 py-1 rounded-lg w-[135px] lg:text-lg lg:w-[162 px] lg:py-3 lg:font-semibold lg:rounded-lg text-center no-underline">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
