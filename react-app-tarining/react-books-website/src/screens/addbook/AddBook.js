import React from 'react'
import Header from '../../components/AppHeader'
import Footer from '../../components/AppFooter'

export const AddBook = () => {
    return (
        <div>
            <Header />
            <section id="contact-form" className="py-3">
                <div className="container">
                    <h3 className="l-heading">Please fill out the book details below.</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">TITLE</label>
                            <input type="text" className="form-control" name="title" id="title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">AUTHOR</label>
                            <input type="text" className="form-control" name="author" id="author" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">PRICE</label>
                            <input type="text" className="form-control" name="price" id="price" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rating">RATING</label>
                            <input type="text" className="form-control" name="rating" id="rating" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="isbn">ISBN</label>
                            <input type="text" className="form-control" name="isbn" id="isbn" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="coverphoto">Cover Photo</label>
                            <input type="file" className="form-control" name="coverphoto" id="coverphoto" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">DESCRIPTION</label>
                            <textarea name="description" className="form-control" id="description" defaultValue={""} />
                        </div>
                        <button type="submit" id="btnsubmit" className="btnsub btn-primary">Save</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AddBook
