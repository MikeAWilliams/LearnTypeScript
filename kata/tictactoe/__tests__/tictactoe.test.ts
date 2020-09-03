import {Game} from "../src";

test('first player is x and game is not over at init', () => {
   let game = new Game();
   expect(game.isOver()).toBeFalsy();
   expect(game.getPlayerTakingNextTurn()).toBe("X");
});
