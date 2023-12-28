
import { asyncHandler } from '../../../services/asyncHandler.js';
import { findById, findByIdAndDelete, findOneAndUpdate, findOne, find, findByIdAndUpdate, create, findOneAndDelete } from '../../../../DB/DBMethods.js';
import projectModel from '../../../../DB/model/project.model.js';
import cloudinary from '../../../services/cloudinary.js'
import { sendEmail } from '../../../services/email.js'


export const addProject = asyncHandler(async (req, res, next) => {
  const { types, technologies } = req.body;
  let allProject = await find({ model: projectModel })
  req.body.technologies = technologies.split(',')
  req.body.types = types.split(',')
  req.body.code = allProject.length + 1
  let imagesUrls = []
  let imageIds = []
  for (let i = 0; i < req.files.length; i++) {
    let element = req.files[i]
    await cloudinary.uploader.upload(element.path, { folder: "portfolio/projects" }, (error, result) => {
      if (error) {
        console.error(error);
      } else {
        imagesUrls.push(result.secure_url)
        imageIds.push(result.public_id)
      }
    })
  
  }
  req.body.images = imagesUrls
  req.body.publicImagesIds = imageIds
  let newProject = await create({ model: projectModel, data: req.body })
  if (newProject) {
    return res.status(201).json({ message: "added successfully", newProject })
  } else {
    return res.status(401).json({ message: "added failed" })
  }
})
export const updateProject = asyncHandler(async (req, res, next) => {

  const { types, technologies } = req.body;
  const { _id } = req.params;
  let project = await findById({ model: projectModel, condition: _id })
  if (project) {

    req.body.technologies = technologies.split(',')
    req.body.types = types.split(',')
    if (req.files) {
      for (const id of project.publicImagesIds) {
        await cloudinary.uploader.destroy(id)
      }
      let imagesUrls = []
      let imageIds = []
      for (let i = 0; i < req.files.length; i++) {
        let element = req.files[i]
        await cloudinary.uploader.upload(element.path, { folder: "portfolio/projects" }, (error, result) => {
          if (error) {
            console.error(error);
          } else {
            imagesUrls.push(result.secure_url)
            imageIds.push(result.public_id)
          }
        })
        req.body.images = imagesUrls
        req.body.publicImagesIds = imageIds
      }
    }

    let updateProject = await findByIdAndUpdate({
      model: projectModel,
      condition: _id,
      data: req.body,
      options: { new: true }
    })
    if (updateProject) {
      return res.status(201).json({ message: "updated", updateProject })
    } else {

      return res.status(401).json({ message: "updated failed" })
    }

  }
})


export const open = asyncHandler(async (req, res, next) => {
  let value = req.params.password == process.env.pagePassword
  if (value == true) {
    return res.status(200).json({ open: true })
  } else {
    return res.status(200).json({ open: false })
  }
})
export const sendemail = asyncHandler(async (req, res, next) => {

  let { name, email, message } = req.body

  let messagee = `you have message from: ${email},</a>
<br/>
<br/>
message:${message}</a>
`
  let emailRes = await sendEmail(email, "your portfolio", messagee);

  if (emailRes.accepted.length) {
    return res.status(200).json({ message: 'sended' })
    return
  }

})
export const getAllProjects = asyncHandler(async (req, res, next) => {
  let project = await find({ model: projectModel })
  return res.status(200).json({ message: 'projects', project })
})
export const deleteProject = asyncHandler(async (req, res, next) => {
  const { _id } = req.params;
  let deleteProject = await findByIdAndDelete({ model: projectModel, condition: _id })
  if (!deleteProject) {
    return res.status(404).json({ message: "something wrong" })

  } else {
    for (const id of deleteProject.publicImagesIds) {
      await cloudinary.uploader.destroy(id)
    }
    return res.status(200).json({ message: "deleted" })
  }

})
