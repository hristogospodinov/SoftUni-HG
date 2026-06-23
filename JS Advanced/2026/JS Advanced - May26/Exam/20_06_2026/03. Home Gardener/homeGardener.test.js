const { expect } = require('chai');
const homeGardener = require('./homeGardener');

describe("homeGardener", () => {
    describe("plantCareInstructions", () => {

        it("test for succulent", () => {
            let result = homeGardener.plantCareInstructions("succulent");
            expect(result).to.equal("Succulents require minimal watering, indirect sunlight, and well-draining soil.");
        });

        it("test for vegetable", () => {
            let result = homeGardener.plantCareInstructions("vegetable");
            expect(result).to.equal("Vegetables need full sun, regular watering, and nutrient-rich soil.");
        });

        it("test for flowering", () => {
            let result = homeGardener.plantCareInstructions("flowering");
            expect(result).to.equal("Flowering plants require moderate watering, occasional fertilization, and pruning.");
        });

        it("test for tree", () => {
            let result = homeGardener.plantCareInstructions("tree");
            expect(result).to.equal("Trees need deep watering, proper spacing, and regular mulching.");
        });

        it("test for invalid plant type", () => {
            expect(() => {homeGardener.plantCareInstructions("invalid");}).to.throw("Invalid plant type!");
        });

    });

    describe("availablePlants", () => {
        it("test if plantSizes is not array", () => {
            expect(() => {
                homeGardener.availablePlants("", 3);}).to.throw("Invalid Information!");
        });
        it("test if maxHeight is not a number", () => {
            expect(() => {
                homeGardener.availablePlants([1, 2, 3], "yes");}).to.throw("Invalid Information!");
        });
        it("test if plantSizes is empty", () => {
            expect(() => {
                homeGardener.availablePlants([], 5);}).to.throw("Invalid Information!"); 
        });
        it("test if maxHeight is less than 1", () => {
            expect(() => {
                homeGardener.availablePlants([1, 2, 3], -5);
                }).to.throw("Invalid Information!");
        });
        it("test if correct count when all plants are suitable", () => {
            const result = homeGardener.availablePlants([10, 20, 30], 100);
            expect(result).to.equal("There are 3 plants suitable for your garden height criteria!");
        });
        it("test if correct count when some plants are suitable", () => {
            const result = homeGardener.availablePlants([10, 20, 60], 30);
            expect(result).to.equal("There are 2 plants suitable for your garden height criteria!");
        });
        it("test if ignores negative and zero values", () => {
            const result = homeGardener.availablePlants([10, -5, 20, 0], 20);
            expect(result).to.equal("There are 2 plants suitable for your garden height criteria!");
        });
        it("test if returns zero when no plants are suitable", () => {
            const result = homeGardener.availablePlants([50, 60, 70], 5);
            expect(result).to.equal("There are 0 plants suitable for your garden height criteria!");
        });
    });

    describe("gardenExpenses", () => {

        it("test if tools not an array", () => {
            expect(() => {homeGardener.gardenExpenses("shovel", [], true);}).to.throw("Invalid Information!");
        });
        it("test if seeds not an array", () => {
            expect(() => {homeGardener.gardenExpenses([], "flower seeds", true);
            }).to.throw("Invalid Information!");
        });
        it("test if discount is not boolean", () => {
            expect(() => {homeGardener.gardenExpenses([], [], "true");}).to.throw("Invalid Information!");
        });

        it("calculates cost without discount", () => {
            const result = homeGardener.gardenExpenses(
                ["shovel"],
                ["vegetable seeds"],
                false
            );

            expect(result).to.equal("You spent $30.00 on tools and seeds!");
        });

        it("calculates cost with discount", () => {
            const result = homeGardener.gardenExpenses(
                ["shovel"],
                ["vegetable seeds"],
                true
            );

            expect(result).to.equal("You spent $27.00 on tools and seeds with a 10% discount!");
        });

        it("calculates multiple tools and seeds without discount", () => {
            const result = homeGardener.gardenExpenses(
                ["shovel", "rake", "watering can"],
                ["vegetable seeds", "flower seeds", "herb seeds"],
                false
            );

            expect(result).to.equal("You spent $66.00 on tools and seeds!");
        });

        it("calculates multiple tools and seeds with discount", () => {
            const result = homeGardener.gardenExpenses(
                ["shovel", "rake", "watering can"],
                ["vegetable seeds", "flower seeds", "herb seeds"],
                true
            );

            expect(result).to.equal("You spent $59.40 on tools and seeds with a 10% discount!");
        });

    });
});