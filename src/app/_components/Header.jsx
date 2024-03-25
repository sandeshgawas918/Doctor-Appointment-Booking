"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  let { user } = useKindeBrowserClient();
  useEffect(() => {}, [user]);

  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/#explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "#footer",
    },
    {
      id:4,
      name:"Categories",
      path:"/Search/Cardiologist"
    }
  ];
  return (
    <div className=" flex justify-between items-center p-4 shadow-sm">
      <nav className=" flex items-center gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={180}
            height={200}
            className=" cursor-pointer"
          />
        </Link>
        <ul className="md:flex gap-10 hidden">
          {Menu.map((m, i) => (
            <Link href={m.path} key={i}>
              <li
                className=" hover:text-purple-600 cursor-pointer hover:scale-105 transition-all ease-in-out"
                key={m.id}
              >
                {m.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button>
              {" "}
              <Image
                src={user.picture}
                width={30}
                height={30}
                alt="user"
                className=" rounded-full"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/mybooking">My Bookings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogoutLink>Log Out</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
};

export default Header;
