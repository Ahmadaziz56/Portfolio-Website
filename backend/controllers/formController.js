const Form = require("../models/formModel")
const ErrorHander = require("../utils/ErrorHander")
const asyncErrors = require("../utils/asyncErrors")
exports.createForm = asyncErrors(async (req, res, next) => {
    const form = await Form.create(req.body)
    res.status(201).json({
        success: true,
        form
    })
})
exports.getAllForms = asyncErrors(async (req, res, next) => {
    const form = await Form.find(req.body)
    res.status(201).json({
        success: true,
        form
    })
})
exports.getFormDetails = asyncErrors(async (req, res, next) => {
    const form = await Form.findById(req.params.id)
    res.status(201).json({
        success: true,
        form
    })
})
exports.deleteForm = asyncErrors(async (req, res, next) => {
    const form = await Form.findById(req.params.id)
    form.deleteOne()
    res.status(201).json({
        success: true,
    })
})