
const printMatrix = (matrix) => {
    for(let i = 0; i < matrix.length; i++){
        console.log(matrix[i][0] , matrix[i][1], matrix[i][2], matrix[i][3]);
    }
}

//MATRIX TEMPLATES//

//------rotations------//
const angleA = 77;

const Rx = [
    [1, 0, 0, 0],
    [0, Math.cos(angleA*Math.PI/180), -Math.sin(angleA*Math.PI/180), 0],
    [0, Math.sin(angleA*Math.PI/180), Math.cos(angleA*Math.PI/180), 0],
    [0, 0, 0, 1]
];


const angleB = 49;

const Ry = [
    [Math.cos(angleB*Math.PI/180), 0, Math.sin(angleB*Math.PI/180), 0],
    [0, 1, 0, 0],
    [-Math.sin(angleB*Math.PI/180), 0, Math.cos(angleB*Math.PI/180), 0],
    [0, 0, 0, 1]
];

const angleC = 77;

const Rz = [
    [Math.cos(angleC*Math.PI/180), -Math.sin(angleC*Math.PI/180), 0, 0],
    [Math.sin(angleC*Math.PI/180), Math.cos(angleC*Math.PI/180), 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
];



printMatrix(Rz);

//-------------------------//

//------traslations------//

const T = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
];


