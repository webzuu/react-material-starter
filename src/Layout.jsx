import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default function Layout({ children }) {
  return (
    <MuiThemeProvider>
      <div>
        <h1>Hello, world!</h1>
        {children}
      </div>
    </MuiThemeProvider>
  );
}
