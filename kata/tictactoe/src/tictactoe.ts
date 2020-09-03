export default interface IGame {
  isOver(): boolean;
  getWinner(): string;
  getPlayerTakingNextTurn(): string;
  takeTurn(x:number, y:number):void;
}

export class Game implements IGame {
  isOver(): boolean {
      return false;
  }

  getWinner(): string{
     throw new Error('Not Implmemented');
  }

  getPlayerTakingNextTurn(): string {
     return "X";
  }

  takeTurn(x:number, y:number):void {
     throw new Error('Not Implmemented');
  }

}