import { Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { PasswordHint } from './PasswordHint';

export const MuiTextField = () => {
    const [inputValue, setInputValue] = useState('');
    const [showHelperText, setShowHelperText] = useState(false);


    const handleInputChange = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        setInputValue(value);
    
        // Show helper text only when typing
        if (value !== '') {
          setShowHelperText(true);
        } else {
          setShowHelperText(false);
        }
    };

    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField 
                    label='Password' 
                    placeholder='Password' 
                    type='password' 
                    variant="outlined"
                    value={inputValue} 
                    onChange={handleInputChange}
                    helperText={showHelperText ? <PasswordHint input={inputValue} /> : ""}
                    fullWidth
                    sx={{
                        maxWidth:'335px',
                        '& label': {
                            color: 'rgba(255, 255, 255, 0.5)',
                        },
                        '& label.Mui-focused': {
                            color: 'rgba(255, 255, 255, 0.5)',
                        },
                        '& input': {
                            color: 'white',
                        },
                        '& fieldset': {
                            borderWidth: '3px',
                            borderRadius: '8px',
                            padding:'0 12px',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        '&:hover': {
                            '& fieldset': {
                                borderColor: 'white !important',
                            },
                        },
                        '& .MuiFormHelperText-root': {
                            margin:'20px 0 0 0'
                        },
                    }}
                />
            </Stack>
        </Stack>
    )
}