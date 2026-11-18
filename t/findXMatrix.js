
function getLU(A) {
    let n = A.length;
    let U = A.map(row => [...row]); 
    let L = Array.from({ length: n }, () => Array(n).fill(0));
    let P = Array.from({ length: n }, (_, i) => i);

    for (let i = 0; i < n; i++) {
        let maxRow = i;
        let maxVal = Math.abs(U[i][i]);
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(U[k][i]) > maxVal) {
                maxVal = Math.abs(U[k][i]);
                maxRow = k;
            }
        }

        if (maxRow !== i) {
            let tempU = U[i]; U[i] = U[maxRow]; U[maxRow] = tempU;
            let tempL = L[i]; L[i] = L[maxRow]; L[maxRow] = tempL;
            let tempP = P[i]; P[i] = P[maxRow]; P[maxRow] = tempP;
        }

        L[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            let factor = U[j][i] / U[i][i];
            L[j][i] = factor;
            for (let k = i; k < n; k++) {
                U[j][k] -= factor * U[i][k];
            }
        }
    }
    return { L, U, P };
}

function forwardSubstitute(L, b) {
    let n = L.length;
    let y = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < i; j++) sum += L[i][j] * y[j];
        y[i] = (b[i] - sum) / L[i][i]; 
    }
    return y;
}

function backwardSubstitute(U, y) {
    let n = U.length;
    let x = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < n; j++) sum += U[i][j] * x[j];
        x[i] = (y[i] - sum) / U[i][i];
    }
    return x;
}
function findXMatrix(A, B) {
    const { L, U, P } = getLU(A);
    let n = B.length;

    let permutedB = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        permutedB[i] = B[P[i]];
    }

    let y = forwardSubstitute(L, permutedB);
    let x = backwardSubstitute(U, y);

    return x; 
}
