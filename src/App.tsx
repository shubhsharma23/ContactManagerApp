import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ChartsMap from './components/ChartsMap';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QueryClientProvider client={queryClient}><ChartsMap /></QueryClientProvider>} />
      </Routes>
    </Router>
  );
}

export default App;
