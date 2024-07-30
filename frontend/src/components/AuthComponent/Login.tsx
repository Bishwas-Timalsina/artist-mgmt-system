import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { UserSchema } from "../../schema/Schema";
import Text from "../Atomic/Text";
import {
  ButtonContainer,
  ErrorText,
  Input,
  InputContainer,
  InputLabel,
  ResetBtn,
  SubmitBtn,
} from "./Style";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { AUTH, REGISTER } from "../../config/path";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(UserSchema) });

  const handleFormSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const handleReset = () => {
    reset();
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[60%] rounded-md gap-8">
        <Text size="24px" weight="500" content="Login to continue" />
        <form
          action=""
          className="flex flex-col justify-start items-start w-[100%] gap-6"
          onSubmit={handleSubmit(handleFormSubmit)}
          onReset={handleReset}
        >
          <InputContainer>
            <InputLabel>Email</InputLabel>
            <Input
              {...register("email")}
              type="text"
              autoComplete="off"
              placeholder="Enter your email address"
              error={errors?.email}
            />
            {errors?.email && (
              <ErrorText>
                <MdErrorOutline /> {`${errors?.email?.message}`}
              </ErrorText>
            )}
          </InputContainer>
          <InputContainer>
            <InputLabel>Password</InputLabel>
            <Input
              {...register("password")}
              type="text"
              autoComplete="off"
              placeholder="Enter your password"
              error={errors?.password}
            />
            {errors?.password && (
              <ErrorText>
                <MdErrorOutline /> {`${errors?.password?.message}`}
              </ErrorText>
            )}
          </InputContainer>
          <ButtonContainer>
            <SubmitBtn disabled={false} type="submit">
              Submit
            </SubmitBtn>
            <ResetBtn type="reset">Reset</ResetBtn>
          </ButtonContainer>
        </form>
        <div className="flex flex-col justify-start items-center">
          <Text size="14px" weight="300" content="Dont have an account" />
          <Link
            to={`/${AUTH}/${REGISTER}`}
            className="text-[14px] font-[500] underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
