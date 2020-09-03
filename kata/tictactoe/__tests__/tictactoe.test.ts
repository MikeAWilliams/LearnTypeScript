import {Game} from "../src";

describe('Bowling Game Test', () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  });

it('first player is x and game is not over at init', () => {
   expect(game.isOver()).toBeFalsy();
   expect(game.getPlayerTakingThisTurn()).toBe("X");
});

it('after one move the game is not over and the next player is O', () => {
   game.takeTurn(1,0);
   expect(game.isOver()).toBeFalsy();
   expect(game.getPlayerTakingThisTurn()).toBe("O");
});
});