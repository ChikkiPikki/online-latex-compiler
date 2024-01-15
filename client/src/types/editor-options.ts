/* Interface for the Options component for the editor */
export interface EditorOption {
  text: string;
  onClick(): any;
  icon: React.ReactNode;
}

export interface EditorOptions extends Array<EditorOption> {
  [index: number]: EditorOption;
}
