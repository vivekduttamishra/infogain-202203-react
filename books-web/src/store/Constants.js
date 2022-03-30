

export const UserActions={
    LOGIN:'USER_LOGIN',
    LOGOUT:'USER_LOGOUT'
}

export const BookActions={
    BOOKS_SELECT:'BOOKS_SELECT',
    BOOK_SELECT:'BOOK_SELECT',
    BOOK_ADD:'BOOK_ADD',
    BOOK_REMOVE:'BOOK_REMOVE'
}

export const AuthorActions={
    AUTHORS_SELECT:'AUTHORS_SELECT',
    AUTHOR_SELECT:'AUTHOR_SELECT',
    AUTHOR_ADD:'AUTHOR_ADD',
    AUTHOR_REMOVE:'AUTHOR_REMOVE'
};

export const FavoriteActions={
    FAVORITES_SELECT:'FAVORITES_SELECT',
    FAVORITES_ADD:'FAVORITES_ADD',
    FAVORITE_REMOVE:'FAVORITE_REMOVE'
};


export const StatusActions={
    STATUS_SET: 'STATUS_SET',
}

export const Status={
    STATUS_IDLE: 'STATUS_IDLE',
    STATUS_WAITING: 'STATUS_WAITING',
    STATUS_SUCCESS: 'STATUS_SUCCESS',
    STATUS_ERROR: 'STATUS_ERROR',
}


export const SUCCESS =  {type:StatusActions.STATUS_SET, payload:{status:Status.STATUS_DONE}};
export const WAITING =  {type:StatusActions.STATUS_SET, payload:{status:Status.STATUS_WAITING}};
export const IDLE =  {type:StatusActions.STATUS_SET, payload:{status:Status.STATUS_IDLE}};

export const errorStatus=error=> {return {type:StatusActions.STATUS_SET, payload:{status:Status.STATUS_ERROR, error:error}}};



