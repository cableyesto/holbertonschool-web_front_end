class studentHogwarts {
    constructor() {
        let privateScore = 0;
        let name = null;

        // Private method in closure
        function changeScoreBy(points) {
            privateScore += points;
        }

        // Return an object with public methods
        return {
            setName(newName) {
                name = newName;
            },
            rewardStudent() {
                changeScoreBy(1);
            },
            penalizeStudent() {
                changeScoreBy(-1);
            },
            getScore() {
                return `${name}: ${privateScore}`;
            }
        };
    }
}

let harry = new studentHogwarts();
harry.setName("Harry");
for (let i = 0; i < 4; i++) {
    harry.rewardStudent();
}
console.log(harry.getScore());


let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (let i = 0; i < 3; i++) {
    draco.penalizeStudent();
}
console.log(draco.getScore());