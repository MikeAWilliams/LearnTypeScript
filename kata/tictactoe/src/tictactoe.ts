export default interface IGame {
  isOver(): boolean;
  getWinner(): string;
  getPlayerTakingThisTurn(): string;
  takeTurn(x:number, y:number):void;
  getBoardState(): string; 
}

export class Game implements IGame {
   private board: Array<Array<string>> = [[" ", " ", " "],[" ", " ", " "], [" ", " ", " "] ];
   private isXturn: boolean = true;
   private winner: string = null;

  isOver(): boolean {
      return null != this.winner;
  }

  getWinner(): string{
     return this.winner;
  }

  getPlayerTakingThisTurn(): string {
     if(this.isXturn) {
      return "X";
     }
     return "O"
  }

  takeTurn(x:number, y:number):void {
     const player = this.getPlayerTakingThisTurn();
     this.board[y][x] = player;
     this.isXturn = !this.isXturn;
     this.updateWinner(player);
  }

  getBoardState(): string {
     let result = "";
     for(const row of this.board){
        for(const position of row) {
           result += position;
        }
        result += "\n";
     }
     return result;
  }

  private updateWinner(player: string): void {
      if(this.playerWon(player)){
         this.winner = player;
      }
  }

  private playerWon(player:string): boolean {
      return this.playerWonHorizontal(player) || this.playerWonVertical(player);
  }

  private playerWonVertical(player: string): boolean {
     return this.playerWonInCol(player, 0) || this.playerWonInCol(player, 1) || this.playerWonInCol(player, 2);
  }

  private playerWonHorizontal(player:string): boolean {
     return this.playerWonInRow(player, 0) || this.playerWonInRow(player, 1) || this.playerWonInRow(player, 2);
  }

  private playerWonInCol(player:string, colIndex:number):boolean {
     return this.playerHoldsPosition(player, 0, colIndex) && 
      this.playerHoldsPosition(player, 1, colIndex) && 
      this.playerHoldsPosition(player, 2, colIndex);
  }

  private playerWonInRow(player:string, rowIndex:number):boolean {
     return this.playerHoldsPosition(player, rowIndex, 0) && 
      this.playerHoldsPosition(player, rowIndex, 1) && 
      this.playerHoldsPosition(player, rowIndex, 2);
  }

  private playerHoldsPosition(player:string, rowIndex:number, columnIndex:number):boolean {
     return this.board[rowIndex][columnIndex] == player;
  }
}