// The `asyncHandler` is a utility function that simplifies error handling in asynchronous route handlers
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    // Wrap the provided `requestHandler` in a Promise
    // If it resolves, the handler executes successfully
    // If it rejects (throws an error), the `catch` block invokes the `next(err)` function
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// Exporting the `asyncHandler` function so it can be used in other modules
export { asyncHandler };





// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}



/* 
// The `asyncHandler` function is a higher-order function that takes a function `fn` as an argument
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next); // Attempt to execute the passed asynchronous function
  } catch (error) {
    // Handle any errors that occur during execution of `fn`
    res.status(error.code || 500).json({
      success: false,
      message: error.message, // Send a JSON response with the error message
    });
  }
};
*/
