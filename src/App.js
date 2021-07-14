import React from 'react';

import AddFood from './components/Foods/addNewFood';

function App() {
  return (
    <div>
      {/* navigation */}
      <div id="header-navigation">
        <div>
          icon
        </div>
        <div>
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
      </div>
      {/* header */}
      <h1>Food Diary App</h1>
      {/* form */}
      <div>
        <AddFood />
      </div>
    </div>
  );
}

export default App;
