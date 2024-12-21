import Record from "../database/Record.js";

const getRecordForWorkout = (workoutId) => {
    try {
        return Record.getRecordForWorkout(workoutId);
    } catch (error) {
        throw error;
    }
};

export default {getRecordForWorkout}
