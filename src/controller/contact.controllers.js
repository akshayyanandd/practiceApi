import contactModel from "../models/contact.models.js";

export const getAllContactsController = async (req, res, next) => {
  try {
    const contacts = await contactModel.find();
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.log(error);
  }
};

export const addSingleContactController = async (req, res, next) => {
  try {
    const { name, phoneNumber, email } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "Name is required." });
    }
    if (!phoneNumber) {
      return res
        .status(400)
        .json({ success: false, message: "Name is required." });
    }
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Name is required." });
    }

    const existedContact = await contactModel.findOne({ name });
    if (existedContact) {
      return res
        .status(401)
        .json({ success: false, message: "Already exist this contact number" });
    }

    const newContact = new contactModel({ name, phoneNumber, email });

    await newContact.save();

    res
      .status(200)
      .json({ success: true, message: "Contact has been added !!" });
  } catch (error) {
    console.log(error);
  }
};

export const updateContactController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, phoneNumber, email } = req.body;
    const contact = await contactModel.findById(id);

    if (!contact) {
      return res
        .status(404)
        .json({ success: false, message: "Contact not found !!" });
    }

    contact.name = name || contact.name;
    contact.phoneNumber = phoneNumber || contact.phoneNumber;
    contact.email = email || contact.email;

    await contact.save();

    res
      .status(200)
      .json({ success: true, message: "Contact has been Updated !!" });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleContactController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await contactModel.findById(id);
    if (!contact) {
      return res
        .status(404)
        .json({ success: false, message: "Contact not found !!" });
    }
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSingleContactController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await contactModel.findById(id);
    if (!contact) {
      return res
        .status(404)
        .json({ success: false, message: "Contact not found !!" });
    }
    const deletedContact = await contact.deleteOne();

    res.status(200).json({
      success: true,
      message: "Contact has been deleted !!",
      data: deletedContact,
    });
  } catch (error) {
    console.log(error);
  }
};
