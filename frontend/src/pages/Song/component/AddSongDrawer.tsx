import { Drawer, notification } from "antd";
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
import { songSchema } from "../../../schema/Schema";
import { useParams } from "react-router-dom";
import useAddContent from "../../../hooks/useAddContent";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiSolidErrorCircle } from "react-icons/bi";

const AddSongDrawer = (props: any) => {
  const { id } = useParams();
  const { drawerOpen, handleDrawerOpen, fetchSong } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(songSchema) });

  const { isLoading, error, postData } = useAddContent();
  const handleFormSubmit = async (data: FieldValues) => {
    const endPoint = `song/add/${id}`;
    const response = await postData(endPoint, data);

    if (response?.status === 200) {
      notification.success({
        message: "Song added Successfully",
        duration: 3,
        icon: <BsCheckCircleFill style={{ color: "green" }} />,
      });
      reset();
      fetchSong();
    } else {
      notification.error({
        message: "Error adding the songs",
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
        title={<Text size="18px" weight="500" content="Add Songs" />}
      >
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
              {errors?.firstName && (
                <ErrorText>
                  <MdErrorOutline /> {`${errors?.firstName?.message}`}
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
              <InputLabel>Gender</InputLabel>
              <InputSelect
                {...register("genre")}
                error={false}
                defaultValue={""}
              >
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
      </Drawer>
    </>
  );
};

export default AddSongDrawer;
