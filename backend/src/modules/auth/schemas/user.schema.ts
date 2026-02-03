import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true }) // 1. Tự động tạo field created_at và updated_at

export class User {
    @Prop({ required: true }) // 2. Bắt buộc phải có tên
    name: string;

    @Prop({ required: true, unique: true }) // 3. Email bắt buộc và KHÔNG được trùng
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: 'staff' }) // 4. Nếu không điền, mặc định là nhân viên
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);