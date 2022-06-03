const mongoose = require('mongoose');
const GetAllposts = require("../models/SuperviEve");

test("create super eve without required filed should failed", async() =>{
   const adminWithoutRequiredField = new GetAllposts({ Groupname: "name testing"});
    let err;
    try {
        const savedAdminWithoutRequiredField =
          await adminWithoutRequiredField.save();
        error = savedAdminWithoutRequiredField;
      } catch (error) {
        err = error;
      }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.title).toBeDefined();
})





