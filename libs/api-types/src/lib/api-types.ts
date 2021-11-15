export type Note = {
  id?: string;
  title: string;
  content: string;
  createdAt?: string;
};

export type NoteCreationResponse = {
  errors?: any;
  note?: Note;
};
