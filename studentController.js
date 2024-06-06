// GET ALL STUDENT LIST
const db = require("../config/db");

const getStudents = async (req, res) => {
  try {
    const d = await db;
    const data = await d.query("SELECT * FROM students");
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "no Record Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Student Record Found",
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Student Api",
      error,
    });
  }
};

// GET STUDENT BY ID

const getStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).send({
        success: false,
        message: "Invalid Student Not Found",
      });
    }
    const d = await db;
    const dta = await d.query(`SELECT * FROM students where id =` + studentId);
    if (!dta) {
      return res.status(404).send({
        success: false,
        message: "no Record Found",
      });
    }
    res.status(200).send({
      success: true,
      stuudentDetails: dta[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Student Api",
      error,
    });
  }
};

// CReate Student

const createStudent = async (req, res) => {
  try {
    const { name, roll_no, fees, classs, medium } = req.body;
    if (!name || !roll_no || !fees || !classs || !medium) {
      return res.status(404).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    const d = await db;
    const dt = await d.query(
      `INSERT INTO students (name, roll_no,fees,classs,medium) VALUES (?,?,?,?,?)`,
      [name, roll_no, fees, classs, medium]
    );
    if (!dt) {
      return res.status(404).send({
        success: false,
        message: "Error in Insert Query",
      });
    }
    res.status(201).send({
      success: true,
      message: "New Record Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Student Api",
      error,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const studentIdd = req.params.id;
    if (!studentIdd) {
      return res.status(404).send({
        success: false,
        message: "Invalid ID or Provide Id",
      });
    }
    const { id, name, roll_no, fees, classs, medium } = req.body;
    const d = await db;
    const dtt = await d.query(
      `UPDATE students SET name=?, roll_no=?,fees=?,classs=?,medium=? WHERE id=${studentIdd}`,
      [name, roll_no, fees, classs, medium]
    );
    if (!dtt) {
      return res.status(404).send({
        success: false,
        message: "Error in Update Student",
      });
    }
    res.status(200).send({
      success: true,
      message: "Student Details updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update Student Api",
      error,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const studentIdd = req.params.id;
    if (!studentIdd) {
      return res.status(404).send({
        success: false,
        message: "Invalid ID or Provide Id",
      });
    }
    const d = await db;
    const dt = await d.query(`DELETE FROM students WHERE id=${studentIdd}`, [
      studentIdd,
    ]);
    if (dt) {
      res.status(200).send({
        success: true,
        message: "Student Deleted Succesfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Delete Student API",
      error,
    });
  }
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
