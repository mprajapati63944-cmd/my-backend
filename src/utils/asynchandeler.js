const asynchandeler = (requesthandeler) => {
    (req,res,next) => {
        Promise.resolve(requesthandeler(req,res,next)).catch((err) => next(err))
    }
}



export { asynchandeler }



// const asynchandeler = () => {}
// const asynchandeler = (func) => () => {}
// const asynchandeler = (func) => async () => {}

// const asynchandeler = (fn) => async (req, res,next) => {
//     try {

//     }
//     catch (error) {
//         res.status(err.code || 500 ).json({
//             success: false,
//             message: err.message
//         })
//     }
// }


