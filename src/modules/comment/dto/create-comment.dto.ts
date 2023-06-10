//Структура объекта для создания нового комментария
export default class CreateCommentDto {
  public text!: string;
  public rating!: number;
  public oferId!: string;
  public userId!: string;
}
