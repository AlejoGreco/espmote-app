import React, { useMemo } from 'react'
import { 
    Accordion, 
    AccordionSummary, 
    AccordionDetails,
    Typography,
    Box,
    Avatar
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded'
import { useTheme } from '@emotion/react'

const accordionIcons = {
    nodeForm: CloudUploadRoundedIcon
}

const AccordionWrap = ({children, title, icon}) => {
    const theme = useTheme()
    const Icon = useMemo(() => accordionIcons[icon], [icon])

    return (
        <Accordion
            disableGutters={true}
            sx={{
                height: '100%',
                p: 2,
                borderRadius: '12px !important',
                backgroundColor: theme.palette.background.default,
            }}> 
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ 
                px: 0,
                '& .MuiAccordionSummary-content': {
                    my: 0
                }
            }}

            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Avatar 
                        variant="rounded"
                        sx={{ 
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            mr: 1.8
                        }}>
                            <Icon />
                    </Avatar>
                    <Typography variant="h4">
                        {title}
                    </Typography>
                </Box>   
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionWrap