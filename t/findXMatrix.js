function getLU(A) {
    let n = A.length;
    let L = Array.from({ length: n }, () => Array(n).fill(0));
    let U = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let k = i; k < n; k++) {
            let sum = 0;
            for (let j = 0; j < i; j++) sum += L[i][j] * U[j][k];
            U[i][k] = A[i][k] - sum;
        }
        for (let k = i; k < n; k++) {
            if (i === k) {
                L[i][i] = 1;
            } else {
                let sum = 0;
                for (let j = 0; j < i; j++) sum += L[k][j] * U[j][i];
                L[k][i] = (A[k][i] - sum) / U[i][i];
            }
        }
    }
    return { L, U };
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
    const { L, U } = getLU(A);
    let n = B.length;
    let m = B[0].length;
    let X = Array.from({ length: n }, () => Array(m).fill(0));

    for (let j = 0; j < m; j++) {
        let bCol = [];
        for (let i = 0; i < n; i++) bCol.push(B[i][j]);

        let y = forwardSubstitute(L, bCol);
        let x = backwardSubstitute(U, y);

        for (let i = 0; i < n; i++) X[i][j] = x[i];
    }
    return X;
}
