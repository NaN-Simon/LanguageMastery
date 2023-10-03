export interface IExamWord {
  id: number,
  en: string,
  rus: string,
  example?: string
}

export interface IExamWordObj {
  item: IExamWord
}