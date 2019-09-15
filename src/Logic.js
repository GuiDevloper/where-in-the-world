const Logic = () => {
  window.test1 = [
    [1,1,0,1,9],
    [0,1,1,0,1],
    [1,1,1,1,1],
    [1,1,0,1,1],
    [1,1,1,1,0]
  ];

  window.test2 = [
    [1,1,1,1],
    [0,1,1,0],
    [0,1,0,1],
    [0,1,9,1],
    [1,1,1,1]
  ];

  window.PathOfLogic = (arr) => {
    let end = [["0x0"]], idx = 0, elim = [], op = [1, 2, 3, 4], ow = 0;
    const robot = (i, j, time) => {
      let aRem = (id) => id === 1 ? [i+1, j] : (
        id === 2 ? [i, j+1] : (id === 3 ? [i-1, j] : [i, j-1])
      );
      return aRem(op[time-1]);
    };

    const find = (i, j, time) => {
      [i, j] = [+i, +j];
      let [a, b] = robot(i, j, time);
      end[idx] = end[idx] || ["0x0"];
      if (arr[a] && arr[a][b] === 1 &&
        !end[idx].includes([b, a].join('x')) &&
        !elim.includes([b, a].join('x'))
      ) {
        let tres = end[idx][end[idx].length - 3];
        if (tres === [b-1, a].join('x') ||
          tres === [b, a-1].join('x') ||
          tres === [b+1, a].join('x') ||
          tres === [b, a+1].join('x')) {
          end[idx].splice(end[idx].length-2, 2, [b, a].join('x'));
          return find(a, b, ow++);
        } else {
          end[idx].push([b, a].join('x'));
          return find(a, b, 1);
        }
      } else {
        if (arr[a] && arr[a][b] === 9) {
          end[idx].push([b, a].join('x'));
          if (end.length < 4) {
            idx++;
            op.push(op.shift());
            return find(0, 0, 1);
          } else {
            return;
          }
        }
        if (time < 4) {
          return find(i, j, time + 1);
        } else {
          end[idx].pop();
          elim.push([j, i].join('x'));
          if (end[idx].length < 1) return;
          let previ = end[idx][end[idx].length - 1].split('x').reverse();
          find(...[...previ, 1]);
        }
      }
    };
    find(0, 0, 1);
    console.log("Caminhos possíveis: ", end);
    console.log("Caminho mais curto: ", end.reduce((acc, el) => {
      return el.length < acc.length ? el : acc;
    }));
  };
  console.log(`Uso da função: PathOfLogic(matrix2D) // retorna caminhos e o mais curto
  Para executar um teste de exemplo use PathOfLogic(test2) ou PathOfLogic(test2)`);
};

export default Logic;
