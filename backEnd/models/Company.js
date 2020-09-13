const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let companySchema = new Schema({

  CompanyId: {
    type: String
  },
  Company: { 
    type: String
  },
  Speciality: {
    type: String
  },
  Innovative: {
    type: String
  },
  IndustryType1: {
    type: String
  },
  SubIndustryType1: {
    type: String
  },
  rollno: {
    type: String
  },
  EmployeeSizeFromValue: {
    type: String
  },
  EmployeeSizeToValue: {
    type: String
  },

//   CompanyId string
// Company string
// Speciality string
// IndustryType1 string
// SubIndustryType1 string
// EmployeeSizeFromValue string
// EmployeeSizeToValue string
}, {
  collection: 'company'
})

module.exports = mongoose.model('Company', companySchema)