import { Drawer, notification } from "antd";
import React from "react";
import Text from "../../../components/Atomic/Text";
import {
  ButtonContainer,
  ErrorText,
  Input,
  InputContainer,
  InputLabel,
  InputSelect,
  ResetBtn,
  SubmitBtn,
} from "../../../components/AuthComponent/Style";
import { MdErrorOutline } from "react-icons/md";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../../../schema/Schema";
import usePostData from "../../../hooks/usePostData";
import useAddContent from "../../../hooks/useAddContent";
import { BiSolidErrorCircle } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";

const AddUserDrawer = (props: any) => {
  const { drawerOpen, handleDrawerOpen, fetchUser } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(UserSchema) });

  const { isLoading, error, postData } = useAddContent();

  const handleFormSubmit = async (data: FieldValues) => {
    const endPoint = "user/add";
    const response = await postData(endPoint, data);

    if (response?.status === 200) {
      notification.success({
        message: "User added Successfully",
        duration: 3,
        icon: <BsCheckCircleFill style={{ color: "green" }} />,
      });
      reset();
      fetchUser();
    } else {
      notification.error({
        message: "Error adding the category",
        duration: 3,
        icon: <BiSolidErrorCircle style={{ color: "red" }} />,
      });
    }
  };
  const handleReset = () => {
    reset();
  };
  return (
    <>
      <Drawer
        open={drawerOpen}
        closable
        destroyOnClose
        onClose={handleDrawerOpen}
        width={700}
        title={<Text size="18px" weight="500" content="Add Users" />}
      >
        <form
          action=""
          className="grid grid-cols-12 justify-start items-start w-[100%] gap-6"
          onSubmit={handleSubmit(handleFormSubmit)}
          onReset={handleReset}
        >
          <div className="col-span-12">
            <InputContainer>
              <InputLabel>First Name</InputLabel>
              <Input
                {...register("firstName")}
                type="text"
                autoComplete="off"
                placeholder="Enter your firstname"
                error={errors?.firstName}
              />
              {errors?.firstName && (
                <ErrorText>
                  <MdErrorOutline /> {`${errors?.firstName?.message}`}
                </ErrorText>
              )}
            </InputContainer>
          </div>
          <div className="col-span-12">
            <InputContainer>
              <InputLabel>Last Name</InputLabel>
              <Input
                {...register("lastName")}
                type="text"
                autoComplete="off"
                placeholder="Enter your lastname"
                error={errors?.lastName}
              />
              {errors?.lastName && (
                <ErrorText>
                  <MdErrorOutline /> {`${errors?.lastName?.message}`}
                </ErrorText>
              )}
            </InputContainer>
          </div>
          <div className="col-span-12">
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
          </div>
          <div className="col-span-12">
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
          </div>
          <div className="col-span-12">
            <InputContainer>
              <InputLabel>Phone</InputLabel>
              <Input
                {...register("phone")}
                type="text"
                autoComplete="off"
                placeholder="Enter your phone number"
                error={errors?.phoneNumber}
              />
              {errors?.phoneNumber && (
                <ErrorText>
                  <MdErrorOutline /> {`${errors?.phoneNumber?.message}`}
                </ErrorText>
              )}
            </InputContainer>
          </div>
          <div className="col-span-6">
            <InputContainer>
              <InputLabel>Date of Birth</InputLabel>
              <Input
                {...register("dob")}
                type="date"
                autoComplete="off"
                placeholder="Enter your date of birth"
                error={errors?.dob}
                min="2000-01-01"
                max="2024-01-01"
              />
              {errors?.dob && (
                <ErrorText>
                  <MdErrorOutline /> {`${errors?.dob?.message}`}
                </ErrorText>
              )}
            </InputContainer>
          </div>
          <div className="col-span-6">
            <InputContainer>
              <InputLabel>Gender</InputLabel>
              <InputSelect
                {...register("gender")}
                error={false}
                defaultValue={""}
              >
                <option value={""}>--- Select the Gender ---</option>
                <option value={"m"}>Male</option>
                <option value={"f"}>Female</option>
                <option value={"o"}>Other</option>
              </InputSelect>
              {errors?.gender && (
                <ErrorText>
                  <MdErrorOutline /> {`${errors?.gender?.message}`}
                </ErrorText>
              )}
            </InputContainer>
          </div>
          <div className="col-span-12">
            <InputContainer>
              <InputLabel>Address</InputLabel>
              <Input
                {...register("address")}
                type="text"
                autoComplete="off"
                placeholder="Enter your address"
                error={errors?.address}
              />
              {errors?.address && (
                <ErrorText>
                  <MdErrorOutline /> {`${errors?.address?.message}`}
                </ErrorText>
              )}
            </InputContainer>
          </div>

          <div className="col-span-12">
            <ButtonContainer>
              <SubmitBtn disabled={isLoading} type="submit">
                Submit
              </SubmitBtn>
              <ResetBtn type="reset">Reset</ResetBtn>
            </ButtonContainer>
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default AddUserDrawer;
