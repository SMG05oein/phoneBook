import React, {useState} from 'react';
import usePhoneBookStores from "../stores/usePhoneBook";
import {TextField} from "@mui/material";

const ContactList = () => {
    const {phoneBook} = usePhoneBookStores();
    const [search, setSearch] = useState("");

    const filteredContacts = phoneBook.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.phone_num.includes(search)
        //검색기능은 GPT가 만들었음
        //OR 연산자는 이름이랑 연락처 둘 중에서 검색을 해야하므로
        //filter 메서드는 배열에서 특정 조건을 만족하는 요소들만 반환합니다.
        //toLowerCase 매소드는 모든 문자를 소문자로 변경 내 한국어만 쓸거면 상관없을 듯
        //includes는 그냥 배열에 값이 있냐 없냐
    );

    return (
        <div>
            <TextField id="whatIsThis" label="검색" variant="standard" value={search} onChange={(e) => setSearch(e.target.value)}/>
            {/*{phoneBook.map(contact => (*/}
            {/*    <p>{contact.id} -{contact.name} - {contact.phone_num}</p>*/}
            {/*))}*/}
            {filteredContacts.map(contact => (
                <p>{contact.id} - {contact.name} - {contact.phone_num}</p>
            ))}
        </div>
    );
};

export default ContactList;