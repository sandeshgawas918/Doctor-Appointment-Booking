import Image from "next/image";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const DoctorList = ({ AllDoctorList, heading = "Popular Doctors" }) => {
  return (
    <div className=" px-4">
      <h1 className=" text-2xl font-semibold mt-5">{heading}</h1>

      <section className=" grid grid-cols-1 lg:grid-cols-4 gap-7 mt-5">
        {AllDoctorList.length > 0
          ? AllDoctorList.map((doctor, index) => (
            <div
              key={index}
              className=" border-[1px] rounded-lg p-4 hover:shadow-md hover:border-purple-700 transition-all ease-in-out"
            >
              <Image
                src={
                  doctor?.attributes?.Image.data.attributes.formats.thumbnail.url
                }
                width={500}
                height={200}
                alt="doctor"
                className="h-[200px] w-full object-cover rounded"
              />
              <div className=" mt-2 flex items-baseline flex-col">
                <p className=" text-[10px] sm:text-[12px]  bg-blue-100 p-1 rounded-full px-4 text-purple-700 ">
                  {doctor.attributes.categories.data[0].attributes.Name}
                </p>
                <h3 className=" text-[13px] sm:text-[17px] mt-1 font-semibold">
                  {doctor?.attributes?.Name}
                </h3>
                <h4 className=" text-[13px] sm:text-[17px] text-purple-600">
                  {doctor?.attributes?.Year_of_Experience}
                </h4>
                <h3 className=" text-[13px] sm:text-[17px] font-medium text-gray-600">
                  {doctor?.attributes?.Address}
                </h3>

                <Link
                  href={`/details/${doctor.id}`}
                  className=" p-2 rounded-full w-full border-[2px] border-purple-700 mt-3 text-purple-700 hover:text-white hover:bg-purple-700 cursor-pointer"
                >
                  <h1 className=" flex items-center justify-center">
                    Book Now
                  </h1>
                </Link>
              </div>
            </div>
          ))
          : // skeleton effect
          [1, 2, 3, 4, 5].map((item, index) => (
            //   <div className=" h-[400px] w-full bg-slate-200 rounded-lg animate-pulse "></div>
            <Skeleton key={index} className="w-full h-[390px] rounded-lg" />
          ))}
      </section>
    </div>
  );
};

export default DoctorList;
