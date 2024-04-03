import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, '此信箱已存在!'],
    required: [true, '信箱為必填!'],
  },
  username: {
    type: String,
    required: [true, '使用者名稱為必填!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "使用者名稱應包含8-20個英文字母與數字且不重複。"]
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);

export default User;