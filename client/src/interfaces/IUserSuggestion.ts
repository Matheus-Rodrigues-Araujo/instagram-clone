import { StaticImageData } from "next/image";

export type userSuggestionType = {
  username: string;
  profileImage: StaticImageData;
};
export interface IUserSuggestion {
  user: userSuggestionType;
}
