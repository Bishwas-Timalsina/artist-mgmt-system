import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { EditUserSchema, UserSchema } from "../../../schema/Schema";
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
import dayjs from "dayjs";
import useUpdateContent from "../../../hooks/useUpdateContent";
import { notification } from "antd";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiSolidErrorCircle } from "react-icons/bi";

const EditUserForm = (props: any) => {
  const { data } = props;
  const userID = data?.[0]?.id;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      firstName: data[0]?.first_name || "",
      lastName: data[0]?.last_name || "",
      email: data[0]?.email || "",
      phone: data[0]?.phone || "",
      dob: dayjs(data[0]?.dob).format("YYYY-MM-DD") || "",
      gender: data[0]?.gender || "",
      address: data[0]?.address || "",
    },
  });

  const { isLoading, updateData } = useUpdateContent();
  const handleFormSubmit = async (data: FieldValues) => {
    const endPoint = `user/update/${userID}`;
    console.log(endPoint);
    const response = await updateData(endPoint, data);

    if (response?.status === 200) {
      notification.success({
        message: "User updated Successfully",
        duration: 3,
        icon: <BsCheckCircleFill style={{ color: "green" }} />,
      });
      reset();
      // fetchUser();
    } else {
      notification.error({
        message: "Error updating",
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
      <form
        action=""
        className="grid grid-cols-12 justify-start items-start w-[100%] gap-2"
        onSubmit={handleSubmit(handleFormSubmit)}
        onReset={handleReset}
      >
        <div className="col-span-6">
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
        <div className="col-span-6">
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
            <InputLabel>Phone</InputLabel>
            <Input
              {...register("phone")}
              type="text"
              autoComplete="off"
              placeholder="Enter your phone number"
              error={errors?.phone}
            />
            {errors?.phone && (
              <ErrorText>
                <MdErrorOutline /> {`${errors?.phone?.message}`}
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
            <InputSelect {...register("gender")} error={false}>
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
              Update
            </SubmitBtn>
            <ResetBtn type="reset">Reset</ResetBtn>
          </ButtonContainer>
        </div>
      </form>
    </>
  );
};

export default EditUserForm;
