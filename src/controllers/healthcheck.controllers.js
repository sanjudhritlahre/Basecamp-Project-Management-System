import { ApiResponse } from "../utils/ApiResponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

/* 
const healthCheck = async (req, res, next) => {
  try {
    const user = await getUserFromDB();
    res.status(200).json(new ApiResponse(200, "Server is running...🚀"));
  } catch (err) {
    console.error("Server is not running...", err);
    next(err);
  }
};
*/

const healthCheck = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, { message: "Server is running...🚀" }));
});

export { healthCheck };