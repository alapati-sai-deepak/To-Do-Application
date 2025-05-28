import axios from 'axios';
// import { ExampleSchemaType } from "../validationschema/userschema/userSchema";

import {useMutation, useQuery} from '@tanstack/react-query';
type user = {
  email: string;
  password: string;
};
type response = {
  email: string;
  password: string;
};
export const CreateUser = () => {
  return useMutation<user, Error,response>({
    mutationKey: ['Users'],
    mutationFn: (req: user) => axios.post(" ", req),
  });
};
