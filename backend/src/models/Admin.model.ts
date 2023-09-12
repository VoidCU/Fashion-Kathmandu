import { model, Schema, Types } from 'mongoose';

export interface Admin {
  _id: Types.ObjectId;
  email: string;
  password: string;
}

export const AdminSchema = new Schema<Admin>({
  email: { type: 'String', required: true },
  password: { type: 'String', required: true },
});

export const Admin = model<Admin>('Admin', AdminSchema);
