"use client";
import { signIn } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";



const SignInPage = () => {

    const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      const formData=new FormData(e.currentTarget as HTMLFormElement);
      const user= Object.fromEntries(formData.entries()) as{
        email: string,
        password:string
    }

    const{data, error}=await signIn.email({
      ...user,
      callbackURL: '/'
    })
    if(data){
      toast.success('Logged in successfully')
      redirect('/')
      console.log(data);
    }
    if(error){
      toast.error(`${error.message}`)
      console.log(error);
    } 
  };
  const handleGoogleSignIn=async()=>{
    const data=await signIn.social({
      provider:'google'
    })
  }
  const handleGithubSignIn=async()=>{
    const data=await signIn.social({
      provider:'github'
    })
  }



    return (
        <div className='container mx-auto flex flex-col items-center  h-screen mt-10'>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter your email" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
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
    <Button onClick={handleGoogleSignIn} className='w-96 mt-3 bg-violet-500'>Sign in with google</Button>
    <Button onClick={handleGithubSignIn} className='w-96 mt-3 bg-red-500'>Sign in with github</Button>
        </div>
        
    );
};

export default SignInPage;