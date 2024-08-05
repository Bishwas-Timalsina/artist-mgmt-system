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
import { songSchema } from "../../../schema/Schema";
import useUpdateContent from "../../../hooks/useUpdateContent";
import { notification } from "antd";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiSolidErrorCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";

const EditSongForm = (props: any) => {
  const { id } = useParams();
  const { data: songData, fetchSong, closeModal } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(songSchema),
    defaultValues: {
      title: songData[0].title || "",
      album_name: songData[0].album_name || "",
      genre: songData[0]?.genre || "",
    },
  });

  const { isLoading, updateData } = useUpdateContent();
  const handleFormSubmit = async (data: FieldValues) => {
    const endPoint = `song/update/${id}/${songData[0].title}`;
    const response = await updateData(endPoint, data);
    if (response?.status === 200) {
      notification.success({
        message: "Song updated Successfully",
        duration: 3,
        icon: <BsCheckCircleFill style={{ color: "green" }} />,
      });
      reset();
      fetchSong();
      closeModal(false);
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
        className="grid grid-cols-12 justify-start items-start w-[100%] gap-6"
        onSubmit={handleSubmit(handleFormSubmit)}
        onReset={handleReset}
      >
        <div className="col-span-12">
          <InputContainer>
            <InputLabel>Song title</InputLabel>
            <Input
              {...register("title")}
              type="text"
              autoComplete="off"
              placeholder="Enter song title title"
              error={errors?.title}
            />
            {errors?.title && (
              <ErrorText>
                <MdErrorOutline /> {`${errors?.title?.message}`}
              </ErrorText>
            )}
          </InputContainer>
        </div>
        <div className="col-span-12">
          <InputContainer>
            <InputLabel>Album Name</InputLabel>
            <Input
              {...register("album_name")}
              type="text"
              autoComplete="off"
              placeholder="Enter the album name"
              error={errors?.album_name}
            />
            {errors?.album_name && (
              <ErrorText>
                <MdErrorOutline /> {`${errors?.album_name?.message}`}
              </ErrorText>
            )}
          </InputContainer>
        </div>
        <div className="col-span-12">
          <InputContainer>
            <InputLabel>Genre</InputLabel>
            <InputSelect {...register("genre")} error={false} defaultValue={""}>
              <option value={""}>--- Select the Gender ---</option>
              <option value={"rnb"}>RnB</option>
              <option value={"country"}>Country</option>
              <option value={"classic"}>Classic</option>
              <option value={"rock"}>Rock</option>
              <option value={"jazz"}>Jazz</option>
            </InputSelect>
            {errors?.genre && (
              <ErrorText>
                <MdErrorOutline /> {`${errors?.genre?.message}`}
              </ErrorText>
            )}
          </InputContainer>
        </div>
        <div className="col-span-12">
          <ButtonContainer>
            <SubmitBtn disabled={false} type="submit">
              Add
            </SubmitBtn>
            <ResetBtn type="reset">Reset</ResetBtn>
          </ButtonContainer>
        </div>
      </form>
    </>
  );
};

export default EditSongForm;
