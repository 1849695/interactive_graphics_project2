// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
function GetTransform(positionX, positionY, rotation, scale) {
    // Convert rotation from degrees to radians
    var angle = rotation * Math.PI / 180;

    // Create transformation matrix
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);

    var matrix = [
        scale * cos, scale * sin, 0,
        -scale * sin, scale * cos, 0,
        positionX, positionY, 1
    ];

    return matrix;
}

// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform(trans1, trans2) {
    // Extract components of transformation matrices
    var a = trans1[0], b = trans1[1], c = trans1[2];
    var d = trans1[3], e = trans1[4], f = trans1[5];
    var g = trans1[6], h = trans1[7], i = trans1[8];

    var j = trans2[0], k = trans2[1], l = trans2[2];
    var m = trans2[3], n = trans2[4], o = trans2[5];
    var p = trans2[6], q = trans2[7], r = trans2[8];

    // Compute combined transformation matrix
    var matrix = [
        a * j + b * m + c * p,
        a * k + b * n + c * q,
        a * l + b * o + c * r,
        d * j + e * m + f * p,
        d * k + e * n + f * q,
        d * l + e * o + f * r,
        g * j + h * m + i * p,
        g * k + h * n + i * q,
        g * l + h * o + i * r
    ];

    return matrix;
}
