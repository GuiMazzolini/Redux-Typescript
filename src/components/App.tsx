import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state/index.ts';
import RepositoriesList from './RepositoriesList.tsx'

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Search For a Package</h1>
                <RepositoriesList />
            </div>

        </Provider>
      );
};

export default App;