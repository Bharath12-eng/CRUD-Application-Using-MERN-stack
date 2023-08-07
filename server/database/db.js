import mongoose from "mongoose";

//Connect the Appliaction to MonGoDB Cloud-Server
const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-kds2hcy-shard-00-00.lr0mqac.mongodb.net:27017,ac-kds2hcy-shard-00-01.lr0mqac.mongodb.net:27017,ac-kds2hcy-shard-00-02.lr0mqac.mongodb.net:27017/?ssl=true&replicaSet=atlas-vmoi3o-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {});
  } catch (err) {
    return err;
  }
};

export default Connection;
