 class library {
    constructor(givenBooklist) {
        this.booklist = givenBooklist;
        this.issuedBook = {};
    }
    getBookList(){
        this.booklist.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookname,user)
    {
        if(this.issuedBook.bookname == undefined){
            this.issuedBook.bookname = user;   
        }
        else
        {
            console.log('This book is not availabe');
        }
    }
    returnBook(bookname)
    {
        delete this.issuedBook.bookname;
    }
}
