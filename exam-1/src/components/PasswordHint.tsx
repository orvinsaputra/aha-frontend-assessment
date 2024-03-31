import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Typography } from '@mui/material';

type PasswordHintProps = {
    input: string
}

export const PasswordHint = ( props : PasswordHintProps ) => {

    const hasUppercase = /[A-Z]/.test(props.input);
    const hasLowercase = /[a-z]/.test(props.input);
    const hasNumber = /\d/.test(props.input);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(props.input);
    const isAtLeast9Characters = /^.{9,}$/.test(props.input);

    return (
        <Box sx={{
            padding:'8px 12px',
            bgcolor:'#242424',
            margin:'0',
            borderRadius:'8px',
            boxShadow:'4px 4px 20px 0px #0000004D',
            color:'white'
        }}>
            <Box display='flex' alignItems='center' pt={1} pb={1}>
                {hasUppercase ? (
                    <CheckCircleIcon color='primary'/>
                ) : (
                    <CheckCircleOutlineIcon sx={{
                        color:'grey.700'
                    }}/>
                )}
                <Typography variant='body2' fontWeight={400} fontSize={14} lineHeight={'21px'} letterSpacing={0.25} ml={1.25}>Have at least one uppercase letter</Typography>
            </Box>
            <Box display='flex' alignItems='center' pt={1} pb={1}>
                {hasLowercase ? (
                    <CheckCircleIcon color='primary'/>
                ) : (
                    <CheckCircleOutlineIcon sx={{
                        color:'grey.700'
                    }}/>
                )}
                <Typography variant='body2' fontWeight={400} fontSize={14} lineHeight={'21px'} letterSpacing={0.25} ml={1.25}>Have at least one lowercase letter</Typography>
            </Box>
            <Box display='flex' alignItems='center' pt={1} pb={1}>
                {hasNumber ? (
                    <CheckCircleIcon color='primary'/>
                ) : (
                    <CheckCircleOutlineIcon sx={{
                        color:'grey.700'
                    }}/>
                )}
                <Typography variant='body2' fontWeight={400} fontSize={14} lineHeight={'21px'} letterSpacing={0.25} ml={1.25}>Have at least one number</Typography>
            </Box>
            <Box display='flex' alignItems='center' pt={1} pb={1}>
                {hasSpecialCharacter ? (
                    <CheckCircleIcon color='primary'/>
                ) : (
                    <CheckCircleOutlineIcon sx={{
                        color:'grey.700'
                    }}/>
                )}
                <Typography variant='body2' fontWeight={400} fontSize={14} lineHeight={'21px'} letterSpacing={0.25} ml={1.25}>Have at least one special character.<br/>(!@#$...etc)</Typography>
            </Box>
            <Box display='flex' alignItems='center' pt={1} pb={1}>
                {isAtLeast9Characters ? (
                    <CheckCircleIcon color='primary'/>
                ) : (
                    <CheckCircleOutlineIcon sx={{
                        color:'grey.700'
                    }}/>
                )}
                <Typography variant='body2' fontWeight={400} fontSize={14} lineHeight={'21px'} letterSpacing={0.25} ml={1.25}>Longer than 8 characters</Typography>
            </Box>
        </Box>
    );
}