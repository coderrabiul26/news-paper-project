"use client";
import { useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import EditProfile from "../signup/EditProfile";

const ProfilePage = () => {
    const[showEditForm, setShowEditForm]=useState(false)
    const handleShowEditForm=()=>{
        setShowEditForm(!showEditForm)
    }
    console.log(showEditForm);



  const { data: session } = useSession();
  const user = session?.user;
  console.log(user);
  return (
    <div>
        {showEditForm? <EditProfile></EditProfile>:<div className="flex justify-center mt-8">
      <div className="flex flex-col bg-gray-100 card w-150 items-center justify-center">
        <Link href={"/profile"}>
              <img className="rounded-full"
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
        </Link>
        <h1>Name: {user?.name}</h1>
        <h1>Email address: {user?.email}</h1>
        <h1>ID no: {user?.id}</h1>
        <Button onClick={handleShowEditForm}>Edit Profile</Button>
       
      </div>
      
    </div>}
    </div>
    
    
  );
};

export default ProfilePage;
