function getCholesky(A) {
    let n = A.length;
    let L = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            let sum = 0;
            for (let k = 0; k < j; k++) sum += L[i][k] * L[j][k];
            
            if (i === j) {
                L[i][j] = Math.sqrt(A[i][i] - sum);
            } else {
                L[i][j] = (A[i][j] - sum) / L[j][j];
            }
        }
    }
    return L;
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

function backwardSubstituteTrans(L, y) {
    let n = L.length;
    let x = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < n; j++) sum += L[j][i] * x[j]; 
        x[i] = (y[i] - sum) / L[i][i];
    }
    return x;
}

function invertMatrixCholesky(A) {
    let n = A.length;
    let L = getCholesky(A);
    let inv = Array.from({ length: n }, () => Array(n).fill(0));

    for (let j = 0; j < n; j++) {
        let e = Array(n).fill(0);
        e[j] = 1; 

        let y = forwardSubstitute(L, e);
        let x = backwardSubstituteTrans(L, y);

        for (let i = 0; i < n; i++) inv[i][j] = x[i];
    }
    return inv;
}