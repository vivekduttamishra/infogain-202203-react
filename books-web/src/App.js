

import React from 'react';
import BookListScreen from './screens/BookListScreen';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';


const App = () => {

    return (
        <div>
            <AppHeader title="Book's Web" />
            <div className='screen'>
                <BookListScreen/>
            </div>
            <AppFooter/>
       </div>
    );
};

export default App;