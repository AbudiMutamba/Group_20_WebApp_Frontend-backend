 const { validate } = require('../models/Form');
const Form = require('../models/Form');
// @desc Get form data
// @route GET /api/v1/form
// @acces Public 

exports.getFrom = async (req, res, next) => {
    try {
        const forms = await Form.find();
        return res.status(200).json({
            success: true,
            count: forms.length,
            data: forms
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }

    //res.send('GET form data')
}
// @desc Add form data
// @route POST /api/v1/form
// @acces Public 

exports.addFrom = async (req, res, next) => {

    try {
        const{ firstName, lastName, email, jobType, acceptedTerms} = req.body;

        const forms = await Form.create(req.body);

        return res.status(201).json({
            success: true,
            data: forms
        })
     
    } catch (error) {
        if(error.email && error.acceptedTerms === 'ValidationError'){
            const messages = Object.values(error.errors).map(value => value.message);

            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: "Server Error"
            });
        } 
        
    } 
   // res.send('POST form data') 
}
// @desc Delete all form data 
// @route GET /api/v1/form/:id
// @acces Public 

exports.deleteFrom = async (req, res, next) => {

    try {
        const forms = await Form.findById(req.params.id);

        if(!forms){
            return res.status(400).json({
                success: false, 
                error: "No form data found"
            });
        }

        await forms.remove();

        return res.status(200).json({
            success: true,
            data: { }
        });

    } catch (error) {
        return res.status(500).json({
                success: false,
                error: "Server Error"
         });
    }
  //res.send('DELETE form data')
}