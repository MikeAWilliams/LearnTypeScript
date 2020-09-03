export default interface IGame {
  isOver(): boolean;
  getWinner(): string;
  getPlayerTakingThisTurn(): string;
  takeTurn(x:number, y:number):void;
  getBoardState(): Array<Array<string>>;
}

export class Game implements IGame {
   private board: Array<Array<string>> = [[" ", " ", " "],[" ", " ", " "], [" ", " ", " "] ];
   private isXturn: boolean = true;
  isOver(): boolean {
      return false;
  }

  getWinner(): string{
     throw new Error('Not Implmemented');
  }

  getPlayerTakingThisTurn(): string {
     if(this.isXturn) {
      return "X";
     }
     return "O"
  }

  takeTurn(x:number, y:number):void {
     this.board[y][x] = this.getPlayerTakingThisTurn();
     this.isXturn = !this.isXturn;
  }

  getBoardState(): Array<Array<string>> {
     return Array<Array<string>>();
  }

}