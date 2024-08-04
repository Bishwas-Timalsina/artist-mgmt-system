import React from "react";
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
import { ArtistSchema } from "../../../schema/Schema";
import dayjs from "dayjs";
import useUpdateContent from "../../../hooks/useUpdateContent";
import { notification } from "antd";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiSolidErrorCircle } from "react-icons/bi";

const EditArtistForm = (props: any) => {
  const { data, fetchArtist, closeModal } = props;
  const artistID = data[0]?.id;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ArtistSchema),
    defaultValues: {
      name: data[0]?.name || "",
      phone: data[0]?.phone || "",
      dob: dayjs(data[0]?.dob).format("YYYY-MM-DD") || "",
      gender: data[0]?.gender || "",
      address: data[0]?.address || "",
      first_release_year: data[0]?.first_release_year.toString() || "",
      no_of_album_released: data[0]?.no_of_album_released.toString() || "",
    },
  });
  const { isLoading, updateData } = useUpdateContent();

  const handleFormSubmit = async (data: FieldValues) => {
    console.log(data);
    const endPoint = `artist/update/${artistID}`;
    const response = await updateData(endPoint, data);
    if (response?.status === 200) {
      notification.success({
        message: "Artist updated Successfully",
        duration: 3,
        icon: <BsCheckCircleFill style={{ color: "green" }} />,
      });
      reset();
      fetchArtist();
      closeModal(false);
    } else {
      notification.error({
        message: "Error updating the artist",
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
        className="grid grid-cols-12 justify-start items-start w-[100%] gap-6"
        onSubmit={handleSubmit(handleFormSubmit)}
        onReset={handleReset}
      >
        <div className="col-span-12">
          <InputContainer>
            <InputLabel>Name</InputLabel>
            <Input
              {...register("name")}
              type="text"
              autoComplete="off"
              placeholder="Enter the name of the artist"
              error={errors?.name}
            />
            {errors?.name && (
              <ErrorText>
                <MdErrorOutline /> {`${errors?.name?.message}`}
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
        <div className="col-span-6">
          <InputContainer>
            <InputLabel>No of album released</InputLabel>
            <Input
              {...register("no_of_album_released")}
              type="text"
              autoComplete="off"
              placeholder="Enter the total number of album released"
              error={errors?.no_of_album_released}
            />
            {errors?.no_of_album_released && (
              <ErrorText>
                <MdErrorOutline /> {`${errors?.no_of_album_released?.message}`}
              </ErrorText>
            )}
          </InputContainer>
        </div>
        <div className="col-span-6">
          <InputContainer>
            <InputLabel>First Released Year</InputLabel>
            <Input
              {...register("first_release_year")}
              autoComplete="off"
              placeholder="Enter the first release year"
              type="number"
              min="1900"
              max="2099"
              step="1"
              defaultValue="2016"
              error={errors?.first_release_year}
            />
            {errors?.first_release_year && (
              <ErrorText>
                <MdErrorOutline /> {`${errors?.first_release_year?.message}`}
              </ErrorText>
            )}
          </InputContainer>
        </div>

        <div className="col-span-12">
          <ButtonContainer>
            <SubmitBtn disabled={false} type="submit">
              Submit
            </SubmitBtn>
            <ResetBtn type="reset">Reset</ResetBtn>
          </ButtonContainer>
        </div>
      </form>
    </>
  );
};

export default EditArtistForm;
