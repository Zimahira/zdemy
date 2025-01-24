const Course = require("../models/course.model.js");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dj7s3epvy",
  api_key: "765976322779619",
  api_secret: "aw_mNazvWsVp4zwEL_nFwo5l8Us",
});

const addCourse = async (req, res) => {
  const { courseName, price, details, course } = req.body;
  const file = req.files[0];

  if (!courseName || !price || !details || !course || !file) {
    return res.status(400).json({
      success: false,
      message: "All fields must be filled, including files.",
    });
  }

  const existingCourse = await Course.findOne({ details });
  if (existingCourse) {
    return res.status(400).json({
      success: false,
      message: "Course with the same details already exists.",
    });
  }

  const imageFile = await cloudinary.uploader.upload(file.path, {
    folder: "course_images",
  });

  const newCourse = await Course.create({
    name: courseName,
    price,
    details,
    course,
    imageUrl: imageFile.secure_url,
  });

  return res.status(201).json({
    success: true,
    message: "Course created successfully.",
    courseData: {
      courseName: newCourse.courseName,
      details: newCourse.details,
      course: newCourse.course,
      imageUrl: newCourse.imageUrl,
    },
  });
};

const getCourses = async (req, res) => {
  const courses = await Course.find({});

  return res.status(200).json({
    success: true,
    message: "the available courses",
    courseData: courses,
  });
};

const deleteCourse = async (req, res) => {
  let { courseId } = req.params;
  console.log("courseId: ", courseId);
  const deletee = await Course.deleteOne({ _id: courseId });
  console.log("deletee: ", deletee);
  //
  return res.status(200).json({
    success: true,
    message: "course deleted",
  });
};

const updateCourse = async (req, res) = {
  const updatee = await Course.updateOne({}, {})
  
}

module.exports = { addCourse, getCourses, deleteCourse };
