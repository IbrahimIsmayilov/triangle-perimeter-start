// Triangle Perimeter Assignment Start Code

// Determine Triangle Perimeter and Side Distance Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
    console.log("hi")
    // Get Side Measurements
    let xA = +document.getElementById('xA').value;
    let yA = +document.getElementById('yA').value;
    let xB = +document.getElementById('xB').value;
    let yB = +document.getElementById('yB').value;
    let xC = +document.getElementById('xC').value;
    let yC = +document.getElementById('yC').value;

    // Process
    let AB = dist(xA, yA, xB, yB);
    let AC = dist(xA, yA, xC, yC);
    let BC = dist(xA, yA, xB, yB);

    // Output
    document.getElementById('AB-Value').innerHTML = AB;
    document.getElementById('AC-Value').innerHTML = AC;
    document.getElementById('BC-Value').innerHTML = BC;
    document.getElementById("Perimeter-Value").innerHTML = AB + AC + BC;
}

function dist(x1, y1, x2, y2) {
    let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    return distance;
}