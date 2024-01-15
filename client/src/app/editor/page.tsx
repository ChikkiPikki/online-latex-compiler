"use client";
import { Options } from "@/components/editor/options";
import { EditorOptions } from "@/types/editor-options";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
export default function Editor() {
  const [editorContent, setEditorContent] = useState<string>("");
  const sidebarOptions: EditorOptions = [
    {
      icon: <FaRegTrashAlt className="" />,
      text: "Delete",
      onClick() {
        console.log("clicked");
      },
    },
    {
      icon: <FaRegTrashAlt className="" />,
      text: "New file",
      onClick() {
        console.log("clicked");
      },
    },
    {
      icon: <FaRegTrashAlt className="" />,
      text: "New folder",
      onClick() {
        console.log("clicked");
      },
    },
    {
      icon: <FaRegTrashAlt className="" />,
      text: "Upload file",
      onClick() {
        console.log("clicked");
      },
    },
  ];
  return (
    <div>
      <div>
        {/* Editor sidebar */}
        <div>Workspace Name</div>
        <div>
          <Options options={sidebarOptions}></Options>
        </div>
        <div>{/* Folder and file list */}</div>
      </div>
      <div>
        {/* Editor Panel */}
        <div></div>
        <div>{/* Main panel */}</div>
      </div>
      <div>
        {/* PDF Panel */}
        <div>{/* Top options */}</div>
        <div>{/* PDF Panel */}</div>
      </div>
    </div>
  );
}
