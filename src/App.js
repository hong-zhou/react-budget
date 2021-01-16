import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";
import { useSelector } from "react-redux";

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      } else {
        return (totalIncome += Number(entry.value));
      }
    });
    setTotal(totalIncome - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncome);
  }, [entries]);

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value={total} size="small" />
      <DisplayBalances totalIncome={incomeTotal} totalExpense={expenseTotal} />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
