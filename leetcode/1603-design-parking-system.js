// TIME: O(1)
// SPACE: O(1)
class ParkingSystem {
    constructor(big, medium, small) {
        this.spots = [big, medium, small];
    }

    addCar(carType) {
        return this.spots[carType - 1]-- > 0;
    }
}