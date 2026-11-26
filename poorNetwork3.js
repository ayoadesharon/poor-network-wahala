function climbStairs(totalSteps) {

    let previousWays = 1;
    let currentWays = 2;
    let nextWays;

    if (totalSteps === 1) {
        return 1;
    }

    if (totalSteps === 2) {
        return 2;
    }

    for (let count = 3; count <= totalSteps; count++) {

        nextWays = previousWays + currentWays;

        previousWays = currentWays;

        currentWays = nextWays;
    }

    return currentWays;
}

const x = climbStairs(5);

console.log(x);
