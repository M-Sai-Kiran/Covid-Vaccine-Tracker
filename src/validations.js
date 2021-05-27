import { centerBlocks } from "./constants";
export const centerValidation = (center) => {
  if (!centerBlocks.includes(center.block_name)) return false;
  if (
    center.sessions.some(
      (session) =>
        session.min_age_limit > 17 && session.available_capacity_dose1 > 0
      // && session.vaccine === "COVAXIN"
    )
  )
    return true;
};
