import ReactQueryProvider from './ReactQueryProvider';

    rootElement.render(
     // <AppContextProvider {...props}>
        <ReactQueryProvider>
          <yourContainerComponent />
        </ReactQueryProvider>
     // </AppContextProvider>,
    );
