import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import data from "../assets/transactions.json";
import AddAmount from "./AddAmount";
import AddExpense from "./AddExpense";
import TransactionCards from "./TransactionCard"


const Main = () => {
    const [transactions, setTransactions] = useState(data);
    const [balance, setBalance] = useState(0);
    const [expense, setExpense] = useState(0);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

    function findBalance() {
        let sum = 0
        for (let index = 0; index < transactions.length; index++) {
            if (transactions[index].tag === "addition") {
                sum += Number(transactions[index].amount);
            } else {
                sum -= Number(transactions[index].amount);
            }
        }
        console.log("Balanec", sum);
        setBalance(sum);
    }

    function findExpense() {
        let sum = 0
        for (let index = 0; index < transactions.length; index++) {
            if (transactions[index].tag === "expense") {
                sum -= Number(transactions[index].amount);
            }
        }
        console.log("Expence", -sum);
        setExpense(-sum);
    }

    const handleAddOpen = () => {
        setIsAddModalOpen(true);
    };

    const handleAddClose = () => {
        setIsAddModalOpen(false);
    };

    const handleExpenseOpen = () => {
        setIsExpenseModalOpen(true);
    };

    const handleExpenseClose = () => {
        setIsExpenseModalOpen(false);
    };

    useEffect(() => {
        findBalance();
        findExpense();
        // eslint-disable-next-line
    });

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%'
                }}>
                <Typography variant="h6" color="inherit" noWrap>
                    Expense Tracker
                </Typography>
                <Box
                    sx={{
                        p: 2,
                        m: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h6" color="inherit" noWrap>
                            Balance
                        </Typography>
                        <Typography variant="h6" color="inherit" noWrap>
                            {balance}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h6" color="inherit" noWrap>
                            Expense
                        </Typography>
                        <Typography variant="h6" color="inherit" noWrap>
                            {expense}
                        </Typography>
                    </Box>
                </Box>
                <Dialog
                    open={isAddModalOpen}
                    onClose={handleAddClose}
                    aria-labelledby="simple-dialog-title"
                >
                    <Grid container className="dialog">
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            width="100%"
                        >
                            <IconButton
                                aria-label="close"
                                className={"close-button"}
                                onClick={handleAddClose}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Grid item xs={12}>
                            <AddAmount
                                setTransactions={setTransactions}
                                setIsAddModalOpen={setIsAddModalOpen}
                            />
                        </Grid>
                    </Grid>
                </Dialog>
                <Button
                    variant="contained"
                    onClick={handleAddOpen}
                    sx={{
                        p: 2,
                        m: 2
                    }}
                >
                    Add Amount
                </Button>
                <Dialog
                    open={isExpenseModalOpen}
                    onClose={handleAddClose}
                    aria-labelledby="simple-dialog-title"
                >
                    <Grid container className="dialog">
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            width="100%"
                        >
                            <IconButton
                                aria-label="close"
                                className={"close-button"}
                                onClick={handleExpenseClose}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Grid item xs={12}>
                            <AddExpense
                                setTransactions={setTransactions}
                                setIsExpenseModalOpen={setIsExpenseModalOpen}
                            />
                        </Grid>
                    </Grid>
                </Dialog>
                <Button
                    sx={{
                        p: 2,
                        m: 2
                    }}
                    variant="contained"
                    onClick={handleExpenseOpen}
                >
                    Add Expense
                </Button>
                <Container sx={{
                    px: 2, py: 8, height: 200 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
                        {transactions.map((element) => (
                            <Grid item key={element.id} xs={12} 
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                            }}
                            >
                                <TransactionCards element={element} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Main