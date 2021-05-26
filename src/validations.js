import { centerBlocks } from "./constants";
export const centerValidation = (center) => {
  if (!centerBlocks.includes(center.block_name)) return false;
  if (
    center.sessions.some(
      (session) =>
        session.min_age_limit > 17 &&
        session.vaccine === "COVAXIN" &&
        session.available_capacity_dose1 > 0
    )
  )
    return true;
};
