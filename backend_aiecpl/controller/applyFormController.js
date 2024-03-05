const UserApply =require("../model/ApplyForm")

const createApplyForm = async (req, res) => {
  // console.log("rejhdhucbej",req.body);
    try {
      
      const user = await UserApply.create(req.body);
      res.status(201).json({
        message: 'User created successfully',
        user: user,
      });
    } catch (error) {

      res.status(400).json({
        message: 'Error creating user',
        error: error.message,
      });
    }
  };

  module.exports={createApplyForm}
  