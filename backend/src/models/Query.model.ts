import { model, Schema, Types } from 'mongoose';

export interface IQuery {
  _id: Types.ObjectId;
  name: string;
  email: string;
  product: Types.ObjectId;
  query: string;
}

export const QuerySchema = new Schema<IQuery>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    query: { type: String, required: true },
  },
  { timestamps: true }
);

export const Query = model<IQuery>('Query', QuerySchema);
