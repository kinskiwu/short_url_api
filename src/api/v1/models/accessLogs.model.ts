import mongoose, { Schema } from 'mongoose';
import { AccessLog } from '../types/DbModelTypes';

const AccessLogSchema = new Schema({
  accessTime: { type: Date, required: true, default: Date.now },
  shortUrlId: { type: String, required: true }
});

export const AccessLogModel = mongoose.model<AccessLog>('AccessLog', AccessLogSchema);