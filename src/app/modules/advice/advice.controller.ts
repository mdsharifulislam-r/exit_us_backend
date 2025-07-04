import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AdviceService } from "./advice.service";
import sendResponse from "../../../shared/sendResponse";
import { getSingleFilePath } from "../../../shared/getFilePath";

const createAdvice = catchAsync(
    async (req:Request, res:Response) => {
        const adviceData = req.body;
        const image = getSingleFilePath(req.files,'image')
        if(image){
            adviceData.image = image;
        }
        const user = req.user;
        const result = await AdviceService.createAdviceToDB(adviceData,user);
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "Advice created successfully",
            data: result
        })
    }
)

const getAdvice = catchAsync(
    async (req:Request, res:Response) => {
        const id = req.params.id;
        const query = req.query
        const user:any  = req.user;

        const user_id = id=='user'?user.id:id;

        const result = await AdviceService.getAdviceByIdFromDB(user_id,query);
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "Advice retrieved successfully",
            pagination: result.paginateInfo,
            data: result.advice
        })
    }
)

const updateAdvice = catchAsync(
    async (req:Request, res:Response) => {
        const adviceData = req.body;
        const user = req.user;
        const id = req.params.id
        const result = await AdviceService.updateAdviceToDB(id, adviceData,user);
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "Advice updated successfully",
            data: result
        })
    }
)

const deleteAdvice = catchAsync(
    async (req:Request, res:Response) => {
        const id = req.params.id;
        const user = req.user;
        const result = await AdviceService.deleteAdviceFromDB(id,user);
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "Advice deleted successfully",
            data: result
        })
    }
)



export const AdviceController = {
    createAdvice,
    getAdvice,
    updateAdvice,
    deleteAdvice
}