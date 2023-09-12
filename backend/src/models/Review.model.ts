import { model, Schema, Types } from 'mongoose';

export interface Review {
  _id: Types.ObjectId;
  content: string;
  flagged: boolean;
  name: string;
  email: string;
  product: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export const ReviewSchema = new Schema<Review>({
  name: { type: 'String', required: true },
  email: { type: 'String', required: true },
  content: { type: 'String', required: true },
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  flagged: { type: 'Boolean' },
});

export const Review = model<Review>('Review', ReviewSchema);
