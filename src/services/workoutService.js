import Workout from "../database/Workout.js";
import {v4 as uuid} from "uuid";

const getAllWorkouts = (filterParams) => {
    try {
        const allWorkouts = Workout.getAllWorkouts(filterParams);
        return allWorkouts;
    } catch (error) {
        throw error;
    }
};

const getOneWorkout = (workoutId) => {
    try {
        return Workout.getOneWorkout(workoutId);
    } catch (error) {
        throw error;
    }
};

// create new workout
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt : new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        // toISOString()
        updatedAt : new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    };
    try {
        return Workout.createNewWorkout(workoutToInsert);
    } catch (error) {
        throw error;        
    }
};

const updateOneWorkout = (workoutId, changes) => {
    try {
        return Workout.updateOneWorkout(workoutId, changes);
    } catch (error) {
        throw error;
    }
};

const deleteOneWorkout = (workoutId) => {
    try {
        return Workout.deleteOneWorkout(workoutId);
    } catch (error) {
        throw error;
    }
};


export default { getAllWorkouts, getOneWorkout, createNewWorkout, updateOneWorkout, deleteOneWorkout}
