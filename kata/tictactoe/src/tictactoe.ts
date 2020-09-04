export default interface IGame {
  isOver(): boolean;
  getWinner(): string;
  getPlayerTakingThisTurn(): string;
  takeTurn(x:number, y:number): boolean;
  getGameState(): string[][];
}

export class Game implements IGame {
   private board: string[][] = [[" ", " ", " "],[" ", " ", " "], [" ", " ", " "] ];
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

  takeTurn(x:number, y:number):boolean {
     if(this.moveIsInvalid(x,y)) {
        return false;
     }

     const player = this.getPlayerTakingThisTurn();
     this.board[y][x] = player;
     this.isXturn = !this.isXturn;
     this.updateWinner(player);
     return true;
  }

  private moveIsInvalid(x:number, y:number): boolean{
     const message = 'Invalid Move';
     if(this.isOver()) {
        return true;
     }
     
     if(x > 2 || y > 2 || x <0 || y < 0){
        return true;
     }
      if (this.board[y][x] != " "){
         return true;
      }
      return false;
  }

  private updateWinner(player: string): void {
      if(this.playerWon(player)){
         this.winner = player;
      }
  }

  private playerWon(player:string): boolean {
      return this.playerWonHorizontal(player) || this.playerWonVertical(player) || this.playerWonDiagonal(player);
  }

  private playerWonVertical(player: string): boolean {
     return this.playerWonInCol(player, 0) || this.playerWonInCol(player, 1) || this.playerWonInCol(player, 2);
  }

  private playerWonHorizontal(player:string): boolean {
     return this.playerWonInRow(player, 0) || this.playerWonInRow(player, 1) || this.playerWonInRow(player, 2);
  }

  private playerWonDiagonal(player:string): boolean {
     return this.playerWonDiagonal0022(player) || this.playerWonDiagonal2002(player);
  }

  private playerWonDiagonal0022(player:string): boolean {
     return this.playerHoldsPosition(player, 0, 0) && 
      this.playerHoldsPosition(player, 1, 1) && 
      this.playerHoldsPosition(player, 2, 2);
  }

  private playerWonDiagonal2002(player:string): boolean {
     return this.playerHoldsPosition(player, 2, 0) && 
      this.playerHoldsPosition(player, 1, 1) && 
      this.playerHoldsPosition(player, 0, 2);
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