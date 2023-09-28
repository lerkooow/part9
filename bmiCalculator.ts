// a - height(cm), b - weight(kg)
// BMI =  weight(kg)/height^2(m)

const calculateBmi = (a: number, b: number) => {
    const count = b / ((a * a) / 10000)

    if (count < 18.4) {
        return "Underweight"
      } else if (count >= 18.5 && count <= 24.9) {
        return "Normal (healthy weight)"
      } else if (count >= 25 && count <= 29.9) {
        return "Overweight"
      } else if (count >= 30 && count <= 34.9) {
        return "Obese"
      } else if (count >= 35) {
        return "Extremely obese"
      }
  }

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
console.log(calculateBmi(a, b))
