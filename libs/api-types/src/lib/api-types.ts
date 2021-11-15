export type Note = {
  id?: number;
  title: string;
  content: string;
  createdAt?: string;
};

export type NoteCreationResponse = {
  errors?: any;
  note?: Note;
};
