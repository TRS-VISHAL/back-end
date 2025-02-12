const asyncHandler = (reqHandler) => {
  (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
  };
};



// const asyncHandler = (fn) => async() =>{
// try {
//      await asyncHandler(fn);
// } catch (error) {
//      console.log(error.message)
// }
// }

export default asyncHandler;