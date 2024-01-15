/*Interface for the request body containing information about a file*/
interface File {
  fileName: string;
  userId: string;
  workspaceId: string;
  location: string; // the location relative to the workspace
  contents: string;
  createdAt: Date;
  lastUpdatedAt: Date;
}

export { File };
