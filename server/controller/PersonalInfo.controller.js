const PersonalInfoModel = require("../model/PersonalInfo.model")

exports.CreatePersonalInfo = async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, number, panCardNumber, city, referenceNumber, gender } = req.body;

    const errorMessage = [];

    // Name validation (required, should be a string and at least 3 characters)
    if (!name) {
      errorMessage.push("Name is required");
    } else if (typeof name !== 'string' || name.trim().length < 3) {
      errorMessage.push("Name must be a string and at least 3 characters long");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      errorMessage.push("Please Check Your Mail Because . Invalid email format");
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!number) {
      errorMessage.push("Phone number is required");
    } else if (!phoneRegex.test(number)) {
      errorMessage.push("Phone number must be a valid 10-digit Indian number starting with 6-9");
    }

    const panCardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (panCardNumber && !panCardRegex.test(panCardNumber)) {
      errorMessage.push("Invalid PAN card number format (e.g., ABCDE1234F)");
    }

    if (!city) {
      errorMessage.push("City Name is must required")
    }

    if (!gender) errorMessage.push("Grnder Is must required")

    if (referenceNumber && referenceNumber.length < 1) {
      errorMessage.push("Reference number must be at least 1 characters long");
    }


    if (errorMessage.length > 0) {
      return res.status(400).json({
        success: false,
        message: errorMessage.join(", ")
      });
    }

    const newPersonalInfo = new PersonalInfoModel({ name, email, number, panCardNumber, city, referenceNumber ,gender });
    await newPersonalInfo.save();

    res.status(200).json({
      success: true,
      message: "Personal Info added successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};


exports.GetPersonalInfo = async (req, res) => {
  // hitesh
  try {
    const PersonalInfo = await PersonalInfoModel.find()
    if (!PersonalInfo) {
      return res.status(404).json({
        success: false,
        message: "Details Not Found"
      })
    }
    res.status(200).json({
      success: true,
      message: 'Personal Details Found Successfully',
      data: PersonalInfo
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      mssg: 'Internal service error'
    })
  }
}

// Delete Personal Info
exports.deletePersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfoModel.findById(req.params.id);

    if (!personalInfo) {
      return res.status(404).json({
        success: false,
        message: "Personal Info not found"
      });
    }

    await personalInfo.deleteOne();

    res.status(200).json({
      success: true,
      message: "Personal Info deleted successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};