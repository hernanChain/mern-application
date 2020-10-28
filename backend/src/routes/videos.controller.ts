import {RequestHandler} from 'express'

export const createVideo:RequestHandler = (req,res)=>{
    res.json('createVideo')
}

export const getVideos:RequestHandler = (req,res)=>{
    res.json('getVideos')
}

export const getVideo:RequestHandler = (req,res)=>{
    res.json('getVideo')
}

export const updateVideo:RequestHandler = (req,res)=>{
    res.json('updateVideo')
}

export const deleteVideo:RequestHandler = (req,res)=>{
    res.json('deleteVideo')
}
