const mongoose = require('mongoose');
const areas = require("../models/areas");

test("create areas without required filed should failed", async() =>{
   const adminWithoutRequiredField = new areas({ Area: "Area testing"});
    let err;
    try {
        const savedAdminWithoutRequiredField =
          await adminWithoutRequiredField.save();
        error = savedAdminWithoutRequiredField;
      } catch (error) {
        err = error;
      }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.Topics).toBeDefined();
})





