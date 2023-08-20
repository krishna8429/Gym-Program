function generateWorkout(goal) {
    var workoutOutput = document.getElementById("workoutOutput");
    workoutOutput.innerHTML = "";

    var workoutPlan = {};

    if (goal === "weightloss") {
        workoutPlan = {
            day1: "Cardio and Full Body Strength Training",
            day2: "Rest",
            day3: "Cardio and Lower Body Strength Training",
            day4: "Rest",
            day5: "Cardio and Upper Body Strength Training",
            day6: "Rest",
            day7: "Active Rest (Light Stretching)"
        };
    } else if (goal === "musclegain") {
        workoutPlan = {
            day1: "Upper Body Strength Training",
            day2: "Rest",
            day3: "Lower Body Strength Training",
            day4: "Rest",
            day5: "Full Body Strength Training",
            day6: "Rest",
            day7: "Active Rest (Yoga or Mobility)"
        };
    } else if (goal === "maintenance") {
        workoutPlan = {
            day1: "Full Body Strength Training",
            day2: "Cardio",
            day3: "Upper Body Strength Training",
            day4: "Rest",
            day5: "Lower Body Strength Training",
            day6: "Cardio",
            day7: "Active Rest (Light Activity)"
        };
    }

    var workoutTable = "<table><tr><th>Day</th><th>Workout</th></tr>";
    for (var day in workoutPlan) {
        workoutTable += "<tr><td>" + day + "</td><td>" + workoutPlan[day] + "</td></tr>";
    }
    workoutTable += "</table>";

    workoutOutput.innerHTML = workoutTable;
}
