import { zodResolver } from "@hookform/resolvers/zod";
import { Drawer, notification } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { BiSolidErrorCircle } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdErrorOutline } from "react-icons/md";
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
import useAddContent from "../../../hooks/useAddContent";
import { ArtistSchema } from "../../../schema/Schema";

const AddArtistDrawer = (props: any) => {
  const { drawerOpen, handleDrawerOpen, fetchArtist } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(ArtistSchema) });

  const { isLoading, error, postData } = useAddContent();

  const handleFormSubmit = async (data: FieldValues) => {
    const endPoint = "artist/add";
    const response = await postData(endPoint, data);

    if (response?.status === 200) {
      notification.success({
        message: "Artist added Successfully",
        duration: 3,
        icon: <BsCheckCircleFill style={{ color: "green" }} />,
      });
      reset();
      fetchArtist();
      handleDrawerOpen();
    } else {
      notification.error({
        message: "Error adding the atist",
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
                  <MdErrorOutline />{" "}
                  {`${errors?.no_of_album_released?.message}`}
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

export default AddArtistDrawer;
