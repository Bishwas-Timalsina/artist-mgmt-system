import { ARTIST, SONG, USER } from "../../config/path";
import { IMenuItems } from "../../Interface/Interface";
import { FaRegUser } from "react-icons/fa";
import { FiMic } from "react-icons/fi";
import { IoIosMusicalNotes } from "react-icons/io";

export const MenuItems: IMenuItems[] = [
  {
    label: "User",
    key: USER,
    icon: <FaRegUser />,
  },
  {
    label: "Artist",
    key: ARTIST,
    icon: <FiMic />,
  },
  
];
