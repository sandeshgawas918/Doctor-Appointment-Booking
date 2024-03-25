"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CategorySidebar = () => {
  const [CategoryList, setCategoryList] = useState([]);

  let urlPath = usePathname();
  let categoryUrl = urlPath.split("/")[2];

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {CategoryList &&
              CategoryList.map((category, index) => (
                <Link href={`/Search/${category.attributes.Name}`} className="" key={index}>
                  <CommandItem
                    className={`${
                      categoryUrl === category.attributes.Name && "bg-blue-100"
                    }  py-4`}
                  >
                    <Image
                      src={category.attributes.Icon.data.attributes.url}
                      width={30}
                      height={30}
                      alt="img"
                    />
                    <h3 className=" ml-3 text-purple-800">
                      {category.attributes.Name}
                    </h3>
                  </CommandItem>
                </Link>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CategorySidebar;
