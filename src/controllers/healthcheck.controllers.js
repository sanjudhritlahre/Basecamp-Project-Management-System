import { ApiResponse } from "../utils/ApiResponse.utils.js";

const healthCheck = (req, res) => {
  try {
    res.status(200).json(new ApiResponse(200, "Server is running...🚀"));
  } catch (err) {
    console.error("Server is not running...", err);
  }
};

export { healthCheck };