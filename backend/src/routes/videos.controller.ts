import {RequestHandler} from 'express'
import Video from './Video'

export const createVideo:RequestHandler = async (req,res)=>{
    const videoFound = await Video.findOne({url:req.body.url})
    if (videoFound) {
        return res.status(301).json({message:'The URL already exists'})
    }
    const video = new Video(req.body)
    const savedVideo = await video.save()
    res.json(savedVideo)
}

export const getVideos:RequestHandler = async (req,res)=>{
    try {
        const allVideos = await Video.find()
        res.json(allVideos)
    } catch (error) {
        res.json(error)
    }
}

export const getVideo:RequestHandler = async (req,res)=>{
    const {id} = req.params
    const videoFound = await Video.findById(id)
    if (videoFound) {
        return res.json(videoFound)
    }
    return res.status(204).json()
    
}

export const updateVideo:RequestHandler = async (req,res)=>{
    const {id} = req.params;
    const {body} = req;
    const videoUpdate = await Video.findByIdAndUpdate(id,body,{new:true})
    res.json(videoUpdate)
}

export const deleteVideo:RequestHandler = async (req,res)=>{
    const {id} = req.params
    const videoDeleted = await Video.findByIdAndDelete(id)
    if (videoDeleted) {
        return res.json(videoDeleted)
    }
    return res.status(204).json()
}
