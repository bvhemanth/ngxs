export class TodoAction {
  public static readonly type = '[Todo] Add item';
  constructor(public payload) { 
    console.log(payload);
  }
  
  
}

export class AddAction{
  public static readonly type = '[Todo] Add item';
  constructor(public payload) { 
    console.log(payload);
  }
  
}
export class deleteAction {
  static readonly type = '[Agent] Delete';

  constructor(public id: number) {}
}