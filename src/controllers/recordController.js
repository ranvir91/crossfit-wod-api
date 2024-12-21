import recordService from "../services/recordService.js";

const getRecordForWorkout = (req, res) => {
    try {
        const { workoutId } = req.params;        
        const allRecordsForWorkout = recordService.getRecordForWorkout(workoutId);
        res.status(200).send({ status: "OK", data: allRecordsForWorkout });        
    } catch (error) {
        res.status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}


export default { getRecordForWorkout }
