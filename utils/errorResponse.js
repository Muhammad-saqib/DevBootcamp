

class ErrorResponse extends Error {
     constructor(message, StatusCode) {
          super(message);
          this.StatusCode = StatusCode;
          Error.captureStackTrace(this, this.constructor)

     }

}

module.exports = ErrorResponse;