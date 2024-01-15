import { EditorOption, EditorOptions } from "@/types/editor-options";

export function Options({ options }: { options: EditorOptions }) {
  return (
    <div>
      {options.map((option: EditorOption, index) => {
        return (
          <div onClick={option.onClick} key={index}>
            {option.icon}
          </div>
        );
      })}
    </div>
  );
}
