// write annotations if function
const add = (a: number, b: number): number => {
  return a + b;
};

// void: NOT returning anything at all (Like for console.log)
// void is come up if no `return` and annotations
// Good! TS will remind for return
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function(a: number, b: number):
    number {
      return a * b
    }

// Void: Not return anything
const logger = (message: string):
    void => {
      console.log(message)
    }

// Never: throw Error -> Technically, function doesn't return anything.
// Never gonna reach to this function
const throwError = (message: string):
    never => {
      throw new Error(message)
    }

const throwError2 = (message: string):
    string => {
      if (!message) {
        throw new Error('Error')
      }

      return message
    }

const forecast = {
  date: new Date(),
  weather: 'sunny'
}

// const logWeather = (forecast: {date: Date, weather: string}): ->
// destructuring
const logWeather = ({date, weather}: {date: Date, weather: string}):
    void => {
      console.log(date)
      console.log(weather)
    }

logWeather(forecast)