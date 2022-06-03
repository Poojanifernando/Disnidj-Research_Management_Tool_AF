const mongoose = require('mongoose');
const topics = require("../models/topics");

test("create topic requesting details without required filed should failed", async() =>{
   const adminWithoutRequiredField = new topics({ Supervisors: "supervisor testing", Topic: "topic testing"});
    let err;
    try {
        const savedAdminWithoutRequiredField =
          await adminWithoutRequiredField.save();
        error = savedAdminWithoutRequiredField;
      } catch (error) {
        err = error;
      }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.Area).toBeDefined();
})





