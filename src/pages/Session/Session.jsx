import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";

export default function Session() {
  const { courseName, sessionID } = useParams();

  useEffect(() => {}, []);

  return (
    <>
      <Navbar />

      <main className="max-w-[1920px] mx-auto overflow-x-hidden pt-44 lg:pt-52 2xl:pt-56">
        <div className="container">
          <div className="aspect-video mt-8 sm:mt-10 overflow-hidden rounded-lg"></div>
        </div>
      </main>

      <Footer />
    </>
  );
}
