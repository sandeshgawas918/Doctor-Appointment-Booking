"use client"

import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [AllDoctorList, setAllDoctorList] = useState([])
  useEffect(() => {
    getDoctorList()
  }, [])

  const getDoctorList = async () => {
    let doctors = await GlobalApi.getDoctors()
    // console.log(data);
    setAllDoctorList(doctors.data.data)
  }

  return (
    <main>
      <Hero />
      <CategorySearch />
      <DoctorList AllDoctorList={AllDoctorList} />
    </main>
  );
}
