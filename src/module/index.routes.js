import projectRouter from './project/project.routes.js'
import connection from '../../DB/connection.js'
// import { asyncHandler, globalError } from '../services/asyncHandler.js'
// import { findOneAndUpdate, find, create } from '../../DB/DBMethods.js';

// import cookieParser from 'cookie-parser';
// import visitorModel from '../../DB/model/visitor.model.js';
export const appRouter = (app) => {
    app.use(cookieParser());
    app.use('/project', projectRouter)
//     app.get('/', asyncHandler(async(req, res) => {
//       const ipAddress = req.headers['https://www.al3tar.me/ZPORTOFOLIO'] || req.connection.remoteAddress;
//   const visitorCookie = req.cookies.visitor || Math.random().toString(36).substring(7);
//   res.cookie('visitor', visitorCookie, { maxAge: 365 * 24 * 60 * 60 * 1000 * 80, httpOnly: true });
// //   res.send(`Hello, your IP address is ${ipAddress}. You have a unique visitor ID: ${visitorCookie}`);





// let visited = []
// const allEV = await find({ model: visitorModel })
// for (let i = 0; i < allEV.length; i++) {
//     const element = allEV[i];
//     if (element.visitorId == visitorCookie) {
//         visited.push(element)
//     }
// }
// if (visited.length == 0) {
//     let AddEV = await create({ model: visitorModel, data:{visitorId:visitorCookie,ipAddress,nweNumberOfVisits:1} })
//     if (AddEV) {
//         return res.status(201).json({ message: "added successfully", AddEV })
//     } else {
//         return res.status(401).json({ message: "added failed" })
//     }
// } else {
// let nweNumberOfVisits = visited[0].numberOfVisits + 1 
//     let updateEV = await findOneAndUpdate({
//         model: visitorModel,
//         visitorId: visitorCookie,
//         data: {numberOfVisits:nweNumberOfVisits},
//         options: { new: true }
//     })
//     if (updateEV) {
//         return res.status(201).json({ message: "updated", visited })
//     } else {
//         return res.status(401).json({ message: "updated failed" })
//     }
// }







//     }))
app.get('/', (req, res) => res.send('portfolio apis!'))

    connection()
}








    // app.get('/EV/CookiesId', asyncHandler(async (req, res) => {
        


      



    // //     //----------------------



    // }));
    // app.use(globalError)







    // Hello, your IP address is 197.43.132.76. You have a unique visitor ID: qif4n6
    // 


 
    // Hello, your IP address is 197.43.132.76. You have a unique visitor ID: 9kjw7o
    // 