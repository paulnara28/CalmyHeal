import React from "react";
import iconleft1 from "../assets/image/kiri.png";
import { Link } from "react-router-dom";

export default function EditOlahraga() {
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 py-12 ">
       <Link to="/Rekap">
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
          />
          <div className="flex justify-end mt-5 mb-2">
            <button className="bg-[#04364A] hover:bg-sixth text-fourt px-2 py-1 rounded-lg w-[135px] lg:text-lg lg:w-[162 px] lg:py-3 lg:font-semibold lg:rounded-lg text-center no-underline">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
