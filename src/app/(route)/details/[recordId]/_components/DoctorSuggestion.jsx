"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DoctorSuggestion = () => {
  const [AllDoctorList, setAllDoctorList] = useState([]);
  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = async () => {
    let doctors = await GlobalApi.getDoctors();
    setAllDoctorList(doctors.data.data);
  };
  return (
    <>
      <section className=" flex flex-col sm:mx-6 border-2 rounded-lg p-3 shadow-sm m-4 ">
        <h1 className="font-semibold text-center">Suggestions</h1>
        {AllDoctorList &&
          AllDoctorList.map((doctor, index) => (
            <Link href={`/details/${doctor.id}`}
              key={index}
              className=" border-[1px] rounded-lg p-4 hover:shadow-md hover:border-purple-700 transition-all ease-in-out my-2"
            >
              <div className=" grid grid-cols-3">
                <div className=" flex items-center justify-center">
                  <Image
                    src={
                      doctor?.attributes?.Image.data.attributes.formats
                        .thumbnail.url
                    }
                    width={500}
                    height={90}
                    alt="doctor"
                    className="h-[80px] w-[200px] object-cover rounded-full"
                  />
                </div>
                <div className=" col-span-2 ml-4">
                  <div className=" mt-2 flex items-baseline flex-col">
                    <p className=" text-[10px] bg-blue-100 p-1 rounded-full px-4 text-purple-700 ">
                      {doctor.attributes.categories.data[0].attributes.Name}
                    </p>
                    <h3 className=" mt-1 font-semibold text-[12px]">
                      {doctor?.attributes?.Name}
                    </h3>
                    <h4 className=" text-purple-600 text-[10px]">
                      {doctor?.attributes?.Year_of_Experience}
                    </h4>
                    <h3 className=" font-medium text-gray-600 text-[9px]">
                      {doctor?.attributes?.Address}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </>
  );
};

export default DoctorSuggestion;
