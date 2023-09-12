import { model, Schema, Types } from 'mongoose';

export interface ISubscriber {
  _id: Types.ObjectId;
  email: string;
}

const SubscriberSchema = new Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: true,
      unique: true, // Ensure that each email is unique
      trim: true, // Trim whitespace from the email field
    },
  },
  { timestamps: true }
);

export const Subscriber = model<ISubscriber>('Subscriber', SubscriberSchema);
