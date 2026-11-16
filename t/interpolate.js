function lagrangeInterpolate(x, y, xi) {
    let result = 0;
    let n = x.length;

    for (let i = 0; i < n; i++) {
        let term = y[i];
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                term = term * (xi - x[j]) / (x[i] - x[j]);
            }
        }
        result += term;
    }
    return result;
}


function newtonsDividedInterpolate(x, y, xi) {
    let n = x.length;
    let f = [...y]; 

    for (let j = 1; j < n; j++) {
        for (let i = n - 1; i >= j; i--) {
            f[i] = (f[i] - f[i - 1]) / (x[i] - x[i - j]);
        }
    }

    let result = f[0];
    let xTerm = 1;
    
    for (let i = 1; i < n; i++) {
        xTerm *= (xi - x[i - 1]);
        result += f[i] * xTerm;
    }
    
    return result;
}