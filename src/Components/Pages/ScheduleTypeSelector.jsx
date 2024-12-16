import React from "react";
import { Box, Button, List, ListItem, Typography } from "@mui/material";

function ScheduleTypeSelector() {
    return (
        <Box>
            <Typography variant="h6">Выберите тип:</Typography>
            <List>
                <ListItem>
                    <Button variant="outlined" fullWidth>
                        Тип 1
                    </Button>
                </ListItem>
                <ListItem>
                    <Button variant="outlined" fullWidth>
                        Тип 2
                    </Button>
                </ListItem>
            </List>
        </Box>
    );
}

export default ScheduleTypeSelector;
