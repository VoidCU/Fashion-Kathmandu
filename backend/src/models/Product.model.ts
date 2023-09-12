import { model, Schema, Types } from 'mongoose';

export interface IProduct {
  _id: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  images: string[];
  bucket: string[];
  threeDView: string;
  sizes: string;
  category: Types.ObjectId; // Change the type to ObjectId
  slug: string;
  isFeatured: boolean;
  detailed_description: string;
  materials: string[];
  inStock: boolean;
}

export const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, unique: true },
    slug: {
      type: String,
      unique: true,
    },
    description: { type: String, required: true },
    price: { type: Number },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }, // Reference the Category model
    images: [{ type: String }],
    bucket: [{ type: String }],
    threeDView: { type: String },
    isFeatured: { type: Boolean },
    inStock: { type: Boolean },
    sizes: { type: String },
    detailed_description: { type: String, required: true },
    materials: [{ type: String }],
  },
  { timestamps: true }
);

ProductSchema.pre('save', async function (next) {
  this.slug = this.name.toLowerCase().replace(/\s+/g, '-');
  console.log(this);
  const Category = model('Category');

  try {
    await Category.updateOne(
      { _id: this.category },
      { $inc: { productCount: 1 } }
    );
    next();
  } catch (err: any) {
    next(err);
  }
});

//change productCount when category is changed
ProductSchema.pre('findOneAndUpdate', async function (next) {
  const Category = model('Category');
  const docToUpdate = await this.model.findOne(this.getQuery());
  const oldCategory = docToUpdate.category;
  try {
    await Category.updateOne(
      { _id: oldCategory },
      { $inc: { productCount: -1 } }
    );
    next();
  } catch (err: any) {
    next(err);
  }
});

ProductSchema.post('findOneAndUpdate', async function () {
  const docToUpdate = await this.model.findOne(this.getQuery());
  const newCategory = docToUpdate.category;
  const Category = model('Category');
  try {
    await Category.updateOne(
      { _id: newCategory },
      { $inc: { productCount: 1 } }
    );
  } catch (err: any) {
    console.log(err);
  }
});

ProductSchema.pre('findOneAndRemove', async function (this, next) {
  const docToUpdate = await this.model.findOne(this.getQuery());
  const Category = model('Category');
  try {
    await Category.updateOne(
      { _id: docToUpdate.category },
      { $inc: { productCount: -1 } }
    );
    next();
  } catch (err: any) {
    next(err);
  }
});

export const Product = model<IProduct>('Product', ProductSchema);
