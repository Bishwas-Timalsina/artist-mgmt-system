import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { APP, AUTH, LOGIN, REGISTER, USER } from "../../config/path";
import { LoginSchema } from "../../schema/Schema";
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
import usePostData from "../../hooks/usePostData";
import { notification } from "antd";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiSolidErrorCircle } from "react-icons/bi";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema) });
  const { isLoading, error, postData } = usePostData();
  const navigate = useNavigate();

  const handleFormSubmit = async (data: FieldValues) => {
    const endPoint = "auth/login";
    const response = await postData(endPoint, data);
    if (response?.status === 200) {
      notification.success({
        message: "Login Successful",
        placement: "top",
        duration: 3,
        icon: <BsCheckCircleFill style={{ color: "green" }} />,
      });
      reset();
      navigate(`/${APP}/${USER}`);
      localStorage?.setItem("accessToken", response?.data?.accessToken);
    } else {
      notification.error({
        message: "Error adding the user to the system",
        duration: 3,
        placement: "top",
        icon: <BiSolidErrorCircle style={{ color: "red" }} />,
      });
    }
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
