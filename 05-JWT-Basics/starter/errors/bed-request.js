const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class BedRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BedRequestError;
