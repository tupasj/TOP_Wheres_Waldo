import { get, getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
import { firebaseApp } from "./firebaseConfig.js";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);
const databaseRef = ref(database, 'rankings');

const getRankings = async () => {
    const dataSnapshot = await get(databaseRef);

    try {
        if (dataSnapshot.exists()) {
            const data = dataSnapshot.val();
            return data;
        } else {
            console.log('No data available');
        };
    } catch (error) {
        console.log(error);
    };
};

export { getRankings };