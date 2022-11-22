import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const TransactionCards = ({ element }) => {

    return (
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: 1,
            borderColor: 'text.primary',
        }}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexGrow: 1,
                }}
            >
                <Typography gutterBottom variant="h5" component="h2" sx={{px: 2, mx: 2}}>
                    {element.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" sx={{px: 2, mx: 2}}>
                    {element.amount}
                </Typography>
            </CardContent>
        </Card>
    );

};

export default TransactionCards