import { model, Schema, Types } from 'mongoose';

export interface ICategory {
  _id: Types.ObjectId;
  title: string;
  productCount: number;
}

export const CategorySchema = new Schema<ICategory>(
  {
    title: { type: 'String', required: true },
    productCount: { type: 'Number', default: 0 },
  },
  { timestamps: true }
);

export const Category = model<ICategory>('Category', CategorySchema);
