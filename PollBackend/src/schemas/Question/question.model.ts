import mongoose from "mongoose";
import { QuestionModel } from "./question.typedef";

const oprionSchema = new mongoose.Schema({
  a: { type: String },
  b: { type: String },
  c: { type: String },
  d: { type: String },
});

const optionStatusSchema = new mongoose.Schema({
  a: { type: Number },
  b: { type: Number },
  c: { type: Number },
  d: { type: Number },
});
const userReactionSchema = new mongoose.Schema({
  userId: { type: String },
  selectOption: { type: String },
});

const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    options: { type: oprionSchema },
    optionStatus: { type: optionStatusSchema },
    totalAnswered: { type: Number, default: 0 },
    reaction: [userReactionSchema],
  },
  {
    timestamps: true,
  },
);

const Question = mongoose.model<QuestionModel>("Question", questionSchema);
export { Question };
