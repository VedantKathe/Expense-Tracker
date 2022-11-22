import React, { useState } from "react";
import data from "../assets/transactions.json";
import { Box, Stack, TextField, Button } from "@mui/material";

const AddAmount = ({ setTransactions, setIsAddModalOpen }) => {

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
            "tag": "addition", 
            ...formData,
        };

        data.push(postData);
        setTransactions(data);
        setIsAddModalOpen(false);
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
                    Add Amount
                </Button>
            </Stack>
        </Box>


    );


}

export default AddAmount;