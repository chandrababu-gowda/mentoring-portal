const questionModel = require("../model/question");

async function facultyGetController(req, res) {
  try {
    if (req.user.userType === "faculty") {
      const searchCondition = { id: req.user.id, isAnswered: false };
      questionModel
        .find(searchCondition)
        .then((data) => {
          res.status(200).json({
            status: "200: Success",
            message: "Question retrieved",
            data: data,
          });
        })
        .catch((err) => {
          console.log(`Error: controllers/facultyController.js \n${err}`);
          res.status(400).json({
            status: "400: Bad Request",
            message: "Unable to retrieve question",
          });
        });
    } else {
      res.status(400).json({
        status: "400: Bad Request",
        message: "Unauthorized faculty",
      });
    }
  } catch (err) {
    console.log(`Error: controllers/facultyController.js \n${err}`);
    res.status(500).json({
      status: "500: Internal Server Error",
      message: "Unable to retrieve question",
    });
  }
}
async function facultyPostController(req, res) {
  try {
    if (req.user.userType === "faculty") {
      const updateFields = { answer: req.body.answer, isAnswered: true };
      const searchCondition = { qid: req.user.qid };
      
      questionModel
        .updateMany(updateFields, searchCondition)
        .then(() => {
          res.status(200).json({
            status: "200: Success",
            message: "Answer submitted",
          });
        })
        .catch((err) => {
          console.log(`Error: controllers/facultyController.js \n${err}`);
          res.status(400).json({
            status: "400: Bad Request",
            message: "Unable to submit answer",
          });
        });
    } else {
      res.status(400).json({
        status: "400: Bad Request",
        message: "Unauthorized faculty",
      });
    }
  } catch (err) {
    console.log(`Error: controllers/facultyController.js \n${err}`);
    res.status(500).json({
      status: "500: Internal Server Error",
      message: "Unable to submit answer",
    });
  }
}

module.exports = { facultyGetController, facultyPostController };
