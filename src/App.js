import logo from './logo.svg';
import './App.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://cfcbd77d293b4ab3a0cf7fa1ea6bce21@o1305682.ingest.sentry.io/6547388",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <code>Blockwatch Sentry.io</code> test case.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello There.
        </a>
        <button onClick={methodDoesNotExist}>Break the world</button>;
      </header>
    </div>
  );
}

export default App;
