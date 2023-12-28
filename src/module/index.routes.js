import projectRouter from './project/project.routes.js'
// import EV from './EV/EV.routes.js'
import express from 'express'
import cookieParser from 'cookie-parser';
import fingerprint from 'express-fingerprint';
import expressIP from 'express-ip';
import connection from '../../DB/connection.js'
import { asyncHandler, globalError } from '../services/asyncHandler.js'
import visitorModel from '../../DB/model/visitor.model.js'
import { findOneAndUpdate, find, create } from '../../DB/DBMethods.js';
import ipinfo from 'ipinfo';


export const appRouter = (app) => {

    // app.use(express.json())
    // app.use(expressIP().getIpInfoMiddleware);
    // app.use(cookieParser());
    // app.use(fingerprint());



    app.use('/project', projectRouter)
    // app.use('/EV', EV)
    // app.get('/EV/CookiesId', asyncHandler(async (req, res) => {
        
    //     if (req.ip) {
    //         const ip = req.ip;
    //         const visitorCookie = req.cookies.visitor;
    //         let visitor = visitorCookie ? JSON.parse(visitorCookie) : null;
    //         if (!visitor || typeof visitor !== 'object') {
    //             visitor = {
    //                 ip,
    //                 country: '',
    //                 city: '',
    //                 device: req.headers['user-agent'],
    //                 visitCount: 0,
    //             };

    //             try {
    //                 const ipInfoData = await ipinfo(ip);
    //                 visitor.country = ipInfoData.country;
    //                 visitor.city = ipInfoData.city;
    //             } catch (error) {
    //                 console.error('Error fetching IPinfo data:', error.message);
    //             }
    //         }

    //         req.body.visitorId = visitor.ip
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
    //     }else{
    //         return res.status(401).json({ message: "ip Error" })
    //     }





    //     //----------------------



    // }));

    app.get('/', (req, res) => res.send('portfolio apis!'))






    app.use(globalError)
    connection()
}
