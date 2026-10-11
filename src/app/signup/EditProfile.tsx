"use client";
import { signUp, updateUser } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { redirect } from "next/navigation";

import React from "react";


const EditProfile = () => {

    const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      const formData=new FormData(e.currentTarget as HTMLFormElement);
      const user= Object.fromEntries(formData.entries()) as{
        name:string,
        image:string

    }
    await updateUser({
        name: user.name,
        image: user.image
    })
    redirect('/')
  };



    return (
        <div className='container mx-auto flex justify-center h-screen mt-10'>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField
          isRequired
          name="name"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>
      <TextField
          isRequired
          name="image"
        >
          <Label>Image</Label>
          <Input placeholder="Enter image url" />
          <FieldError />
        </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
        </div>
    );
};

export default EditProfile;