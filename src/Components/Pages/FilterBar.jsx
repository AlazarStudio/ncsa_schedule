import React, { useState } from "react";
import { Select, MenuItem, Grid, InputLabel } from "@mui/material";
import { groups } from "../../data";

function FilterBar({ onGroupSelect }) {
    const [selectedGroup, setSelectedGroup] = useState("");

    const handleGroupChange = (e) => {
        setSelectedGroup(e.target.value);
        onGroupSelect(e.target.value);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <InputLabel>Выберите группу</InputLabel>
                <Select sx={{ width: '300px' }} value={selectedGroup} onChange={handleGroupChange} fullWidth>
                    {groups.map((group) => (
                        <MenuItem key={group.id} value={group.fullName}>
                            {group.fullName}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
        </Grid>
    );
}

export default FilterBar;
