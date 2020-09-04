import {Game} from "../src";

describe('TicTacToe Game Test', () => {
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
   const xMoves = [[0,xRow], [1,xRow], [2,xRow]];
   const oMoves = [[1,oRow], [0,oRow]];
   playGame(game, xMoves, oMoves);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("X");
});

it('x wins middle row', () => {
   const xRow = 1;
   const oRow = 0;
   const xMoves = [[0,xRow], [1,xRow], [2,xRow]];
   const oMoves = [[1,oRow], [0,oRow]];
   playGame(game, xMoves, oMoves);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("X");
});

it('x wins bottom row', () => {
   const xRow = 2;
   const oRow = 0;
   const xMoves = [[0,xRow], [1,xRow], [2,xRow]];
   const oMoves = [[1,oRow], [0,oRow]];
   playGame(game, xMoves, oMoves);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("X");
});

it('x wins first column', () => {
   const xCol = 0;
   const oCol = 1;
   const xMoves = [[xCol,0], [xCol,1], [xCol,2]];
   const oMoves = [[oCol,0], [oCol,1]];
   playGame(game, xMoves, oMoves);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("X");
});

it('x wins second column', () => {
   const xCol = 1;
   const oCol = 0;
   const xMoves = [[xCol,0], [xCol,1], [xCol,2]];
   const oMoves = [[oCol,0], [oCol,1]];
   playGame(game, xMoves, oMoves);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("X");
});

it('x wins third column', () => {
   const xCol = 2;
   const oCol = 0;
   const xMoves = [[xCol,0], [xCol,1], [xCol,2]];
   const oMoves = [[oCol,0], [oCol,1]];
   playGame(game, xMoves, oMoves);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("X");
});

it('x wins diagonal 00 to 22', () => {
   const xMoves = [[0,0], [1,1], [2,2]];
   const oMoves = [[2,0], [2,1]];
   playGame(game, xMoves, oMoves);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("X");
});

it('x wins diagonal 20 to 02', () => {
   const xMoves = [[2,0], [1,1], [0,2]];
   const oMoves = [[1,0], [2,1]];
   playGame(game, xMoves, oMoves);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("X");
});

it('0 wins diagonal 20 to 02', () => {
   const xMoves = [[2,2], [2,1], [1,0]];
   const oMoves = [[2,0], [1,1], [0,2]];
   playGame(game, xMoves, oMoves);
   expect(game.isOver()).toBeTruthy();
   expect(game.getWinner()).toBe("O");
});

it('invalid moves throw', () => {
   game.takeTurn(2,2);
   expect(game.takeTurn(2, 2)).toBeFalsy();

   expect(game.takeTurn(3, 2)).toBeFalsy();
   expect(game.takeTurn(2, 3)).toBeFalsy();
   expect(game.takeTurn(-1, 2)).toBeFalsy();
   expect(game.takeTurn(0, -1)).toBeFalsy();
});

it('taking a turn when the game is over throws', () => {
   const xMoves = [[2,0], [1,1], [0,2]];
   const oMoves = [[1,0], [2,1]];
   playGame(game, xMoves, oMoves);
   expect(game.takeTurn(0, 0)).toBeFalsy();
});
});

function playGame(game:Game, xMoves:number[][], oMoves:number[][]):void {
   expect(xMoves.length == oMoves.length || xMoves.length == oMoves.length + 1).toBeTruthy();
   for(const xIndex in xMoves){
      expect(game.takeTurn(xMoves[xIndex][0], xMoves[xIndex][1])).toBeTruthy();
      if(xIndex < oMoves.length){
         expect(game.takeTurn(oMoves[xIndex][0], oMoves[xIndex][1])).toBeTruthy();
      }
   }
}