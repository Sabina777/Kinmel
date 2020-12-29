import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;
