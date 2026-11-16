function simpsonIntegrate(f, a, b, n) {
    if (n < 2) return null;

    let h = (b - a) / n;
    let sum = 0;
    
    let limit = (n % 2 === 0) ? n : n - 3;

    if (limit > 0) {
        let sum13 = f(a) + f(a + limit * h);
        for (let i = 1; i < limit; i++) {
            let x = a + i * h;
            sum13 += (i % 2 !== 0) ? 4 * f(x) : 2 * f(x);
        }
        sum += sum13 * (h / 3);
    }

    if (n % 2 !== 0) {
        let x0 = a + (n - 3) * h;
        let x1 = a + (n - 2) * h;
        let x2 = a + (n - 1) * h;
        let x3 = a + n * h;
        
        sum += (3 * h / 8) * (f(x0) + 3 * f(x1) + 3 * f(x2) + f(x3));
    }

    return sum;
}

function gaussLegendreIntegrate(f, a, b) {
    const nodes = [
        0, 
        0.5384693101056831, -0.5384693101056831, 
        0.9061798459386640, -0.9061798459386640
    ];
    const weights = [
        0.5688888888888889, 
        0.4786286704993665, 0.4786286704993665, 
        0.2369268850561891, 0.2369268850561891
    ];

    let sum = 0;
    let c1 = (b - a) / 2;
    let c2 = (b + a) / 2;

    for (let i = 0; i < 5; i++) {
        sum += weights[i] * f(c1 * nodes[i] + c2);
    }

    return c1 * sum;
}