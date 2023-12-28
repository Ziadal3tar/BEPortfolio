import projectRouter from './project/project.routes.js'

import connection from '../../DB/connection.js'
import { asyncHandler, globalError } from '../services/asyncHandler.js'
// import visitorModel from '../../DB/model/visitor.model.js'
// import { findOneAndUpdate, find, create } from '../../DB/DBMethods.js';
//
export const appRouter = (app) => {


    app.use('/project', projectRouter)
    app.get('/EV/CookiesId', asyncHandler(async (req, res) => {
        




        res.send(req.connection.remoteAddress)

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

    }));

    app.get('/', (req, res) => res.send(req.ip))






    // app.use(globalError)
    connection()
}
