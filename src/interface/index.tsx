interface Button {
    btnClass: string;
    title: string;
    onClick: ()=> void;
}

interface GithubAuth {
    clientId : string;
    clientSecret :string;
}