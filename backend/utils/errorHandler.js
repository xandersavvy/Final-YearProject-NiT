class ErrorHandler extends Error {
  constructor(message, statusCode) {
    //I was High on coffee when I wrote this , So, I forgot to maintain position of message and statusCode
    //while creating the error object.
    // and this is not typescript , So rather than going through all the code 
    // I am just checking here
    if(typeof statusCode !== "number") {
      super(statusCode);
      this.statusCode = message;
      this.message = statusCode;
    }else{
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    }
    Error.captureStackTrace(this, this.constructor);
  }


  
}

module.exports = ErrorHandler;