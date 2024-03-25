"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const CategorySearch = () => {
  const [CategoryList, setCategoryList] = useState([]);
  // const [filteredCategory, setfilteredCategory] = useState([])
  // const [filteritem,setFilteritem]=useState('')

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };

  // const filteredArray=()=>{
  //   const result=CategoryList.filter((item)=>{
  //     return (item.attributes.Name).toLowerCase()==(filteritem).toLowerCase()
  //   })
  //   console.log(filteritem);
  //   console.log(result);
  //   setfilteredCategory(result)
  //   console.log(filteredCategory);
  // }

  return (
    <div className=" mt-5 flex gap-2 flex-col items-center p-5 text-center" id="explore">
      <h1 className=" text-4xl font-bold">Search Doctor by Category</h1>
      <p className=" text-xl">
        Search Doctor and Book appointment in one click
      </p>

      {/* <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
        <Input value={filteritem} onChange={(e)=>{setFilteritem(e.target.value)}} type="email" placeholder="Search..." className="outline-none! border-0!important hover:outline-none! outline" />
        <Button type="submit" onClick={filteredArray}>
          {" "}
          <Search className=" h-5 w-5 mr-2" /> Search
        </Button>
      </div> */}

      {/* Category display from strapi backend */}
      <section className=" grid sm:grid-cols-3 md:grid-cols-4 gap-3 mt-5 ">
        {CategoryList.length > 0
          ? CategoryList.map((category, index) => (
              <Link href={`/Search/${category.attributes.Name}`} key={index}>
                <ul className=" flex flex-col gap-2 items-center justify-center bg-blue-50 p-5 m-5 rounded-lg hover:shadow-sm hover:scale-110 cursor-pointer transition-all ease-in-out">
                  <Image
                    src={category.attributes.Icon.data.attributes.url}
                    width={40}
                    height={40}
                    alt="img"
                  />
                  <li className=" text-purple-700">
                    {category.attributes.Name}
                  </li>
                </ul>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <Skeleton key={index} className="h-[150px] w-[150px] rounded-lg animate-pulse flex flex-col gap-2 items-center justify-center p-5 m-5" />
            ))}
      </section>
    </div>
  );
};

export default CategorySearch;
