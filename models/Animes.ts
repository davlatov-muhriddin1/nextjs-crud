import { Schema, model, models } from "mongoose";

const AnimesSchema = new Schema(
  {
    image: String,
    title: String,
    info: String,
  },
  { timestamps: true }
);

const Animes = models.Animes || model("Animes", AnimesSchema);
export default Animes;
