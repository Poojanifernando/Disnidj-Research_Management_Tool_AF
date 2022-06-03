const mongoose = require('mongoose');
const GetAllposts = require("../models/PanelEve");

test("create  panel Eve without required filed should failed", async() =>{
   const adminWithoutRequiredField = new GetAllposts({ Groupname: "group name testing", introduction: " intro testing"});
    let err;
    try {
        const savedAdminWithoutRequiredField =
          await adminWithoutRequiredField.save();
        error = savedAdminWithoutRequiredField;
      } catch (error) {
        err = error;
      }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.organization).toBeDefined();
})





