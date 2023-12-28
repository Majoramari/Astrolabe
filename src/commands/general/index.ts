import invite from "./test";
import { category } from "@modules/command";

export default category("عام", [invite], {
  emoji: "🌟",
  description: "لِلاسْتخْدامات العامَّة وليْس لَهَا تَأثِير على بيانَات حِسابك",
  thumbnail: "general_category.png",
});
