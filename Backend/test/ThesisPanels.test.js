const mongoose = require('mongoose');
const thesis = require("../models/ThesisPanels");

test("create thesis panel without required filed should failed", async() =>{
   const adminWithoutRequiredField = new thesis({ GroupId: "GroupID testing" , PanelMember2:"member 1 testing"});
    let err;
    try {
        const savedAdminWithoutRequiredField =
          await adminWithoutRequiredField.save();
        error = savedAdminWithoutRequiredField;
      } catch (error) {
        err = error;
      }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.PanelMember3).toBeDefined();
})





