import React from 'react';
import withTitle from '../utils/withTitle';

const BookAddScreen = ({ }) => {
    //TODO: Initialize Here


    return (
        <div className='BookAddScreen'>
            <section id="contact-form" className="py-3">
                <div className="container">
                    <h3 className="l-heading">Add New Book</h3>
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
        </div>
    );
}

export default BookAddScreen;