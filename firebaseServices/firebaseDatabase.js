import { app } from "./firebaseConfig";
import { getDatabase } from "firebase/database";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
