export enum Color {
  red = 'Rojo',
  black = 'Negro',
  blue = 'Azul',
  green = 'Verde'
}

export interface Hero {
  name : string,
  canFly : boolean,
  color : Color
}
