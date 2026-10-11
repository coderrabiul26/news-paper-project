"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

const Userinfo = () => {
  const { data: session } = useSession();
  const user = session?.user;

    const handleSignOut=async()=>{
        await signOut()
    }
  

  return (
    <div className="absolute right-0 top-4 flex items-center gap-2">
      {user ? (
        <div className="flex gap-4 items-center">
          <h1>Hey! <span className="text-black-500 font-bold text-2xl">{user.name}</span></h1>
          <Link href={'/profile'}>
            <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
            </div>
          </Link>
          <Button onClick={handleSignOut} className='bg-red-500'>Sign Out</Button>
        </div>
      ) : (
        <div>
          <div>
            <Link href={'/signin'}><button className="btn btn-outline border-none mr-3">
              সাইন ইন
            </button></Link>
            <Link href={'/signup'}><button className="btn btn-error bg-red-700 text-white">
              সাইন আপ
            </button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
