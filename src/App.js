import "./App.css";
import PageLayout from "./components/PageLayout";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <PageLayout>
        <Products />
        <div style={{ height: "200px" }}></div>
      </PageLayout>
    </div>
  );
}

export default App;
