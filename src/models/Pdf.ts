import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPdf extends Document {
  title: string;           
  url: string;             
  userId: string; 
  originalSize?: number;   
  compressedSize?: number;  
  summary?: string; 
  createdAt: Date;
  updatedAt: Date;
}

const pdfSchema = new Schema<IPdf>(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    userId: { type: String, required: true }, 
    originalSize: { type: Number },
    compressedSize: { type: Number },
    summary: { type: String },
  },
  { timestamps: true }
);

const Pdf: Model<IPdf> = mongoose.models.Pdf || mongoose.model<IPdf>("Pdf", pdfSchema);

export default Pdf;
