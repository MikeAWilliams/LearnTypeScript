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

it('x wins top', () => {
   const xRow = 0;
   const oRow = 1;
   game.takeTurn(0,xRow);
   game.takeTurn(1,oRow);
   game.takeTurn(1,xRow);
   game.takeTurn(0,oRow);
   game.takeTurn(2,xRow);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("X");
});

it('x wins middle row', () => {
   const xRow = 1;
   const oRow = 0;
   game.takeTurn(0,xRow);
   game.takeTurn(1,oRow);
   game.takeTurn(1,xRow);
   game.takeTurn(0,oRow);
   game.takeTurn(2,xRow);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("X");
});

it('x wins bottom row', () => {
   const xRow = 2;
   const oRow = 0;
   game.takeTurn(0,xRow);
   game.takeTurn(1,oRow);
   game.takeTurn(1,xRow);
   game.takeTurn(0,oRow);
   game.takeTurn(2,xRow);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("X");
});

it('x wins first column', () => {
   const xCol = 0;
   const oCol = 1;
   game.takeTurn(xCol, 0);
   game.takeTurn(oCol, 0);
   game.takeTurn(xCol, 1);
   game.takeTurn(oCol, 1);
   game.takeTurn(xCol, 2);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("X");
});
});