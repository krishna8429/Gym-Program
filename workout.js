document.addEventListener('DOMContentLoaded', function() {
    const goal = localStorage.getItem('selectedGoal');
    const workoutPlanElement = document.getElementById('workoutPlan');

    if (goal === 'weightLoss') {
        workoutPlanElement.innerHTML = `
            <h2>Weight Loss Workout Plan</h2>
            <p>Cardiovascular exercises:</p>
            <ul>
                <li>30 minutes of brisk walking or jogging</li>
                <li>20 minutes of cycling</li>
            </ul>
            <p>Strength training:</p>
            <ul>
                <li>3 sets of push-ups</li>
                <li>3 sets of squats</li>
                <li>3 sets of lunges</li>
            </ul>
        `;
    } else if (goal === 'muscleGain') {
        workoutPlanElement.innerHTML = `
            <h2>Muscle Gain Workout Plan</h2>
            <p>Strength training:</p>
            <ul>
                <li>3 sets of bench press</li>
                <li>3 sets of squats</li>
                <li>3 sets of deadlifts</li>
            </ul>
            <p>Isolation exercises:</p>
            <ul>
                <li>3 sets of bicep curls</li>
                <li>3 sets of tricep dips</li>
                <li>3 sets of leg curls</li>
            </ul>
        `;
    }
});
