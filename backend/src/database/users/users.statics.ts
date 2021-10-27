import { IUserDocument, IUserModel } from "./users.types";
export async function findOneOrCreate(userId: string): Promise<IUserDocument> {
  //@ts-ignore
  const record = await this.findOne({ userId });
  if (record) {
    return record;
  } else {
    //@ts-ignore
    return this.create({ userId });
  }
}
export async function findByAge(
  min?: number,
  max?: number
): Promise<IUserDocument[]> {
  //@ts-ignore
  return this.find({ age: { $gte: min || 0, $lte: max || Infinity } });
}
