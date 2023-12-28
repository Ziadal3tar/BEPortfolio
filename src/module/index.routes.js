import projectRouter from './project/project.routes.js'
import connection from '../../DB/connection.js'
import { asyncHandler, globalError } from '../services/asyncHandler.js'
import cookieParser from 'cookie-parser';
export const appRouter = (app) => {
    app.use(cookieParser());
    app.use('/project', projectRouter)
    app.get('/', (req, res) => {
      const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // Get the existing cookie or set a new one
  const visitorCookie = req.cookies.visitor || Math.random().toString(36).substring(7);
  res.cookie('visitor', visitorCookie, { maxAge: 365 * 24 * 60 * 60 * 1000 * 80, httpOnly: true });

  res.send(`Hello, your IP address is ${ipAddress}. You have a unique visitor ID: ${visitorCookie}`);
    })
    connection()
}









    // app.get('/EV/CookiesId', asyncHandler(async (req, res) => {
        


      



    // //     //----------------------

    // req.body.visitorId = visitor.ip
    //         req.body.device = visitor.device
    //         let visited = []
    //         const allEV = await find({ model: visitorModel })
    //         for (let i = 0; i < allEV.length; i++) {
    //             const element = allEV[i];
    //             if (element.visitorId == visitor.ip) {
    //                 visited.push(element)
    //             }
    //         }
    //         if (visited.length == 0) {
    //             let AddEV = await create({ model: visitorModel, data: req.body })
    //             if (AddEV) {
    //                 return res.status(201).json({ message: "added successfully", AddEV })
    //             } else {
    //                 return res.status(401).json({ message: "added failed" })
    //             }
    //         } else {
    //             req.body.numberOfVisits = visited[0].numberOfVisits + 1
    //             let updateEV = await findOneAndUpdate({
    //                 model: visitorModel,
    //                 visitorId: visitor.ip,
    //                 data: req.body,
    //                 options: { new: true }
    //             })
    //             if (updateEV) {
    //                 return res.status(201).json({ message: "updated", updateEV })
    //             } else {
    //                 return res.status(401).json({ message: "updated failed" })
    //             }
    //         }

    // }));
    // app.use(globalError)