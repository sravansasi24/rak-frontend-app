import React from "react";

import {signUpRequest} from "./signUpApi";
import SignUpForm from "../../components/SignUpForm"
import { useAppDispatch } from "../../store";

 export  const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleSuccess = (value:any) => {
    dispatch(signUpRequest(value));
  };

  return (
    <>
     <div>
     <SignUpForm onSubmit={handleSuccess} /></div>
    </>
  );
};
