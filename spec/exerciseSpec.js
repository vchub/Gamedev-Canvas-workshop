describe("array comprehension", () => {
  /**
   * Пример изменения каждого элемента
   */
  it("double array", () => {
    function doubleIt(xs) {
      res = [];
      for (let i = 0; i < xs.length; i++) {
        res.push(xs[i] * 2);
      }
      return res;
    }

    a = [1, 2, 3];
    exp = [2, 4, 6];
    expect(doubleIt(a)).toEqual(exp);

    exp1 = a.map((x) => x * 2);
    expect(doubleIt(a)).toEqual(exp1);
  });

  /**
   * возведи каждый элемент в квадрат
   */
  xit("square array", () => {
    function square(xs) {
      res = []
      for (let i = 0; i < xs.length; i++) {
        res.push(xs[i] ** 2)
      }
      return res;
    }

    a = [1, 2, 3];
    exp = [1, 4, 9];
    expect(square(a)).toEqual(exp);
    expect(square([0, 1, 5, 10])).toEqual([0, 1, 25, 100]);
  });
});

describe("array filter", () => {
  /**
   * Пример проверки каждого элемента
   */
  it("check > 5", () => {
    function checkMore5(xs) {
<<<<<<< HEAD
      // return xs.filter(x => x > 5);
      res = []
      for (let i = 0; i < xs.length; i++) {
        if (xs[i] > 5) {
          res.push(xs[i])
        }
      }
      return res
=======
      return xs.filter((x) => x > 5);
>>>>>>> ff8a420b78e9be2616abc3b963fbfca9f2f58771
    }

    a = [1, 6, 2, 7, 5];
    exp = [6, 7];
    expect(checkMore5(a)).toEqual(exp);
  });

  /**
   * Отфильтруй все четные
   */
  xit("firlter even", () => {
    function evens(xs) {
      return;
    }

    a = [1, 6, 2, 7, 5];
    exp = [6, 2];
    expect(evens(a)).toEqual(exp);
  });

  /**
   * Отфильтруй все делящиеся на определенные числа
   */
  xit("firlter div by numbers", () => {
    function divby(xs, p, q) {
      return;
    }

    a = [25, 15, 35, 30];
    exp = [15, 30];
    expect(divby(a, 3, 5)).toEqual(exp);
  });
});
