import { GoPlus } from "react-icons/go";
import Text from "../../../components/Atomic/Text";
import Button from "../../../components/Atomic/Button";

const ArtistHeader = (props: any) => {
  const { handleDrawerOpen } = props;
  const handleAddArtist = () => {
    handleDrawerOpen();
  };
  return (
    <>
      <div className="p-4 border-b-[0.5px] w-[100%] flex flex-row justify-between items-center">
        <Text size="22px" weight="400" content="All Artist" />
        <Button
          label="Add Artist"
          onclick={handleAddArtist}
          icon={<GoPlus className="text-[white] text-[22px] font-[600]" />}
          style={{
            background: "var(--accent-color)",
            width: "10%",
            borderRadius: "8px",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        />
      </div>
    </>
  );
};

export default ArtistHeader;
