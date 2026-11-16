function newtonRaphsonPoly(f, initialGuess) {
    let x = initialGuess;
    const tolerance = 1e-7; 
    const h = 1e-5;         
    const maxIter = 100;
    for (let i = 0; i < maxIter; i++) {
        let fx = f(x);
        if (Math.abs(fx) < tolerance) {
            return x;
        }   
        let dfx = (f(x + h) - fx) / h;
        if (dfx === 0) {
            console.error("Derivative reached zero.");
            return null; 
        }        
        x = x - (fx / dfx);
    }
    return x; 
}