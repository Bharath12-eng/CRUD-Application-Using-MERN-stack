import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

//Creating the model for the Appliaction.
const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    reuired: true,
  },
  description: {
    type: String,
    reuired: true,
  },
  price: {
    type: Number,
    reuired: true,
  },
});

autoIncrement.initialize(mongoose.connection);
ItemSchema.plugin(autoIncrement.plugin, "items");

const Item = mongoose.model("items", ItemSchema);

export default Item;
