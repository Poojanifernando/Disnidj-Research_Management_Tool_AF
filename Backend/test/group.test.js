const mongoose = require('mongoose');
const groups = require("../models/group");

test("create group details without required filed should failed", async() =>{
   const adminWithoutRequiredField = new groups({ GName: "group name testing", student1: " student 1 testing"});
    let err;
    try {
        const savedAdminWithoutRequiredField =
          await adminWithoutRequiredField.save();
        error = savedAdminWithoutRequiredField;
      } catch (error) {
        err = error;
      }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.Leader).toBeDefined();
})





