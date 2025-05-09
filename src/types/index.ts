
import { FieldValue, Timestamp } from "firebase/firestore";

export interface Users {
  id: string;
  name: string;
  email: string;
  createdAt: Timestamp | FieldValue;
  updateAt: Timestamp | FieldValue;
}
