import mongoose, { Schema, model } from "mongoose";

const movieSchema = new Schema(
    {
      name: { type: String, maxLength: 120, required: true },
      producer: { type: String, maxLength: 120, required: true },
      releaseYear: {
        type: Number,
        min: 1920,
        max: new Date().getFullYear(),
        required: true,
      },
      copyCount: { type: Number, default: 0 },
      /*  price: { type: Number, required: true }, */
      edition: { type: Number, default: 1 },
      category: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );