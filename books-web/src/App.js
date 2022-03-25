

import React, {useState} from 'react';
import BookManageScreen from './screens/BookManageScreen';
import BookListScreen from './screens/BookListScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BookAddScreen from './screens/BookAddScreen';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';


const App = () => {

    const [screen,setScreen] = useState('book-list');
    const [selectedBook,selectBook] = useState(null);

    const handleBookSelect=book=>{
        selectBook(book);
        setScreen('book-details');
    }

    

    return (
        <div>
            <AppHeader title="Book's Web" setScreen={setScreen} />
            <div className='screen'>
               {screen==='book-list' && <BookListScreen  onBookSelect={handleBookSelect}/> }
               {screen==='book-details' && <BookDetailsScreen selectedBook={selectedBook} onBack={()=>setScreen('book-list')}  /> }
               {screen==='book-add' && <BookAddScreen/>}
            </div>
            <AppFooter/>
       </div>
    );
};

export default App;