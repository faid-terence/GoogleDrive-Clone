interface Button {
  btnClass?: string;
  title: string;
  onClick?: () => void;
}

interface GithubAuth {
  clientId: string;
  clientSecret: string;
}

interface Progress {
  progress : number;
}

interface ArrayType{
    length: number;
    map(arg0: (file: any) => React.JSX.Element): React.ReactNode;
  
}