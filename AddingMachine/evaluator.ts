export class Evaluator {
  ops: string[] = [];
  vals: number[] = [];


  constructor() {}


  calculate(toEval: string) {
    const tokens = toEval.split(' ');
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === '(') {
      } else if (tokens[i] === '+') {
        this.ops.push('+');
      } else if (tokens[i] === '-') {
        this.ops.push('-');
      } else if (tokens[i] === '*') {
        this.ops.push('*');
      } else if (tokens[i] === '/') {
        this.ops.push('/');
      } else if (tokens[i] === 'sqrt') {
        this.ops.push('sqrt');
      } else if (tokens[i] === ')') {
        let op = this.ops.pop();
        let v = this.vals.pop();
        if (op === '+') {
          v = this.vals.pop() + v;
        } else if (op === '-') {
          v = this.vals.pop() - v;
        } else if (op === '*') {
          v = this.vals.pop() * v;
        } else if (op === '/') {
          v = this.vals.pop() / v;
        } else if (op === 'sqrt') {
          v = Math.sqrt(v);
        }
        this.vals.push(v);
      } else {
        this.vals.push(parseFloat(tokens[i]));
      }
    }
    return this.vals.pop();
  }
}


//   public double run(String toEvaluate) {
//
//   String[] tokens = toEvaluate.split(" ");
//   for (String token : tokens) {
//   if      (token.equals("("))               ;
//   else if (token.equals("+"))    ops.push(token);
//   else if (token.equals("-"))    ops.push(token);
//   else if (token.equals("*"))    ops.push(token);
//   else if (token.equals("/"))    ops.push(token);
//   else if (token.equals("sqrt")) ops.push(token);
//   else if (token.equals(")")) {
//   String op = ops.pop();
//   double v = vals.pop();
//   if      (op.equals("+"))    v = vals.pop() + v;
//   else if (op.equals("-"))    v = vals.pop() - v;
//   else if (op.equals("*"))    v = vals.pop() * v;
//   else if (op.equals("/"))    v = vals.pop() / v;
//   else if (op.equals("sqrt")) v = Math.sqrt(v);
//   vals.push(v);
// }
// else vals.push(Double.parseDouble(token));
// }
// return vals.pop();
// }
//
// }
