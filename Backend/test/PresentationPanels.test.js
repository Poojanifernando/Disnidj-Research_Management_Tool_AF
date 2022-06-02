const mongoose = require('mongoose');
const present = require("../models/PresentationPanels");

test("create presenation panel without required filed should failed", async() =>{
   const adminWithoutRequiredField = new present({ GroupId: "GroupID testing" , PanelMember1:"member 1 testing"});
    let err;
    try {
        const savedAdminWithoutRequiredField =
          await adminWithoutRequiredField.save();
        error = savedAdminWithoutRequiredField;
      } catch (error) {
        err = error;
      }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.PanelMember4).toBeDefined();
})





