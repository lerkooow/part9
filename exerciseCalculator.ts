const CalculExercisions = (array: number[], target: number) => {

    const periodLength = array.length;
    const trainingDays = array.filter(a => a > 0).length;
    const average = array.reduce((acc, number) => acc + number, 0) / array.length;
    const success = average < target ? false : true;
    const rating = average > target ? 3 : average <= (target / 2) ? 1 : 2;
    const ratingDescription = rating === 3 ? "Very good! Well done :)" : rating === 1 ? "Try harder next time :(" : "Not too bad but could be better!";

    return (
        {
            periodLength,
            trainingDays,
            success,
            rating,
            ratingDescription,
            target,
            average
        }
    )
  }

console.log(CalculExercisions([3, 0, 2, 4.5, 0, 3, 1], 2))