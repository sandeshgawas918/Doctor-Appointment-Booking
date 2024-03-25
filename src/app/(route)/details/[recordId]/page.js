"use client"

import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import DoctorDetail from './_components/DoctorDetail';
import DoctorSuggestion from './_components/DoctorSuggestion';

const page = ({ params }) => {

  const [doctor, setdoctor] = useState(null)

  useEffect(() => {
    selectedDoctor()
  }, [])

  const selectedDoctor = () => {
    GlobalApi.getDoctorbyId(params.recordId).then((res) => {
      setdoctor(res.data.data);
    })
  }

  return (
    <div className='mt-5'>
      <h1 className=' text-3xl font-semibold ml-4'>
        Doctor Details
      </h1>
      <div className=' grid grid-cols-1 md:grid-cols-4 mt-4'>
        <div className=' col-span-3'>
          {doctor && <DoctorDetail doctor={doctor} />}
        </div>
        <div className=' col-span-1'>
          <DoctorSuggestion />
        </div>
      </div>
    </div>
  )
}

export default page