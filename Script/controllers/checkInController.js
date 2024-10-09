import CheckIn from "../models/checkInModel.js";

export const createCheckIn = async (request, response) => {
  const { checkInData, checkOutData} = request.body;

  console.log(checkInData, checkOutData)
};
