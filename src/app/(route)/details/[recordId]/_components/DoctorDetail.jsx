"use client";

import { Button } from "@/components/ui/button";
import {
  Facebook,
  GraduationCap,
  Linkedin,
  MapPin,
  Sofa,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import BookAppointment from "./BookAppointment";

const DoctorDetail = ({ doctor }) => {
  const socialMediaList = [
    {
      id: 1,
      icon: <Linkedin />,
      url: "/",
    },
    {
      id: 2,
      icon: <X />,
      url: "/",
    },
    {
      id: 3,
      icon: <Facebook />,
      url: "/",
    },
    {
      id: 4,
      icon: <Youtube />,
      url: "/",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 border-2 p-2 rounded-lg shadow-sm mx-4">
        <div>
          <Image
            src={doctor.attributes.Image.data.attributes.formats.thumbnail.url}
            width={250}
            height={200}
            alt="doctor"
            className="h-[300px] w-full object-cover rounded-lg shadow-sm p-2 "
          />
        </div>
        <div className=" col-span-2">
          <h1 className=" font-bold text-2xl m-3">{doctor.attributes.Name}</h1>
          <h1 className=" flex flex-row m-3">
            <GraduationCap className=" text-3xl mr-3" />
            {doctor?.attributes?.Year_of_Experience} of Experience
          </h1>
          <h1 className=" flex flex-row m-3">
            <MapPin className=" text-3xl mr-3" />
            {doctor?.attributes?.Address}
          </h1>
          <h1 className=" flex flex-row m-3">
            <p className=" text-[12px] bg-blue-100 p-1 rounded-full px-4 text-purple-700 ">
              {doctor.attributes.categories.data[0].attributes.Name}
            </p>
          </h1>
          <h1 className=" flex flex-row gap-3 m-3">
            {socialMediaList.map((item, index) => (
              <Link href={item.url} key={index}>
                <p className=" bg-slate-100 p-3 rounded-full hover:bg-purple-600 hover:text-white ">
                  {item.icon}
                </p>
              </Link>
            ))}
          </h1>
          <h1 className=" flex flex-row m-3">
            <BookAppointment doctor={doctor}/>
          </h1>
        </div>
      </div>

      <div className=" mt-7 border-2 p-3 py-7 rounded-sm shadow-sm mx-4">
        <h1 className=" font-bold text-2xl">About Me</h1>
        <p className="mt-1 leading-1 tracking-wide text-gray-500">
          {doctor?.attributes?.About}
        </p>
      </div>
    </>
  );
};

export default DoctorDetail;
