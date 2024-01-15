/*Interface for the request body containing information about a folder*/
interface Folder {
  folderName: string;
  userId: string;
  workspaceId: string;
  location: string; // the location relative to the workspace
  createdAt: Date;
  lastUpdatedAt: Date;
}

export { Folder };
