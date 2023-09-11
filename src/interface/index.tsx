/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
interface Button {
  btnClass?: string;
  title: string;
  onClick?: () => void;
}

interface AuthInterface {
  clientId: string;
  clientSecret: string;
}

interface Progress {
  progress : number;
}

interface ArrayType{
    length: number;
    map: any
  
}

interface FolderStructure {
  parentId : string ;
}