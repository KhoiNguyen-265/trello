// Card Types
interface ICard {
  _id: string;
  boardId: string;
  columnId: string;
  title: string;
  description: string | null;
  cover: string | null;
  memberIds: string[];
  comments: string[];
  attachments: string[];
}

// Column Types
interface IColumn {
  _id: string;
  boardId: string;
  title: string;
  cardOrderIds: string[];
  cards: ICard[];
}

// Board Types
interface IBoard {
  _id: string;
  title: string;
  description: string | null;
  type: "public" | "private";
  ownerIds: string[];
  memberIds: string[];
  columnOrderIds: string[];
  columns: IColumn[];
}

// Mock Data Types
interface IMockData {
  board: IBoard;
}

export type { IBoard, ICard, IColumn, IMockData };
