import {useEffect, useState } from "react";
import Header from "./header/Header";
import { MainMenu } from "./header/menu/types";

const PageLayout = () => {
    const [headerMenuList, setHeaderMenuList] = useState<MainMenu[]>([]);

    useEffect(() => {
        async function fetchMenuList() {
            const response = await fetch("/mock/categories.json");
            const result = await response.json();
            setHeaderMenuList(result.header);
        }

        fetchMenuList();
    }, []);

    return (
        <>
            <Header menuList={headerMenuList} />
        </>
    );
};

export default PageLayout;