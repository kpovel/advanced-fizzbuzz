type FizzBuzzRule = Readonly<{
  number: number;
  name: string;
}>;

function showResult(result: string[]) {
  console.log(result.join(`\n`));
}

function solveFizzBuzzProblem(
  number: number,
  rules: FizzBuzzRule[],
  separator: string = "",
) {
  const result: string[] = [];

  for (let i = 1; i <= number; i++) {
    const divisibleRules = rules.filter((rule) => i % rule.number === 0);

    if (divisibleRules.length) {
      result.push(divisibleRules.map((rule) => rule.name).join(separator));
    } else {
      result.push(i.toString());
    }
  }

  showResult(result);
}

const fizzBuzzRules: FizzBuzzRule[] = [
  { number: 3, name: "Fizz" },
  { number: 5, name: "Buzz" },
];

solveFizzBuzzProblem(100, fizzBuzzRules, "");

