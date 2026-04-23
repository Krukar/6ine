export type User = {
    avatar: {
        alt: string;
        src: string;
    };
    id: string;
};

export type Sine = {
    id: string;
    title: string;
    user: User;
};
