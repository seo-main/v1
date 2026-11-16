function invertMatrix(m) {
    let n = m.length;
    let a = m.map(row => [...row]);
    let inv = Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
    );

    for (let i = 0; i < n; i++) {
        let pivot = i;
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(a[j][i]) > Math.abs(a[pivot][i])) pivot = j;
        }
        if (a[pivot][i] === 0) return null;

        [a[i], a[pivot]] = [a[pivot], a[i]];
        [inv[i], inv[pivot]] = [inv[pivot], inv[i]];

        let diag = a[i][i];
        for (let j = 0; j < n; j++) {
            a[i][j] /= diag;
            inv[i][j] /= diag;
        }

        for (let k = 0; k < n; k++) {
            if (k === i) continue;
            let factor = a[k][i];
            for (let j = 0; j < n; j++) {
                a[k][j] -= factor * a[i][j];
                inv[k][j] -= factor * inv[i][j];
            }
        }
    }
    return inv;
}