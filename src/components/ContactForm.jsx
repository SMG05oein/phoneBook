import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
// import usePhoneBookStores from "../stores/usePhoneBook";
import usePhoneBookStores from "../stores/usePhoneBook";


const ContactForm = () => {
    const [name, setName] = useState("");
    const [phone_num, setPhone_num] = useState("");
    const {addContent} = usePhoneBookStores();


    const handleAddContent=()=>{
        if(!name.trim() || !phone_num.trim()){return;}
        else{addContent(name,phone_num)}
    }
    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                <TextField id="name" label="이름" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField id="phone_num" label="전화번호" variant="standard" value={phone_num} onChange={(e) => setPhone_num(e.target.value)} />
                <Button variant={"contained"} onClick={handleAddContent}>추가</Button>
            </Box>
        </div>

);
};

export default ContactForm;