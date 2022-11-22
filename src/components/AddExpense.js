import React, { useState } from "react";
import data from "../assets/transactions.json";
import { Box, Stack, TextField, Button } from "@mui/material";

const AddExpense = ({ setTransactions, setIsExpenseModalOpen }) => {

    const initialState = {
        description: "",
        amount: 0
    };

    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        const [key, value] = [e.target.name, e.target.value];
        setFormData({ ...formData, [key]: value });
    };

    const handleSubmit = async () => {

        const tempId = data.length + 1;

        const postData = {
            "id": tempId,
            "tag": "expense", 
            ...formData,
        };

        data.push(postData);
        console.log(data);
        setTransactions(data);
        setIsExpenseModalOpen(false);
    };


    return (
        <Box>
            <Stack spacing={2}>
                <TextField
                    required
                    className="form-element"
                    variant="outlined"
                    label="Amount"
                    helperText="Amount"
                    fullWidth
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    className="form-element"
                    variant="outlined"
                    label="Description"
                    helperText="Description"
                    fullWidth
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    color="primary"
                >
                    Add Expense
                </Button>
            </Stack>
        </Box>
    );
}

export default AddExpense;