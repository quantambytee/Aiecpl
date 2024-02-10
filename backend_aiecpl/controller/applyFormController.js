const UserApply =require("../model/ApplyForm")

const createApplyForm = async (req, res) => {
    try {
      // Use the create function to insert the new user data into the database
      const user = await UserApply.create({
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        state: req.body.state,
        nationality: req.body.nationality,
        educationLevel: req.body.educationLevel,
        englishSpeakingLevel: req.body.englishSpeakingLevel,
        workExperience: req.body.workExperience,
        annualBudgetForStudies: req.body.annualBudgetForStudies,
        otherQueries: req.body.otherQueries,
      });
  
      // Send a success response
      res.status(201).json({
        message: 'User created successfully',
        user: user,
      });
    } catch (error) {
      // Handle any errors that occur during the process
      res.status(400).json({
        message: 'Error creating user',
        error: error.message,
      });
    }
  };

  module.exports={createApplyForm}
  