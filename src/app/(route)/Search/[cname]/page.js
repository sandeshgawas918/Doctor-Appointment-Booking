"use client"

import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

  const [categoryDoctor, setcategoryDoctor] = useState([])

  useEffect(()=>{
    console.log(params.cname);
    getCategoryDoctor()
  },[])

  const getCategoryDoctor=()=>{
    GlobalApi.getDoctorbyCategory(params.cname).then((res)=>{
      setcategoryDoctor(res.data.data);
    })
  }

  return (
    <div>
      {/* <section className=" grid grid-cols-2 lg:grid-cols-4 gap-7 mt-5">
        {categoryDoctor.length > 0
          && categoryDoctor.map((doctor, index) => (
              <div
                key={index}
                className=" border-[1px] rounded-lg p-4 hover:shadow-md hover:border-purple-700 transition-all ease-in-out"
              >
                <Image
                  src={
                    doctor?.attributes?.Image.data.attributes.formats.thumbnail
                      .url
                  }
                  width={500}
                  height={200}
                  alt="doctor"
                  className="h-[200px] w-full object-cover rounded"
                />
                <div className=" mt-2 flex items-baseline flex-col">
                  <p className=" text-[12px] bg-blue-100 p-1 rounded-full px-4 text-purple-700 ">
                    {doctor.attributes.categories.data[0].attributes.Name}
                  </p>
                  <h3 className=" mt-1 font-semibold">
                    {doctor?.attributes?.Name}
                  </h3>
                  <h4 className=" text-purple-600">
                    {doctor?.attributes?.Year_of_Experience}
                  </h4>
                  <h3 className=" font-medium text-gray-600">
                    {doctor?.attributes?.Address}
                  </h3>

                  <button className=" p-2 rounded-full w-full border-[2px] border-purple-700 mt-3 text-purple-700 hover:text-white hover:bg-purple-700 cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            ))
          // : 
          //   [1, 2, 3, 4, 5].map((item, index) => (
          //   <Skeleton className="w-full h-[390px] rounded-lg" />
          //   ))
            }
      </section> */}

      <DoctorList AllDoctorList={categoryDoctor} heading={params.cname}/>
    </div>
  )
}

export default page