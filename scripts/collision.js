function lineTouchesCircle(x1, y1, x2, y2, cx, cy, r) {
    // Translate circle to origin
    let x1p = x1 - cx;
    let y1p = y1 - cy;
    let x2p = x2 - cx;
    let y2p = y2 - cy;

    // Parametric equations of the line
    let dx = x2p - x1p;
    let dy = y2p - y1p;

    // Quadratic coefficients
    let a = dx * dx + dy * dy;
    let b = 2 * (x1p * dx + y1p * dy);
    let c = x1p * x1p + y1p * y1p - r * r;

    // Discriminant of quadratic equation
    let discriminant = b * b - 4 * a * c;

    // Check if line intersects the circle
    if (discriminant >= 0) {
        // Calculate possible values of t
        let t1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        let t2 = (-b + Math.sqrt(discriminant)) / (2 * a);

        // Check if any valid t lies within [0, 1]
        if ((t1 >= 0 && t1 <= 1) || (t2 >= 0 && t2 <= 1)) {
            return true;
        }
    }
    
    return false;
}
