export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        image: string;
    }
    comments: Comment[];
    description: string;
    mainImage: {
        asset: {
            url: string;
        }
    }
    slug:{
        current: string;
    }
    body: [object]
}

export interface Comment {
    _id: string;
    _createdAt: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    approved: boolean;
    comment: string;
    name: string;
    email: string;
    post: {
        _ref: string;
        _type: string;
    }

}