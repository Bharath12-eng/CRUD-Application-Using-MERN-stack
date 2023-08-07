import Item from "../models/Item-schema.js";

//Adding an Item to application
export const addItem = async (req, res) => {
  const data = req.body;
  const { name, description, price } = req.body;
  if (!name || !description || !price) {
    return res
      .status(400)
      .json({ message: "Name,Description,price are required" });
  }

  const newItem = new Item(data);
  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(404).json({
      message: "data not found",
    });
  }
};

//Fetching all the Items from the database
export const getItems = async (req, res) => {
  try {
    const item = await Item.find({});
    res.status(200).json(item);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

//Fetching the Single Item from the database By ID
export const getItemById = async (req, res) => {
  const id = req.params.id;

  try {
    const item = await Item.findOne({ _id: id });
    res.status(200).json({ item });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

//Editng an Item Information on aplliaction.
export const editItem = async (req, res) => {
  const item = req.body;
  const id = req.params.id;
  const { name, description, price } = req.body;
  if (!name || !description || !price) {
    return res
      .status(400)
      .json({ message: "Name,Description,price are required" });
  }
  const editItem = new Item(item);
  try {
    await Item.updateOne({ _id: id }, editItem);
    res.status(201).json(editItem);
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};

//Deleting an Item or SingleItem from  an appliaction
export const deleteItem = async (req, res) => {
  const id = req.params.id;
  try {
    await Item.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: "Deleted Successfully",
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};
