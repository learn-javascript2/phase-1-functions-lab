// Code your solution in this file!
function distanceFromHqInBlocks(pickupStreet) {
    const headquarters = 42;
    let blocks = Math.abs(headquarters - pickupStreet);
    return blocks;
}

function distanceFromHqInFeet(pickupStreet) {
    let convertToFeet = 264;
    let distance = distanceFromHqInBlocks(pickupStreet) * convertToFeet;
    return distance;
}

function distanceTravelledInFeet(start, destination) {
    let distanceConvert = 264;
    let distanceCalculation = Math.abs(start - destination);
    let total = distanceCalculation * distanceConvert;
    return total;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start - destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 'cannot travel that far';;
    } else {
        return 25;
    }
}
