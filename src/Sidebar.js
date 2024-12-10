// Sidebar.js

// function Sidebar() {
//     return (
//       <div className="sidebar">
//         <h2>Sidebar</h2>
//         {/* Sidebar content */}
//       </div>
//     );
//   }
  
//   export default Sidebar;





import React, { useState } from 'react';
import { Typography, Box, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ToggleButton from './toggleButton';

interface ToggleGroupsProps {
    type?: boolean,
    status?: boolean,
    confidenceLevel?: boolean,
    dataFromToggleGroups: (data: { type: 'Personal' | 'Profesional'; status: 'Current' | 'Previous'; confidenceLevel: string }) => void;
}

const ToggleButtonGroups = ( { type, status, confidenceLevel, dataFromToggleGroups } : ToggleGroupsProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [anchorElConfidence, setAnchorElConfidence] = useState<null | HTMLElement>(null);
    const [confidenceValue, setConfidenceValue] = useState("Level of Confidence");
    const [selectColor, setSelectColor] = useState("#CCCFD5");
    const [isLeftButtonDisabled,setisLeftButtonDisabled]=useState(false);
    const [isButtonDisabled,setIsButtonDisabled]=useState(false);
    const confidenceLevels =  ["Level of Confidence","Low Confidence", "Medium Confidence", "High Confidence", "Very High Confidence"];
    const openConfidence = Boolean(anchorElConfidence);
    const [typeToggle, setTypeToggle] = useState<'Personal' | 'Profesional'>('Personal');
    const [statusToggle, setStatusToggle] = useState<'Current' | 'Previous'>('Current');

    const handleCloseConfidence = () => {
        setAnchorElConfidence(null);
    }

    const toggleDropDown = (event: React.MouseEvent<HTMLElement>) => {
        setIsOpen(!isOpen);
        setAnchorElConfidence(event.currentTarget);
    }

    const handleToggleGroupChange = (type: 'Personal' | 'Profesional' | 'Current' | 'Previous' | string) => {
        if (type === 'Personal' || type === 'Profesional') {
            setTypeToggle(type);
            // Send updated data to the parent
            dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: confidenceValue });
        } else if (type === 'Current' || type === 'Previous') {
            setStatusToggle(type);
            // Send updated data to the parent
            dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: confidenceValue });
        }
    };


    const leftSelectOption = () => {
        const currentIndex = confidenceLevels.indexOf(confidenceValue);
        const prevIndex = (currentIndex - 1 + confidenceLevels.length) % confidenceLevels.length;
        if (currentIndex !== 0) {
            const newConfidenceValue = confidenceLevels[prevIndex];
            setConfidenceValue(newConfidenceValue);
            setIsOpen(false);
            // Update select color based on the selected option
            if (newConfidenceValue === confidenceLevels[0]) {
                setSelectColor("lightgray");
            } else if (newConfidenceValue === confidenceLevels[1]) {
                setSelectColor("#DFA2A2");
            } else if (newConfidenceValue === confidenceLevels[2]) {
                setSelectColor("#F5E6BA")
            } else if (newConfidenceValue === confidenceLevels[3]) {
                setSelectColor("#BFDDB3")
            } else if (newConfidenceValue === confidenceLevels[4]) {
                setSelectColor("#80BB68")
            }
            if (prevIndex === 0) {
                setisLeftButtonDisabled(true);
            } else {
                setisLeftButtonDisabled(false);
            }
            // Send updated data to the parent
            dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: newConfidenceValue });
        }
    };

    const rightSelectOption = () => {
        const currentIndex = confidenceLevels.indexOf(confidenceValue);
        const nextIndex = (currentIndex + 1) % confidenceLevels.length;
        if (currentIndex !== confidenceLevels.length - 1) {
            const newConfidenceValue = confidenceLevels[nextIndex];
            setConfidenceValue(newConfidenceValue);
            setIsOpen(false);
            // Update select color based on the selected option
            if (newConfidenceValue === confidenceLevels[0]) {
                setSelectColor("lightgray");
            } else if (newConfidenceValue === confidenceLevels[1]) {
                setSelectColor("#DFA2A2");
            } else if (newConfidenceValue === confidenceLevels[2]) {
                setSelectColor("#F5E6BA")
            } else if (newConfidenceValue === confidenceLevels[3]) {
                setSelectColor("#BFDDB3")
            } else if (newConfidenceValue === confidenceLevels[4]) {
                setSelectColor("#80BB68")
            }
            if (nextIndex === confidenceLevels.length - 1) {
                setIsButtonDisabled(true);
            } else {
                setIsButtonDisabled(false);
            }
            // Send updated data to the parent
            dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: newConfidenceValue });
        }
    };

    const selectOption = (option: string) => {
        setConfidenceValue(option);
        setIsOpen(false);
        // Update select color based on the selected option
        if (option === confidenceLevels[0]) {
            setSelectColor("lightgray");
        } else if (option === confidenceLevels[1]) {
            setSelectColor("#DFA2A2");
        } else if(option === confidenceLevels[2]){
            setSelectColor("#F5E6BA")
        } else if(option === confidenceLevels[3]){
            setSelectColor("#BFDDB3")
        } else if(option === confidenceLevels[4]){
            setSelectColor("#80BB68")
        }
        handleCloseConfidence();
        // Send updated data to the parent
        dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: option });
    };

    return (
        <Grid item xs={12} sx={{ display: 'flex' }} p={1}>
            { type &&
                <Box sx={{ display: 'flex', flexDirection: 'column'}} mr={5}>
                    <Typography variant='caption' color='text.secondary' mb={1}>
                        Type - optional
                    </Typography>
                    <ToggleButton firstButton="Personal" secondButton="Profesional" onButtonClick={(type) => handleToggleGroupChange(type)} />
                </Box>
            }
            { status &&
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <Typography variant='caption' color='text.secondary' mb={1}>
                        Status - optional
                    </Typography>
                    <ToggleButton firstButton="Current" secondButton="Previous" onButtonClick={(status) => handleToggleGroupChange(status)} />
                </Box>
            }
            { confidenceLevel &&
                <Box sx={{ display: 'flex', flexDirection: 'column'}} ml={5}>
                    <Typography variant='caption' color='text.secondary' mb={1}>
                        Confidence Level - optional
                    </Typography>
                    <Box
                        sx={{
                            textTransform: 'capitalize',
                            borderRadius: '2rem',
                            backgroundColor: selectColor,
                            minWidth: '280px',
                            color: 'black',
                            padding: '0px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                        onClick={toggleDropDown}
                    >
                        <IconButton
                            sx={{ marginRight: '1rem' }}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent dropdown menu from appearing
                                leftSelectOption();
                            }}
                            disabled={isLeftButtonDisabled}
                        >
                            <ChevronLeftIcon />
                        </IconButton>
                        <Typography sx={{ flexGrow: 1, textAlign: 'center' }}>{confidenceValue}</Typography>
                        <IconButton
                            sx={{ marginLeft: '1rem' }}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent dropdown menu from appearing
                                rightSelectOption();
                            }}
                            disabled={isButtonDisabled}
                        >
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                    {isOpen && (
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorElConfidence}
                            open={openConfidence}
                            onClose={handleCloseConfidence}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            sx={{
                                '.MuiMenu-list': {
                                    padding: '0px',
                                },
                                padding: '0px',
                            }}
                        >
                            {confidenceLevels.map((value, index) => (
                                <MenuItem
                                    key={index}
                                    onClick={() => selectOption(value)}
                                    sx={{
                                        minWidth: '280px',
                                        padding: '5px 2rem',
                                        backgroundColor: '#CCCFD5',
                                        '&:hover': {
                                            backgroundColor: 'grey',
                                        },
                                    }}
                                >
                                    {value}
                                </MenuItem>
                            ))}
                        </Menu>
                    )}
                </Box>
            }
        </Grid>
    );
};

export default ToggleButtonGroups;
  