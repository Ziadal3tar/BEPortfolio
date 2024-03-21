import { asyncHandler } from '../../../services/asyncHandler.js';
import cookieParser from'cookie-parser';

// export const getCookieID = asyncHandler(async (req, res, next) => {
//     // Check if the visitor has a cookie
//     const visitorId = req.cookies.visitorId || generateVisitorId();
    
//     // Set a cookie for the visitor
//     res.cookie('visitorId', visitorId, { maxAge: 900000, httpOnly: true });
  
//     // Increment the visit count (you may want to store this in a database)
//     // For simplicity, using an in-memory object here
//     const visitCount = (visits[visitorId] || 0) + 1;
//     visits[visitorId] = visitCount;
  
//     res.send(visitorId);
// })