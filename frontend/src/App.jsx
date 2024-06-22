import { useState } from "react";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import { Heading } from "./components/ui/heading";
import { Divider } from "./components/ui/divider";
import { Text } from "./components/ui/text";
function App() {
  return (
    <>
      <AppLayout>
        <div className="space-y-2">
          <Heading>Analytical Questions</Heading>
          <Text>
            This is a collection of analytical questions that are commonly asked
            in interviews for data science, machine learning, and other
            analytical roles.
          </Text>
        </div>
        <div className="py-4">
          <Divider />
        </div>
        <div className="grid gap-4 md:grid-cols-12">
          <div className="col-span-3 p-2 bg-white"></div>
          <div className="col-span-6 p-2 bg-white"></div>
          <div className="col-span-3 p-2 bg-white"></div>
        </div>
      </AppLayout>
    </>
  );
}

export default App;
